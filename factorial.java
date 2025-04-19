import java.util.Scanner;

public class factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a Number: ");
        int num = sc.nextInt();

        // System.out.println(paktoryal(num));

        System.out.println(uCallMe(num));
        sc.close();
    }

    // for loop factorial non-recursive
    // public static int factorial (int n) {
    //     int res = 1;
    //     for (int i=n; i >= 1; i--) {
    //         res *= i;
    //     }
    //     return res;
    // }

    // recursive factorial (if else condition)
    public static int pak (int n) {
        if (n > 1 ) {
            return n * paktoryal(n - 1);
        }else { 
            return n;
        }
    }

    // recursive factorial for loop
    public static int paktoryal (int n) {

       int res = 1;
        for (int i=1; i <= n; i++) {
            // res = res * n; // 1 * 5
            // paktoryal(n - 1);  
            System.out.println("hello world!");     
        }
        return n;
    }

    // public static int CallMe(int n) {
    //     String res;
    //     for (int i=1; i<=n; i++) {
    //         return System.out.println();
    //     }
    // }

    // public static int uCallMe(int n) {
    //     while (n >= 0) {

    //     }
    //     return null;
    // }


}