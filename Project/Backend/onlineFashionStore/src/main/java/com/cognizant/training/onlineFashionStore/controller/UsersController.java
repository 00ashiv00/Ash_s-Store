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

import com.cognizant.training.onlineFashionStore.model.Users;
import com.cognizant.training.onlineFashionStore.service.UsersService;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UsersController {
	
		
		@Autowired
		private UsersService userService;
		
		@GetMapping("/users")
		public List<Users> getUsers() {
			return userService.allUsers();	
		}
		
		@GetMapping("/user-details/{userName}")
		public Users getUserByUserName(@PathVariable String userName) {
			return userService.getUserByUserName(userName);	
		}
		
		@GetMapping("/users/{id}")
		public Optional<Users> getUserByUserId(@PathVariable int id) {
			return userService.UserById(id);
		}
		
		@PostMapping("/users/add")
		public void newProduct(@RequestBody Users user) {
			userService.addUser(user);
		}
		
		@PostMapping("/users/update")
		public void updateExistingUser(@RequestBody Users user) {
			userService.UpdateUser(user);
		}
		
		@DeleteMapping("/users/{id}")
		public void deleteUser(@PathVariable int id) {
			userService.removeUserByid(id);
		}
		
		
		

	}

