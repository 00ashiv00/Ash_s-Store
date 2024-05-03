package com.cognizant.training.onlineFashionStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.training.onlineFashionStore.model.Categories;
import com.cognizant.training.onlineFashionStore.repository.CategoriesRepository;

@Service
public class CategoriesService {

	@Autowired
	private CategoriesRepository categoriesRepo;
	
	public void addCategory(Categories category) {
		categoriesRepo.save(category);
	}

	public List<Categories> allCategories() {
		return categoriesRepo.findAll();
	}

	public Optional<Categories> CategoryById(int categoryId) {
		return categoriesRepo.findById(categoryId);
	}

	public void removeCategoriesByid(int categoryId) {
		categoriesRepo.deleteById(categoryId);
	}
	
	

}
