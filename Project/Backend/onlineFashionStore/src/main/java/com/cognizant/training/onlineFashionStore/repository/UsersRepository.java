package com.cognizant.training.onlineFashionStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.training.onlineFashionStore.model.Users;


@Repository
public interface UsersRepository extends JpaRepository<Users,Integer>{

	
	@Query(nativeQuery = true, value = "SELECT * FROM users WHERE user_name=:name")
	Users getByUserName(@Param("name") String names);
	

}
