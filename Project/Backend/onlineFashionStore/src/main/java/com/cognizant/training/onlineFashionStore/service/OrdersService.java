package com.cognizant.training.onlineFashionStore.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.training.onlineFashionStore.exceptions.ResourceNotFoundException;
import com.cognizant.training.onlineFashionStore.model.OrderDetails;
import com.cognizant.training.onlineFashionStore.model.Orders;
import com.cognizant.training.onlineFashionStore.model.Users;
import com.cognizant.training.onlineFashionStore.repository.OrderDetailsRepository;
import com.cognizant.training.onlineFashionStore.repository.OrdersRepository;
import com.cognizant.training.onlineFashionStore.repository.ProductsRepository;
import com.cognizant.training.onlineFashionStore.repository.UsersRepository;

@Service
public class OrdersService {

	@Autowired
	private OrdersRepository ordersRepo;

	@Autowired
	private OrderDetailsRepository orderDetailsRepo;

	@Autowired
	private ProductsRepository productsRepo;

	@Autowired
	private UsersRepository usersRepo;

	public void addOrder(Orders order) {
		ordersRepo.save(order);
	}
	
	

	public List<Orders> allOrders() {
		return ordersRepo.findAll();
	}
	
	

	public Optional<Orders> orderById(int orderId) {
		if (!ordersRepo.existsById(orderId)) {
			throw new ResourceNotFoundException("Invalid Order Id.");
		}
		return ordersRepo.findById(orderId);

	}
	
	

	public void cancelOrdersByid(int id) {
		if (!ordersRepo.existsById(id)) {
			throw new ResourceNotFoundException("Invalid Order Id.");
		}
		if (ordersRepo.getReferenceById(id).getStatus().equals("Cancelled")) {
			throw new ResourceNotFoundException("Order is already cancelled.");
		}
//		if(ordersRepo.getReferenceById(id).getStatus().equals("Shipped")) {
//			throw new ResourceNotFoundException("Order Cannot be cancelled as it has been shipped.");
//		}

		List<OrderDetails> orderDetails = orderDetailsRepo.findOrderDetailsWithOrderId(id);
		for (OrderDetails orderdetail : orderDetails) {
			productsRepo.getReferenceById(orderdetail.getProducts().getProductId())
					.setAvailability(orderdetail.getProducts().getAvailability() + orderdetail.getQuantity());
		}

		Orders updateOrder = ordersRepo.findById(id).get();
		updateOrder.setStatus("Cancelled");
		ordersRepo.save(updateOrder);
	}
	
	

	public void updateOrderById(Orders order, int id) {
		if (ordersRepo.existsById(id)) {
			Orders updateOrder = ordersRepo.findById(id).get();
			updateOrder.setStatus(order.getStatus());
			if (updateOrder.getStatus().equals("Cancelled")) {
				List<OrderDetails> orderDetails = orderDetailsRepo.findOrderDetailsWithOrderId(id);
				for (OrderDetails orderdetail : orderDetails) {
					productsRepo.getReferenceById(orderdetail.getProducts().getProductId())
							.setAvailability(orderdetail.getProducts().getAvailability() + orderdetail.getQuantity());
				}
			}
			ordersRepo.save(updateOrder);
		} else
			throw new ResourceNotFoundException("Invalid Order Id.");
	}
	
	

	public List<Orders> shippedOrders() {
		return ordersRepo.findShippedOrders();
	}
	
	

	public List<Orders> orderByUserName(String userName) {
		Users user = usersRepo.getByUserName(userName);
		List<Orders> orderAll = ordersRepo.findAll();
		List<Orders> ordersByUser = new ArrayList<>();
		for (Orders ord : orderAll) {
			if (ord.getUsers().equals(user)) {
				ordersByUser.add(ord);
			}
		}
		return ordersByUser;

	}

}
