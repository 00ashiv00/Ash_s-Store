package com.cognizant.training.onlineFashionStore;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cognizant.training.onlineFashionStore.model.Categories;
import com.cognizant.training.onlineFashionStore.model.Products;
import com.cognizant.training.onlineFashionStore.repository.CategoriesRepository;
import com.cognizant.training.onlineFashionStore.repository.ProductsRepository;

import jakarta.transaction.Transactional;


@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
class OnlineFashionStoreApplicationCategoryTest {

	@Autowired
	CategoriesRepository categoriesRepo;
	
	@Autowired
	ProductsRepository productsRepo;
	
	
	@Test
	public void testCreate() {
		
		Categories category=new Categories();
		category.setCategoryName("Test");
		List<Products> prodss=new ArrayList<>();	
		Products prod=productsRepo.findById(4007).get();
		prodss.add(prod);
		category.setProducts(prodss);
		categoriesRepo.save(category);
//		when(categoriesRepo.existsById(4)).thenReturn(true);
		assertTrue(categoriesRepo.existsById(category.getCategoryId()));
		
	}

}
