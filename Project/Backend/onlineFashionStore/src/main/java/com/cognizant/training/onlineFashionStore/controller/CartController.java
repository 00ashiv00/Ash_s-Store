package com.cognizant.training.onlineFashionStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.training.onlineFashionStore.model.Cart;
import com.cognizant.training.onlineFashionStore.service.CartService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CartController {
	

		@Autowired
		private CartService cartService;	
		
		
		@GetMapping("/cart")
		public List<Cart> getCart(){
			return cartService.allCart();
			
		}
		
		@GetMapping("/cart/user/{userName}")
		public List<Cart> getCartByUserId(@PathVariable String userName){
			return cartService.allCartByUsers(userName);
		}
		
		
		@PostMapping("/cart/add/{userName}/{productId}")
		public ResponseEntity<String> newCart(@RequestBody Cart cart,@PathVariable int productId,@PathVariable String userName) {
			cartService.addCart(cart,productId,userName);
			return new ResponseEntity<>("Item added to cart",HttpStatus.OK);
		}
		
		@PostMapping("/cart-order")
		public ResponseEntity<String> createOrder() {
			cartService.newOrder();
			cartService.clearCart();
			return new ResponseEntity<>("Yayy!! Order has been placed :)",HttpStatus.OK);
		}
		
		
		@PostMapping("/cart-order/{userName}")
		public ResponseEntity<String> createOrderByUser(@PathVariable String userName) {
			cartService.newOrderById(userName);
			cartService.clearCartByUser(userName);
			return new ResponseEntity<>("Yayy!! Order has been placed :)",HttpStatus.OK);
		}
		
		
		@DeleteMapping("/cart/{id}")
		public void deleteCartItem(@PathVariable int id) {
			cartService.removeCartItemByid(id);
		}
		
		@DeleteMapping("/cart")
		public void deleteAllCartItem() {
			cartService.clearCart();
		}
		


}
