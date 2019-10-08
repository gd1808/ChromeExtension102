package model;

import java.util.List;

public class User {
    private String username;
    private String password;

    public User(String username, String password){
        this.username = username;
        this.password = password;
    }

    public String getUser(){
        return this.username;
    }

    public boolean isValid(){
        return false;
    }

    public List<User> Users(){
        return null;
    }
}
