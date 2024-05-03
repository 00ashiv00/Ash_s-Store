package com.cognizant.training.onlineFashionStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.training.onlineFashionStore.model.OrderDetails;
import com.cognizant.training.onlineFashionStore.repository.OrderDetailsRepository;

@Service
public class OrderDetailsService {

	@Autowired
	private OrderDetailsRepository orderDetailsRepo;
	
	public List<OrderDetails> allOrderDetails() {
		return orderDetailsRepo.findAll() ;
	}

	public Optional<OrderDetails> orderDetailsById(int id) {
		return orderDetailsRepo.findById(id);
	}

	public void addOrderDetails(OrderDetails orderDetails) {
		orderDetailsRepo.save(orderDetails);
	}

	public void removeOrderDetailsByid(int id) {
		orderDetailsRepo.deleteById(id);
	}

	public List<OrderDetails> orderDetailsByOrderId(int orderId) {
		return orderDetailsRepo.findOrderDetailsWithOrderId(orderId);
	}
	
	
	
	
	
}
