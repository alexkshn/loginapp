package com.iunalex.controllers;

import com.iunalex.domain.User;
import com.iunalex.repository.UserRepository;
import com.iunalex.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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


    @RequestMapping(value="/login", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getUser(){

        List<User> userList = userService.listAll();

        return new ResponseEntity<List<User>> (userList, HttpStatus.OK);
    }

}
