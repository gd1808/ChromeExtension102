package model;

import java.util.ArrayList;

public class ScraperDB {

    private String key_word;
    private ArrayList<String> emails;

    public ScraperDB (String key_word) {
        this.key_word = key_word;
    }

    public void store (String email) {
        emails.add(email);
    }

    public String getEmail() {
        return emails.get(0);
    }

}
