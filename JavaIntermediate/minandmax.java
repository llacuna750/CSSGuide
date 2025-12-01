package JavaIntermediate;

import java.util.Scanner;

public class Minandmax {
    static Scanner sc = new Scanner(System.in);

    static void minandmaximum () {
        int myPick = enter1to2(sc);
        if (myPick == 1) {
            System.out.println("\nFind the Minimum between A and B");
            myMin(zeroTounli_A(sc), zeroTounli_B(sc));
        }else {
            System.out.println("\nFind the Maximum between A and B");
            myMax(zeroTounli_A(sc), zeroTounli_B(sc));
        }
    }

    // VOID
    static void myMin(int a, int b) {
        if (a > b) {
            System.out.printf("\nThe minimum between %d and %d is %d.%n",a ,b , b);
        }else {
            System.out.printf("\nThe minimum between %d and %d is %d.%n",a ,b , a);
        }
    }

    // public incase if this folder is another package
    // VOID
    static void myMax(int a, int b) {
        if (a > b) {
            System.out.printf("\nThe Maximum between %d and %d is %d.%n",a ,b , b);
        }else {
            System.out.printf("\nThe Maximum between %d and %d is %d.%n",a ,b , b);
        }
    }

    // return int
    static int min(int a, int b) {
        if (a > b) {
            return b;
        }
        return a;
    }

    // public 
    // return int
    static int max (int a, int b) {
        if (a > b) {
            return a; // if a greater than b
        }
        return b; // if the a less than b 
    }

    
    static int zeroTounli_A (Scanner scanner) {
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.print("\nEnter a number of A: ");
            String input = scanner.nextLine();

    		if (input.isBlank()) {
                System.out.println("\nDon't leave it blank!");
                continue; // pag about niya sa try - catch mo false na siya inig try
            }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number >= -999999999 && choose_number <= 999999999) {
                    valid = true;
                } else {
                    System.out.println("\nEnter the number only.");
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input. Please enter a number. ");
            }
    	}

        return choose_number;
    }

    static int zeroTounli_B (Scanner scanner) {
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.print("\nEnter a number of B: ");
            String input = scanner.nextLine();

    		if (input.isBlank()) {
                System.out.println("\nDon't leave it blank!");
                continue; // pag about niya sa try - catch mo false na siya inig try
            }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number <= 999999999) {
                    valid = true;
                } else {
                    System.out.println("\nEnter the number only.");
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input. Please enter a number.");
            }
    	}

        return choose_number;
    }

    static int enter1to2 (Scanner scanner) {
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.print("\nEnter the number of the following choice: \n1. Minimum \n2. Maximum \nEnter a number ( 1 to 2 ) only: ");
            String input = scanner.nextLine();

    		if (input.isBlank()) {
                System.out.println("\nDon't leave it blank!");
                continue; // pag about niya sa try - catch mo false na siya inig try
            }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number >= 1 && choose_number <= 2) {
                    valid = true;
                } else {
                    System.out.println("\nEnter the number (1 up to 3) only.");
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input. Please enter a number. ");
            }
    	}

        return choose_number;
    }

}
