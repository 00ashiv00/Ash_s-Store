package com.cognizant.training.onlineFashionStore;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cognizant.training.onlineFashionStore.model.Users;
import com.cognizant.training.onlineFashionStore.repository.UsersRepository;

import jakarta.transaction.Transactional;

@SpringBootTest
class OnlineFashionStoreApplicationTests {
	
	@Autowired
	private UsersRepository usersRepo;
	
	@Test
	public void testDelete() {
		if(usersRepo.existsById(1006)) {
			Users user = usersRepo.findById(1006).get();
		usersRepo.delete(user);
		}
	}
	
	@Test
	public void testCreate() {
		if(usersRepo.existsById(1006)) {
			Users user = usersRepo.findById(1006).get();
		usersRepo.delete(user);
		}
	}

}
