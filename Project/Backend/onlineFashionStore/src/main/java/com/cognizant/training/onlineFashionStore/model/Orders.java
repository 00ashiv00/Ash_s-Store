package com.cognizant.training.onlineFashionStore.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	private String status;
	private float totalAmount;
//	private String orderDate;
	private Date orderDate;

	
//	@Temporal(TemporalType.DATE)
//	@DateTimeFormat(pattern = "yyyy-MM-dd")
//	private Date orderDate;
	
	@ManyToOne
	@JoinColumn(name="userId")
	@JsonIgnore
	private Users users;
	
	@OneToMany(mappedBy="orders")
	@JsonIgnore
	private List<OrderDetails> orderDetails=new ArrayList<>();
	
	

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}


	public Date getOrderDate() {
		return orderDate;
	}


	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public float getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(float totalAmount) {
		this.totalAmount = totalAmount;
	}

	public Users getUsers() {
		return users;
	}

	public void setUsers(Users users) {
		this.users = users;
	}

	public List<OrderDetails> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetails> orderDetails) {
		this.orderDetails = orderDetails;
	}
	
	public Orders(int orderId, String status, float totalAmount, Date orderDate, Users users,
			List<OrderDetails> orderDetails) {
		super();
		this.orderId = orderId;
		this.status = status;
		this.totalAmount = totalAmount;
		this.orderDate = orderDate;
		this.users = users;
		this.orderDetails = orderDetails;
	}
	
	

	
	public Orders(String status, float totalAmount, Date orderDate, Users users) {
		super();
		this.status = status;
		this.totalAmount = totalAmount;
		this.orderDate = orderDate;
		this.users = users;
	}

	public Orders() {
	}

	
	

	
	

}
