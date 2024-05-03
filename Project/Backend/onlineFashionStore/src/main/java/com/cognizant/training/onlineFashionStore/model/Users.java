package com.cognizant.training.onlineFashionStore.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity

public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String fullName;
	private String gender;
	private String address;
	private String email;
	private String mobileNo;
	private String password;
	private String userName;
	
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Cart> getCart() {
		return cart;
	}

	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}

	@OneToMany(mappedBy="users")
	private List<Orders> orders;

	@OneToMany(mappedBy="users")
	private List<Cart> cart;

	public int getUserId() {
		return userId;
	}

	public Users() {
		super();
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
	

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	
	public List<Orders> getOrders() {
		return orders;
	}
	
	public void setOrders(List<Orders> orders) {
		this.orders = orders;
	}

	public Users(int userId, String fullName, String gender, String address, String email, String mobileNo,
			List<Orders> orders, List<Cart> cart) {
		super();
		this.userId = userId;
		this.fullName = fullName;
		this.gender = gender;
		this.address = address;
		this.email = email;
		this.mobileNo = mobileNo;
		this.orders = orders;
		this.cart = cart;
	}
	

}
