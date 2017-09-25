package com.iunalex.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by ipanasenco on 8/16/17.
 */

@Document(collection = "user")
public class User {

    @Id
    private String _id;

    private String lastName;

    private String firstName;

    private String middleName;

    @Indexed(unique = true)
    private String eMail;

    private String password;

    public User() {
    }

    public User(String lastName, String firstName, String eMail) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.eMail = eMail;
    }

    public String getId() {
        return _id;
    }

    public void setId(String id) {
        this._id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
