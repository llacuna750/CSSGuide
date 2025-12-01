package Library_Book_Management_System;


import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Iterator;
import java.util.Scanner;

public class Library {
    Scanner input = new Scanner(System.in);

    /*  make private of ArrayList as a collection of our Books can't perform any method outside this logic
        dire ma butang ang mga new created Objects 
        x. new Book("Superbook", "Gab", "ty", true); 
    */
    private String space = " ";
    private ArrayList<Book> collections;


    public Library() {
        collections = new ArrayList<>();
    }

    

    // method to showMenu()  
    public void showMenu() {
        boolean isValid = false;

        while (!isValid) {
            System.out.print("\nWelcome to Library Management System. \n\nChoose between 1 - 6: ");
            System.out.print("\n 1. Add a book to the collection↓ \n 2. Remove a book by ISBN \n 3. Search for a book by title \n 4. List all books \n 5. Update availability status (borrow or return a book). \n 6. Exit program \nSelect choices from above: ");
            String choose = input.nextLine();

            switch (choose) {
                case "1":
                    boolean isSuccessAddBook = false;
                    while (!isSuccessAddBook) {
                        if (booktoAdd(input)) {
                            isSuccessAddBook = true;
                        } else {
                            System.out.println("Try again!");
                        }
                    } break;
                case "2": removeBookbyISBN(input); break; 
                case "3": searchBook(input); break;  
                case "4": ListallBooks(); break;
                case "5": updateAvailabilityStatusofBook(input); break;
                case "6": System.out.println("\nGoodbye thank you for using our Library Management System! \nExiting...."); isValid = true; break;
                default: System.out.println("\nThe case " + choose + " is not in the Choices."); break;

            }
        }
    }

    // Virtual user input that ask the information of a book to add
    public boolean booktoAdd(Scanner input) {
        System.out.print("\nEnter title of book: ");
        String title = input.nextLine();
        if (!title.matches("[a-zA-Z ]+")) {
            System.out.println("Must be a correct title");
            return false;
        }

        System.out.print("Enter author of a book: ");
        String author = input.nextLine();

        if (!author.matches("[a-zA-Z ]+")) {
            System.out.println("Must be a correct author");
            return false;
        }

        System.out.print("Enter an ISBN: ");

        String isbn13Regex = "^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$";
        String isbn = input.nextLine();
        if (!isbn.matches(isbn13Regex)) {
            System.out.println("Must be a valid ISBN");
            return false;
        }

        System.out.print("Set Availability (true / false): ");
        if (!input.hasNextBoolean()) {
            System.out.println("Boolean values only allowed");
            input.nextLine(); // clear invalid input
            return false;
        }
        
        boolean isAvailable = input.nextBoolean();
        input.nextLine(); // consume leftover newline

        addBook(new Book(title, author, isbn, isAvailable));
        return true;
    }

    // void printTitle() {
    // }

    // We use/parameter the Book Constructor to add the our books and we can see their specific title using calling it's method ex. .getTitle()
    public void addBook(Book book) {
        collections.add(book); // ArrayList
        System.out.println("\nYou successfully added: "+ book.getTitle());
    }

    // method that remove a book by ISBN
    public void removeBookbyISBN(Scanner input) {
        boolean isISBNfound = false;

        while (!isISBNfound) {
            System.out.print("\nEnter the book ISBN you want to delete: (Press 0 to return Menu): ");
            String isbn = input.nextLine();

            if (isbn.equals("0")) {
                System.out.println("Returned to menu.");
                return;
            }

            Iterator<Book> it = collections.iterator();

            while (it.hasNext()) {
                Book book = it.next(); // get the book once
                if (book.getIsbn().equalsIgnoreCase(isbn)) {
                    System.out.println("\nISBN found: " + book);
                    it.remove();
                    
                    System.out.println("Book removed successfully!");
                    isISBNfound = true;
                    break; // stop loop after removal
                }
            }

            if (!isISBNfound) {
                System.out.println("\nBook not Found.");
            }
        }
    }

    // method to Search for a book by title.
    public void searchBook(Scanner input) {
        boolean isFound = false;

        while (!isFound) {
            System.out.print("\nSearch the book by it's title (Press 0 to cancel): ");
            String title = input.nextLine().trim();

            if (title.equals("0")) { System.out.println("Canceling..."); return;} 

            for (int i = 0; i < collections.size(); i++) {
                if (collections.get(i).getTitle().equals(title)) {
                    System.out.println("\nBook Found: ["+(i+1)+"] => "+collections.get(i));
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                System.out.println("\nBook not Found.");
            }
        }
    }



    // List all books.
    public void ListallBooks() {
        if (!collections.isEmpty()) {
            // System.out.println(collections);// Print array of Arraylist items of Books Object

            System.out.println("\n"+space.repeat(37)+ "List of Books\n");
            for (int i = 0; i < collections.size(); i++) {
                // The book collections inside the ArrayList of Books print out a
                System.out.println("["+(i+1)+"] => "+collections.get(i));
            }

            System.out.println("\n"+space.repeat(37)+"Total books: "+collections.size()); // Prinst array length/size of Arraylist Items of Books Object
            // for(Book book: collections) { 
            //     System.out.println(book);
            // }
            return;
            
        }
        System.out.println("\nThe book colllections is Empty."); // System.out.println(collections.size());
    }



    // method logic we need of our finding the correct title to updateAvailability
    public String updateSpecificISBN(Scanner input) {
        boolean valid = false;
        String title = "";

        while (!valid) {
            try {
                System.out.print("\nSearch the title of the book you want to update (Press 0 to cancel): ");
                title = input.nextLine().trim();

                if (title.isBlank()) {
                    System.out.println("Sorry not accepting blank inputs.");
                    continue;
                }

                if (!title.matches("[0 a-zA-Z ]+")) {
                    System.out.println("Enter the correct title of a book.");
                    continue;
                }

                if (title.equals("0")) {
                    System.out.println("Canceling...");
                    valid = true;
                    continue;
                }

                return title;

            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
        return null;
    }



    // method to Update availability status (borrow or return a book).
    public void updateAvailabilityStatusofBook(Scanner input) {
        boolean isTitleValid = false;

        while (!isTitleValid) {
            try {
                String title = updateSpecificISBN(input); // get title from user

                if (title.equals("")) {
                    System.out.println("Invalid Input.");
                } else {
                    boolean bookFound = false; // 🔑 track if book exists

                    for (Book book : collections) {
                        if (book.getTitle().equalsIgnoreCase(title)) { // case-insensitive match
                            bookFound = true;

                            boolean updated = false;
                            while (!updated) {
                                try {
                                    System.out
                                            .print("Set the availability of [" + book.getTitle() + "]: (true/false) ");
                                    boolean setAvailability = input.nextBoolean();

                                    if (book.isAvailable() == setAvailability) {
                                        System.out.println("\nThe availability of [" + book.getTitle()
                                                + "] is already set to: " + book.isAvailable());
                                    } else {
                                        book.setAvailable(setAvailability);
                                        System.out.println("\nAvailability of [" + book.getTitle() + "] updated to: "
                                                + setAvailability);
                                    }

                                    updated = true; // exit inner loop after success
                                    isTitleValid = true; // exit outer loop
                                } catch (InputMismatchException e) {
                                    System.out.println("\nInvalid input. Please enter true or false.\n");
                                    input.nextLine(); // clear invalid input
                                }
                            }
                            break; // stop searching once found
                        }
                    }

                    if (!bookFound) {
                        System.out.println("\nNo Book found with title: " + title);
                        isTitleValid = true;
                    }
                }

            } catch (NullPointerException e) {
                System.out.println("\nError: " + e.getMessage());
                isTitleValid = true;
            }
        }
    }

}
