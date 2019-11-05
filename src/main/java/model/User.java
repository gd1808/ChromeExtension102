package model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

public class User {
    private String username;
    private String password;
    private HashMap<String, String > hashMap;

    public User(String username, String password){
        this.username = username;
        this.password = password;
        this.hashMap = new HashMap<>();

        addUser(username, password);
    }

    public boolean addUser(String username, String password) {
        if(isValid(username)){
            hashMap.put(username, password);
            return true;
        }
        else{
            System.out.println("You done goofed");
            return false;
        }
    }

    public String getUser(){
        return this.username;
    }

    public boolean isValid(String username){
        return false;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(username, user.username) &&
                Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, password);
    }
}
