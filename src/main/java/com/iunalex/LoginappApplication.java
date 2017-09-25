package com.iunalex;

import com.iunalex.domain.User;
import com.iunalex.repository.UserRepository;
import com.iunalex.service.UserService;
import com.iunalex.service.UserServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class LoginappApplication {



	public static void main(String[] args) {

		SpringApplication.run(LoginappApplication.class, args);

	}


//	@Bean
//	CommandLineRunner init(UserRepository userRepository) {
//
//		return args -> {
//
//			UserServiceImpl userService = new UserServiceImpl(userRepository);
//
//			User user1 = new User();
//
//			user1 = userService.getById("59a68861a6b08c08697c49b6");
//
//			System.out.println(user1.getFirstName());
////			user1.setMiddleName("Une4ka");
////			userService.saveOrUpdate(user1);
//
//			List<User> users = userService.listAll();
//
//			System.out.println(users);
//
//
//
//
//		};
//	}
}
