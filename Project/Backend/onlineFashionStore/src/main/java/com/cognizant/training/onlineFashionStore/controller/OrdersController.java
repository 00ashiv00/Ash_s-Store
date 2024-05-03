package com.cognizant.training.onlineFashionStore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.training.onlineFashionStore.model.Orders;
import com.cognizant.training.onlineFashionStore.service.OrdersService;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class OrdersController {
	
	@Autowired
	private OrdersService orderService;
	
	@GetMapping("/orders")
	public List<Orders> getOrders() {
		return orderService.allOrders();
	}
	
	@GetMapping("/orders/{id}")
	public Optional<Orders> getOrdersByOrderId(@PathVariable int id) {
		return orderService.orderById(id);
		
	}
	
	@GetMapping("/orders/user/{userName}")
	public List<Orders> getOrdersByUserName(@PathVariable String userName) {
		return orderService.orderByUserName(userName);
		
	}
	
	@GetMapping("/orders/shipped")
	public List<Orders> getShippedOrders() {
		return orderService.shippedOrders();
		
	}
	
	
	@PostMapping("/orders/add")
	public void newOrder(@RequestBody Orders order) {
		orderService.addOrder(order);
	}
	
	@PutMapping("/orders/update/{id}")
	public ResponseEntity<String> updateOrder(@RequestBody Orders order,@PathVariable int id) {
		orderService.updateOrderById(order,id);
		return new ResponseEntity<>("Order status has been updated.",HttpStatus.OK);
	}
	
	
	@DeleteMapping("/orders/{id}")
	public ResponseEntity<String> deleteOrder(@PathVariable int id) {
		orderService.cancelOrdersByid(id);
		return new ResponseEntity<>("The order: "+Integer.toString(id)+" has been cancelled.",HttpStatus.OK);
	}
	
	
	
	
	

}
