package Library_Book_Management_System;

public class Book {
    private String title;
    private String author;
    private String isbn; // (International Standard Book Number)
    private boolean isAvailable;

    Book(String title, String author, String isbn, boolean isAvailable) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable;
    }

    
    /* ---------------------------------------------------------------------------------- -- /
    *                                  Getters                                              *
    * --------------------------------------------------------------------------------------*/
    public String getTitle() {
        return title;
    }


    public String getAuthor() {
        return author;
    }

    public String getIsbn() {
        return isbn;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    /* ---------------------------------------------------------------------------------- -- /
    *                                  Setters                                              *
    * ---------------------------------------------------------------------------------- --*/  
    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public void setAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable;
    }

    @Override
    public String toString() {
        return "[title = " + title + ", author = " + author + ", isbn = " + isbn +", isAvailable: "+ isAvailable +"]";
    }

}
