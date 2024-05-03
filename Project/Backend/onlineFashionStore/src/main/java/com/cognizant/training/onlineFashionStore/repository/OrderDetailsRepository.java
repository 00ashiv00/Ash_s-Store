package com.cognizant.training.onlineFashionStore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.training.onlineFashionStore.model.OrderDetails;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {
	@Query(nativeQuery = true, value = "SELECT * FROM order_details where orders_order_id=:id")
	List<OrderDetails> findOrderDetailsWithOrderId(@Param("id") int id);
}
