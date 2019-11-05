package model;

import java.util.ArrayList;

public class ScraperDB {

    private String key_word;
    private ArrayList<Object> emails;

    public ScraperDB (String key_word) {
        this.key_word = key_word;
    }

    public void store (String word, Object email) {
        if(key_word.equals(word)){
            emails.add(email);
        }
    }

    public ArrayList<Object> getEmails() {
        return emails;
    }

    public void reset(){
        emails.clear();
    }

}
