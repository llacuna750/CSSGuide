import java.util.Scanner;

public class forloop2025 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // for (int i=10; i>=0; i-- ) {
        //     System.out.println(i);
        // }
        // System.out.println("Happy New Year!");

        System.out.print("Enter your number to find its factorial: ");
        int number = sc.nextInt();
        int res = factorial(number);
        System.out.println(res);
        sc.close();
    }

    public static int factorial(int n) {
        int factorial = 1;
        for (int i=1; i<=n; i++) {
            factorial = factorial * i; // factorial = 1 * n  = new factorial
        }
        return factorial;
    }
}


