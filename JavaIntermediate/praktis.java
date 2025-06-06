package JavaIntermediate;
import java.util.Scanner;

public class praktis {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MathguideClass ma2log = new MathguideClass();
        boolean cons = true;
        
        // System.out.println(answer);

        // boolean res = "yes".equalsIgnoreCase(answer) || ("y".equalsIgnoreCase(answer) || "ye".equalsIgnoreCase(answer));
        // "yes".equalsIgnoreCase(answer)  &&
        // && ("y".equalsIgnoreCase(answer) || "ye".equalsIgnoreCase(answer))
        // System.out.println("What is this boolean? "+res);

        while (cons) {
            System.out.print("\nYou want to open the Math class all method? ");
            String answer = sc.nextLine();  // Make sure the input variable is inside the While loop condition or else it don't repeat the input You response inside

            if ("yes".equalsIgnoreCase(answer) || ("y".equalsIgnoreCase(answer) || "ye".equalsIgnoreCase(answer))) {
                System.out.println("ni gana");
                ma2log.showMethodsAvailableinMathClass();

                System.out.println("bye");
                cons = false;
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
        sc.close(); 
    }

    
}
