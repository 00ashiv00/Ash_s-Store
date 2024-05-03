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

import com.cognizant.training.onlineFashionStore.model.Categories;
import com.cognizant.training.onlineFashionStore.service.CategoriesService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CategoriesController {

	@Autowired
	private CategoriesService categoriesService;	
	
	
	@GetMapping("/categories")
	public List<Categories> getCategories() {
		return categoriesService.allCategories();
		
	}
	
	@GetMapping("/categories/{id}")
	public Optional<Categories> getCategoryByCategoryId(@PathVariable int id) {
		return categoriesService.CategoryById(id);
		
	}
	
	@PostMapping("/add/categories")
	public void newCategories(@RequestBody Categories category) {
		categoriesService.addCategory(category);
	}
	
	@DeleteMapping("/categories/{id}")
	public void deleteCategory(@PathVariable int id) {
		categoriesService.removeCategoriesByid(id);
	}
}
