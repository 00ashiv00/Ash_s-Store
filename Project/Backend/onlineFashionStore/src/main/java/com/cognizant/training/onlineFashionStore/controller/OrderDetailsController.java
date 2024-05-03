package com.cognizant.training.onlineFashionStore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.training.onlineFashionStore.model.OrderDetails;
import com.cognizant.training.onlineFashionStore.service.OrderDetailsService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class OrderDetailsController {
	@Autowired
	private OrderDetailsService orderDetailsService;
	
	@GetMapping("/order-details")
	public List<OrderDetails> getOrderDetails() {
		return orderDetailsService.allOrderDetails();
	}
	
	
	@GetMapping("/order-details/{id}")
	public Optional<OrderDetails> getOrdersByOrderDetailsId(@PathVariable int id) {
		return orderDetailsService.orderDetailsById(id);
		
	}
	
	@GetMapping("/order-details/order/{orderId}")
	public List<OrderDetails> getOrdersByOrderId(@PathVariable int orderId) {
		return orderDetailsService.orderDetailsByOrderId(orderId);
	}
	
	
	@PostMapping("/order-details/add")
	public void newOrderDetails(@RequestBody OrderDetails orderDetails) {
		orderDetailsService.addOrderDetails(orderDetails);
	}
	
	@DeleteMapping("/order-details/{id}")
	public void deleteOrderDetails(@PathVariable int id) {
		orderDetailsService.removeOrderDetailsByid(id);
	}

}
