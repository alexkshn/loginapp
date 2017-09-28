package com.iunalex.service;

import com.iunalex.domain.User;
import org.bson.types.ObjectId;

import java.util.List;

/**
 * Created by ipanasenco on 8/16/17.
 */
public interface UserService {

    List<User> listAll();

    User getById(String id);

    String checkUser (String email, String password);

    User saveOrUpdate (User user);


}
