package JavaIntermediate;

import java.util.*;

class Programa {

    enum Rank {
        SOLDIER,
        SERGEANT,
        CAPTAIN
    }

    public static void main(String[] args) {
        /*Anonymous Classes
         * Anonymous classes are a way to extend the existing classes on the fly.
         * 
         * For example, consider having a class Machine:
         * 
         * class Machine {
         * public void start() {
         * System.out.println("Starting...");
         * }
         * }+
         * 
         * 
         * When creating the Machine object, we can change the start method on the fly.
         * 
         * The modification is applicable only to the current object, and not the class
         * itself. So if we create another object of that class, the start method's
         * implementation will be the one defined in the class.
         */
        Scanner sc = new Scanner(System.in);

        Rank a = Rank.SOLDIER;
        switch (a) {
            case SOLDIER: 
                System.out.println("Soldier says hi!"); 
                break;
            case SERGEANT: 
                System.out.println("Sergeant says Hello!"); 
                break;
            case CAPTAIN: 
                System.out.println("Captain says Welcome!"); 
                break;
            default: 
                break;
        }

        int pick = pick1to3(sc);
        if (pick != 2) {
            Machine m = new Machine() { 
                @Override 
                public void start() {
                    System.out.println("Wooooo");
                } 
            };
            System.out.println("\nAnnonymous Class \n");
            m.start();
        }

        /*Inner Classes
         * Java supports nesting classes; a class can be a member of another class.
         * 
         * Creating an inner class is quite simple. Just write a class within a class.
         * Unlike a class, an inner class can be private. Once you declare an inner
         * class private, it cannot be accessed from an object outside the class.
         * 
         * Example:
         */
        if (pick != 1) {
            Robot r = new Robot(3);
            System.out.println("\nInner Class \nAssign the id. \nid = "+r.id);
        }
        sc.close();
    }

    static int pick1to3(Scanner scanner) {
        System.out.print("Pick.\n");
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.println("\n1. Annonymous Class \n2. Inner Class");
            String input = scanner.nextLine();

            if (input.isBlank()) {
                System.out.println("Don't leave it blank!");
                continue; // pag about niya sa try - catch mo false na siya inig try
            }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number >= 1 && choose_number <= 2) {
                    valid = true;
                } else {
                    System.out.println("\nEnter the following number only (1 or 2).");
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input. Please enter a number. ");
            }
        }
        return choose_number;
    }
}
