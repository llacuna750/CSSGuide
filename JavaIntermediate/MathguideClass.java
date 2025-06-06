package JavaIntermediate;

import java.lang.reflect.Method;
import java.util.Scanner;

class MathguideClass {
    static Scanner sc = new Scanner(System.in);

    void showMethodsAvailableinMathClass() {
        Method[] methods = Math.class.getDeclaredMethods();
        for (Method z : methods) {
            System.out.println(z);
        }
    }
    // I can call this method without Object
    static void showMathClassExample() {
                      //MATH CLASS
        double x = 5;     double y = -10;       /*double sr = 10;*/        double rnd = 10.99;      double skt = 25; 
        double a = Math.min(x, y);       System.out.println("\nCheck two value if who is Lowest: "+a);                          // Check two value if who is Lowest
        double b = Math.max(x,y);        System.out.printf("%nCheck two value if who is larger integer %.20f: %n",b);    // Check two value if who is larger integer
        double c = Math.abs(y);          System.out.println("\nremove negative (-10  =>  10): "+c);                             // remove negative (-10  =>  10)
        double d = Math.pow(x,y);        System.out.printf("\n1 param.. to the power of param 2: %.10f",d);                         // 1 param.. to the power of param 2
        double e = Math.floor(rnd);      System.out.println("\nRound down: "+e);                                                // Round down
        double f = Math.ceil(rnd);       System.out.println("\nRound up: "+f);                                                  // Round up
        double g = Math.round(rnd);      System.out.println("\nnearest whole number to round off ( -10.99   =  11 ): "+g);      // nearest whole number to round off ( -10.99   =  11 )
        double h = Math.sqrt(skt);       System.out.println("\nsquare root of the number: "+h);                                 // square root of the number

        double z = Math.pow(x, Math.abs(y));
        System.out.printf("%nMath.pow(x, Math.abs(x.y))%nWhat is the output of %.0f to the power of %.0f  if you use code above?%n",x,y);                                           // Output: 9,765,625
        System.out.println("use Calculator!");
        int ans = sc.nextInt();
        System.out.printf(ans == z ? "\nCongratulations! %nYou got the correct answer %,.2f\n" : "Wrong %nthe correct asnwer is: %,.2f", z);
    }

    void openMathClassorNot(String answer) {
        boolean continueThis = true;
        System.out.println("\nShow Math-Class? (yes or no?) ");
        while (true) {
            answer = sc.nextLine();  // Make sure the input variable is inside the While loop condition or else it don't repeat the input You response inside
            
            if ("yes".equalsIgnoreCase(answer) || ("y".equalsIgnoreCase(answer) || "ye".equalsIgnoreCase(answer))) { 
                // String spaces = " ".repeat(20); // Java 11+
                // System.out.println(spaces+"Welcome to Math-Class!");
                String welcome = "Welcome to Math-Class!";   System.out.printf("%40s%n", welcome);  
                while (continueThis) {
                    System.out.println("\nChoose the following number:\n1. show Math-Class example \n2. Show Math-Class available method to use."); 
                    String answer2 = sc.nextLine();
                    switch (answer2) {
                        case "1":   showMathClassExample();
                            continueThis = false; break;
                        case "2":  showMethodsAvailableinMathClass();
                            continueThis = false; break;
                        default: 
                        System.out.println("Invalid choice.");
                    }
                }break;
            }
            else if (answer.trim() == "")  { System.out.print("Don't leave it blank!\n"); }
            else if (!answer.matches("[a-z A-Z]+"))     { System.out.println("\nDon't put any special characters!"); }
            else if (answer.equalsIgnoreCase("no") || answer.equalsIgnoreCase("n")) { System.out.println("\nOkay, balik kalang if may solving ka na hindi mo familliar gumamit kanang Math-Class");
                break;}
            else { System.out.print("\nPlease enter yes or no\n"); } // con = !true; 
            // System.out.println("Thanks for using our Math-Class");
        }
    }
}
