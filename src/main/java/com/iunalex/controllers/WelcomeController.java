package com.iunalex.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by acusnir on 7/24/17.
 */
@Controller
public class WelcomeController {

    @RequestMapping(value="/good")
    public String getWelcomeMessage(){

        return "redirect:/";
    }
}
