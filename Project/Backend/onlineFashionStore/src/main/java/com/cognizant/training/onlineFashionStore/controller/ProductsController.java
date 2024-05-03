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

import com.cognizant.training.onlineFashionStore.model.Products;
import com.cognizant.training.onlineFashionStore.service.ProductsService;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ProductsController {
	
	@Autowired
	private ProductsService productService;
	
	@GetMapping("/products")
	public List<Products> getProducts() {
		return productService.allProducts();	
	}
	
	@GetMapping("/products/{id}")
	public Optional<Products> getProductsByProductId(@PathVariable int id) {
		return productService.ProductById(id);
	}
	
	@PostMapping("/products/add/{categoryId}")
	public void newProduct(@RequestBody Products product,@PathVariable int categoryId) {
		productService.addProduct(product,categoryId);
	}
	
	@PostMapping("/products/update")
	public void updateExistingProduct(@RequestBody Products product) {
		productService.UpdateProduct(product);
	}
	
	
	@DeleteMapping("/products/{id}")
	public void deleteProduct(@PathVariable int id) {
		productService.removeProductByid(id);
	}
	
	
	

}
