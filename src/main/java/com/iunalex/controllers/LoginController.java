package com.iunalex.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by acusnir on 7/24/17.
 */
@Controller

public class LoginController {
    @RequestMapping(value="/login")
    public String login(){

        return "login";
    }

}
