package com.cognizant.training.onlineFashionStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.training.onlineFashionStore.model.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	@Query(nativeQuery = true, value = "SELECT * FROM cart LIMIT 1")
	Cart getFirstCartItem();

}
