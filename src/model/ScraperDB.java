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
            if(!emails.contains(email)) {
                emails.add(email);
            }
        }
    }

    public ArrayList<Object> getEmails() {
        return emails;
    }

    public void reset(){
        emails.clear();
    }

    public boolean equals(String o) {
        if(o.hashCode() > key_word.hashCode()){
            return false;
        }
        if(o.hashCode() == key_word.hashCode()){
            return true;
        }
        return false;
    }
}
