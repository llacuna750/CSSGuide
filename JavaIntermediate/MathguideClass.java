package JavaIntermediate;

import java.lang.reflect.Method;
import java.util.Scanner;

class MathguideClass {
    Scanner sc = new Scanner(System.in);
    void showMethodsAvailableinMathClass() {
        
        Method[] methods = Math.class.getDeclaredMethods();
        for (Method z : methods) {
            System.out.println(z);
        }
    }

    static void showMathClass() {
                      //MATH CLASS
        double x = 5;     double y = -10;       /*double sr = 10;*/        double rnd = 10.99;      double skt = 25; 
        double a = Math.min(x, y);      System.out.println("\n"+a);                 //Check two value if who is Lowest
        double b = Math.max(x,y);       System.out.printf("%.20f\n",b);      //Check two value if who is larger integer
        double c = Math.abs(y);       System.out.println("\n"+c);                   //remove negative (-10  =  10)
        double d = Math.pow(x,y);       System.out.println("\n"+d);                 // 1 param.. to the power of param 2
        double e = Math.floor(rnd);       System.out.println("\n"+e);               //Round down
        double f = Math.ceil(rnd);       System.out.println("\n"+f);                //Round up
        double g = Math.round(rnd);       System.out.println("\n"+g);               // nearest whole number to round off ( -10.99   =  11 )
        double h = Math.sqrt(skt);       System.out.println("\n"+h);                //square root of the number
    }

    void openMathClassorNot() {
        String answer;
        while (true) {
            System.out.print("\nYou want to open the Math class all method? ");
            answer = sc.nextLine();  // Make sure the input variable is inside the While loop condition or else it don't repeat the input You response inside

            if ("yes".equalsIgnoreCase(answer) || ("y".equalsIgnoreCase(answer) || "ye".equalsIgnoreCase(answer))) {
                System.out.println("ni gana");
                showMethodsAvailableinMathClass();

                System.out.println("bye");
                break;
            }
            else if (answer.trim() == "")
            {
                System.out.println("\nDon't leave it blank!");
            }
            else if (!answer.matches("[a-z A-Z]+")) {
    			System.out.println("\nDon't put any special characters!");
            }
            else {
                System.out.println("\nPlease enter yes or no");
                // con = !true;
            }
            // System.out.println("hello");
        }
    }
}
