package com.iunalex.controllers;

import com.iunalex.domain.User;
import com.iunalex.repository.UserRepository;
import com.iunalex.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by acusnir on 7/24/17.
 */

@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserServiceImpl userService = new UserServiceImpl(userRepository);


    @RequestMapping(value="/getAllTheUsers", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getUser(){

        List<User> userList = userService.listAll();

        return new ResponseEntity<List<User>> (userList, HttpStatus.OK);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)

    public ResponseEntity<User> login () {

        return new ResponseEntity<User>(new User(), HttpStatus.OK);
    }


    @RequestMapping("/getAllUsers")
    public ResponseEntity<User> getAllUsers(){

        List<User> userList = userService.listAll();

        System.out.println("here");

        return new ResponseEntity<User> (userList.get(1), HttpStatus.OK);
    }



    private String getPrincipal(){
        String userName = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            userName = ((UserDetails)principal).getUsername();
        } else {
            userName = principal.toString();
        }
        return userName;
    }



}
