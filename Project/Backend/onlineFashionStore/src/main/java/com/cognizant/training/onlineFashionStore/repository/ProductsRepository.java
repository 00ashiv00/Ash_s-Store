package com.cognizant.training.onlineFashionStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.training.onlineFashionStore.model.Products;


@Repository
public interface ProductsRepository extends JpaRepository<Products, Integer> {

}
