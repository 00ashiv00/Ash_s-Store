package com.cognizant.training.onlineFashionStore.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.training.onlineFashionStore.exceptions.ResourceNotFoundException;
import com.cognizant.training.onlineFashionStore.model.Cart;
import com.cognizant.training.onlineFashionStore.model.OrderDetails;
import com.cognizant.training.onlineFashionStore.model.Orders;
import com.cognizant.training.onlineFashionStore.model.Products;
import com.cognizant.training.onlineFashionStore.model.Users;
import com.cognizant.training.onlineFashionStore.repository.CartRepository;
import com.cognizant.training.onlineFashionStore.repository.OrderDetailsRepository;
import com.cognizant.training.onlineFashionStore.repository.OrdersRepository;
import com.cognizant.training.onlineFashionStore.repository.ProductsRepository;
import com.cognizant.training.onlineFashionStore.repository.UsersRepository;

@Service
public class CartService {

	@Autowired
	private CartRepository cartRepo;

	@Autowired
	private OrdersRepository ordersRepo;

	@Autowired
	private UsersRepository usersRepo;

	@Autowired
	private OrderDetailsRepository orderDetailsRepo;

	@Autowired
	private ProductsRepository productsRepo;

	public List<Cart> allCart() {
		return cartRepo.findAll();
	}

	public void addCart(Cart cart, int productId, String userName) {
		if(cart.getQuantity()>productsRepo.findById(productId).get().getAvailability()) {
			throw new ResourceNotFoundException("Sorry the item isn't available for the selected quantity :(  ");
		}
		
		Products product = productsRepo.findById(productId).get();
		Users user = usersRepo.getByUserName(userName);
		Boolean set = false;

		List<Cart> existingCart = allCartByUsers(userName);
		for (Cart item : existingCart) {
			if (item.getProducts().getProductId() == productId) {
				item.setQuantity(item.getQuantity() + cart.getQuantity());
				set = true;
				cartRepo.save(item);
			}

		}

		if (!set) {
			cart.setProducts(product);
			cart.setUsers(user);
			cartRepo.save(cart);
		}
	}

	public void removeCartItemByid(int id) {
		cartRepo.deleteById(id);
	}

	public void newOrder() {
		int sum = 0;
		long millis = System.currentTimeMillis();
		Date date = new Date(millis);

		// Check if cart is empty
		if (cartRepo.count() == 0) {
			throw new ResourceNotFoundException("Cart is empty!");
		}

		// Check product availability
		for (Cart items : cartRepo.findAll()) {
			if ((productsRepo.getReferenceById(items.getProducts().getProductId()).getAvailability()) <= 0) {
				throw new ResourceNotFoundException(
						"Sorry, " + productsRepo.getReferenceById(items.getProducts().getProductId()).getProductName()
								+ " is out of stock :( ");
			}

			if ((productsRepo.getReferenceById(items.getProducts().getProductId()).getAvailability()) < items
					.getQuantity()) {
				throw new ResourceNotFoundException(
						productsRepo.getReferenceById(items.getProducts().getProductId()).getProductName()
								+ " is not available for the selected quantity.");
			}
		}

		Orders order = new Orders("Placed", sum, date, cartRepo.getFirstCartItem().getUsers());
		ordersRepo.save(order);

		// adding into order-details
		// updating total price in orders
		// updating availability in products
		for (Cart items : cartRepo.findAll()) {
			OrderDetails orderDetails = new OrderDetails(items.getQuantity(), order, items.getProducts());
			sum += (items.getProducts().getPrice() * items.getQuantity());
			order.setTotalAmount(sum);
			orderDetailsRepo.save(orderDetails);
			ordersRepo.getReferenceById(ordersRepo.findOrderCount()).setTotalAmount(sum);
			productsRepo.getReferenceById(items.getProducts().getProductId())
					.setAvailability(items.getProducts().getAvailability() - items.getQuantity());
		}
	}

	public void newOrderById(String userName) {
		int sum = 0;
		long millis = System.currentTimeMillis();
		Date date = new Date(millis);
		List<Cart> cartByUser = new ArrayList<>();

		for (Cart item : cartRepo.findAll()) {
			if (item.getUsers().getUserName().equals(userName)) {
				cartByUser.add(item);
			}
		}

		Orders order = new Orders("Placed", sum, date, usersRepo.getByUserName(userName));
		ordersRepo.save(order);

		// adding into order-details
		// updating total price in orders
		// updating availability in products
		for (Cart items : cartByUser) {
			OrderDetails orderDetails = new OrderDetails(items.getQuantity(), order, items.getProducts());
			sum += (items.getProducts().getPrice() * items.getQuantity());
			order.setTotalAmount(sum);
			orderDetailsRepo.save(orderDetails);
			ordersRepo.getReferenceById(ordersRepo.findOrderCount()).setTotalAmount(sum);
			productsRepo.getReferenceById(items.getProducts().getProductId())
					.setAvailability(items.getProducts().getAvailability() - items.getQuantity());
		}

	}

	public void clearCart() {
		cartRepo.deleteAll();
	}

	public List<Cart> allCartByUsers(String userName) {
		List<Cart> allCart = cartRepo.findAll();
		List<Cart> cartByUser = new ArrayList<>();

		for (Cart item : allCart) {
			if (item.getUsers().getUserName().equals(userName)) {
				cartByUser.add(item);
			}
		}

		return cartByUser;
	}

	public void clearCartByUser(String userName) {

		List<Cart> cartByUser = new ArrayList<>();

		for (Cart item : cartRepo.findAll()) {
			if (item.getUsers().getUserName().equals(userName)) {
				cartByUser.add(item);
			}
		}

		for (Cart item : cartByUser) {
			cartRepo.deleteById(item.getCartId());
		}
	}

}
