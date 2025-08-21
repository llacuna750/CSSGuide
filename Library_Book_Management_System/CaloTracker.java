package Library_Book_Management_System;

import java.util.InputMismatchException;
import java.util.Scanner;

public class CaloTracker {
    public static void main(String[] args) throws Exception{
        Scanner scanner = new Scanner(System.in);
        int DailyLimitCalories = 50;

        while (true) {
            String Fname = displayName("\nEnter your First Name: ", scanner);
            String Lname = displayName("\nEnter your Last Name: ", scanner);
            

            int breakfast = getCalors("\nEnter your breakfast Calorie: ", scanner);
            int Lunch = getCalors("\nEnter your Lunch Calorie ", scanner);
            int Dinner = getCalors("\nEnter your Dinner Calorie ", scanner);

            System.out.println("\nHey! "+ Fname+" "+Lname);

            int TotalCaloriesConsumed = calculateTotalCalories(breakfast, Lunch, Dinner);
            evaluateCalories(DailyLimitCalories, TotalCaloriesConsumed);
            int Ichooce = continueOrNot("\nDo you want to Continue or Exit? \nChoose 1 to continue or 2 to EXIT!", scanner);
            if (Ichooce == 2) {
                System.out.println("\nYour leaving on the program... Goodbye!");
                break;
            }
        }
    }

    static String displayName (String prompt, Scanner scanner) {
        while (true) {
            System.out.println(prompt);
            String fullname = scanner.nextLine(); 
            if (fullname.matches("[a-z A-Z]+")) {
                return fullname;
            }else {
                System.out.println("\nEnter a legit name, Please! ");
            }
        }
    }

    static int getCalors (String prompt,Scanner scanner) {
        while (true) {
            try {
                System.out.println(prompt);
                int meals = scanner.nextInt();
                scanner.nextLine();
                return meals;
            }catch (InputMismatchException exception) {
                System.out.println("\nEnter a Calorie's number..");
                scanner.next();
            }
        }
    }

    static int calculateTotalCalories (int breakfast, int Lunch, int Dinner) {
        int TotalCaloriesConsumed = breakfast + Lunch + Dinner;
        System.out.println("\nFor this Day youre Calories have eat is "+ TotalCaloriesConsumed);
        return TotalCaloriesConsumed;
    }

    static void evaluateCalories (int DailyLimitCalories, int TotalCaloriesConsumed) {
        if (TotalCaloriesConsumed <= 50) {
            System.out.println("\nWithin Calorie Limit");
        }else {
            System.out.println("\nExceeded  Calorie Limit.");
        }
    }

    static int continueOrNot (String prompt,Scanner scanner) {
        while (true) {
            try {
                System.out.println(prompt);
                int Ichooce = scanner.nextInt();
                scanner.nextLine();
                if (Ichooce == 1 ) {
                    return Ichooce;
                }else if (Ichooce == 2) {
                    return Ichooce;
                }else {
                    System.out.println("\nInvalid!");
                }
            }catch (InputMismatchException exception) {
                System.out.println("\nInvalid.");
                scanner.next();
            }
        }
    }    
}
