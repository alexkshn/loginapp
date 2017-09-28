package com.iunalex.service;

import com.iunalex.domain.User;
import com.iunalex.repository.UserRepository;
import com.mongodb.BasicDBObject;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ipanasenco on 8/16/17.
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> listAll() {

       List<User> users = new ArrayList<>();

       userRepository.findAll().forEach(users::add);
       return users;

    }

    @Override
    public User getById(String id) {
        return userRepository.findOne(id);
    }

    @Override
    public String checkUser(String email, String password) {

        BasicDBObject emailQuery = new BasicDBObject();
        List<BasicDBObject> obj = new ArrayList<BasicDBObject>();
        obj.add(new BasicDBObject("eMail", email));
        obj.add(new BasicDBObject("password", password));

        emailQuery.put("$and", obj);

        return emailQuery.toString();

    }

    @Override
    public User saveOrUpdate(User user) {

        userRepository.save(user);

        return user;
    }
}
