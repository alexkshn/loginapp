package com.iunalex.controllers;

import com.iunalex.domain.User;
import com.iunalex.repository.UserRepository;
import com.iunalex.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping(value = "/signUp",  consumes = { MediaType.APPLICATION_JSON_UTF8_VALUE })

    public ResponseEntity<User> signUpUser (@RequestBody User user) {

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(user.getPassword());

        System.out.println("user is here "+ user.getFirstName()+ user.getLastName()+ user.geteMail());
        user.setPassword(hashedPassword);

        userService.saveOrUpdate(user);

        List<User> userList = userService.listAll();
        System.out.println(userList.size());

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


}
