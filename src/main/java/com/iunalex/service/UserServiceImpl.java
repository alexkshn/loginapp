package com.iunalex.service;

import com.iunalex.domain.User;
import com.iunalex.repository.UserRepository;
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
    public User saveOrUpdate(User user) {

        userRepository.save(user);

        return user;
    }
}
