package com.cognizant.training.onlineFashionStore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.training.onlineFashionStore.model.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {
	@Query(nativeQuery = true, value = "SELECT COUNT(*) FROM Orders")
	int findOrderCount();
	
	@Query(nativeQuery = true, value = "SELECT * FROM Orders WHERE status='Shipped'")
	List<Orders> findShippedOrders();

}
