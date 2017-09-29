package com.iunalex.controllers;

import com.iunalex.domain.User;
import com.iunalex.repository.UserRepository;
import com.iunalex.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by acusnir on 7/24/17.
 */
@Controller
public class WelcomeController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserServiceImpl userService = new UserServiceImpl(userRepository);

    @RequestMapping(value="/good")
    public String getWelcomeMessage(){

        return "redirect:/secured";
    }

    @RequestMapping(value = "signUp")

    public ResponseEntity<User> signUpUser (@ModelAttribute("user") User user) {

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(user.getPassword());

        userService.saveOrUpdate(user);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


}
