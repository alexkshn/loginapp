package com.iunalex.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by acusnir on 7/24/17.
 */
@RestController
public class WelcomeController {

    @RequestMapping(value="/hello")
    public String getWelcomeMessage(){
        return "Welcome";
    }
}
