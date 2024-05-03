package com.cognizant.training.onlineFashionStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.training.onlineFashionStore.exceptions.ResourceNotFoundException;
import com.cognizant.training.onlineFashionStore.model.Categories;
import com.cognizant.training.onlineFashionStore.model.Products;
import com.cognizant.training.onlineFashionStore.repository.CategoriesRepository;
import com.cognizant.training.onlineFashionStore.repository.ProductsRepository;

@Service
public class ProductsService {
	
	@Autowired
	private ProductsRepository productsRepo;

	@Autowired
	private CategoriesRepository categoriesRepo;

	public List<Products> allProducts() {
		return productsRepo.findAll();
	}

	public Optional<Products> ProductById(int id){
		for(Products product:productsRepo.findAll()) {
			if(product.getProductId()==id) {
				return productsRepo.findById(id);
			}
		}
		throw new ResourceNotFoundException("Product Not Found");
		
	}

	public void addProduct(Products product,int categoryId) {
		Categories cat =categoriesRepo.findById(categoryId).get();
		product.setCategories(cat);
		productsRepo.save(product);
	}

	public void removeProductByid(int id) {
		productsRepo.deleteById(id);
	}

	

	public void UpdateProduct(Products product) {
		Products prods=productsRepo.findById(product.getProductId()).get();
		prods.setProductName(product.getProductName());
		prods.setPrice(product.getPrice());
		prods.setAvailability(product.getAvailability());
		prods.setProductDescription(product.getProductDescription());
		prods.setImageLink(product.getImageLink());
		productsRepo.save(prods);
	}

}
