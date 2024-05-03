package com.cognizant.training.onlineFashionStore.model;


import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Categories {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int categoryId;
	private String categoryName;
	private String categoryDescription;
	private String categoryImageLink;
	private String badgeContent;

	public String getBadgeContent() {
		return badgeContent;
	}

	public void setBadgeContent(String badgeContent) {
		this.badgeContent = badgeContent;
	}

	public String getCategoryImageLink() {
		return categoryImageLink;
	}

	public void setCategoryImageLink(String categoryImageLink) {
		this.categoryImageLink = categoryImageLink;
	}

	public String getCategoryDescription() {
		return categoryDescription;
	}

	public void setCategoryDescription(String categoryDescription) {
		this.categoryDescription = categoryDescription;
	}

	@OneToMany(mappedBy="categories")
	private List<Products> products=new ArrayList<>();

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public List<Products> getProducts() {
		return products;
	}

	public void setProducts(List<Products> products) {
		this.products = products;
	}
	
	
	
	
}
