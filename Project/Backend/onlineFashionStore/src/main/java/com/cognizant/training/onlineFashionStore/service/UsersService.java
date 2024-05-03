package com.cognizant.training.onlineFashionStore.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.training.onlineFashionStore.exceptions.ResourceNotFoundException;
import com.cognizant.training.onlineFashionStore.model.Users;
import com.cognizant.training.onlineFashionStore.repository.UsersRepository;

@Service
public class UsersService {
	
	@Autowired
	private UsersRepository usersRepo;

	public List<Users> allUsers() {
		return usersRepo.findAll();
	}

	public Optional<Users> UserById(int userId) {
		List<Users> users=new ArrayList<>();
		users=usersRepo.findAll();
		for(Users user:users) {
			if(user.getUserId()==userId) {
				return usersRepo.findById(userId);
			}
		}throw new ResourceNotFoundException("User-id not found");
		
		
		
	}

	public void addUser(Users user) {
		usersRepo.save(user);
	}

	public void removeUserByid(int userId) {
		usersRepo.deleteById(userId);
	}
	
	
	
	

}
