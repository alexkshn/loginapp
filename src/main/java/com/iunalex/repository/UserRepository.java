package com.iunalex.repository;

import com.iunalex.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by ipanasenco on 8/16/17.
 */


import java.util.Optional;

/**
 * Created by ipanasenco on 8/16/17.
 */
public interface UserRepository extends CrudRepository<User, String> {
    Optional<User> findByUserName(String username);
}
