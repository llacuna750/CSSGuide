package JavaIntermediate;

// import java.util.Scanner;

public class Program {

    public static void forLoopTarget () {
        String[] targetInd = {"A", "B"};

        System.out.println("The length of targetId is "+ targetInd.length);
    }
    // Overloaded methods
    



    /*                                                                Maximum method */
    // int datatype
    public int max (int a, int b) {
        System.out.printf("%nMethod Overloaded by Integer parameter %nThe Max number between %d and %d is ",a,b);
        return (a > b) ? a : b;
    }
    
    // double datatype
    public double max (double a, double b) {
        System.out.printf("%nMethod Overloaded by Double parameter %nThe Max number between %,.2f and %,.2f is ",a ,b);
        return (a > b) ? a : b;
    }

    // Combine double and int
    public double max (double a, int b) {
        System.out.printf("%nMethod Overloaded with- %n1st parameter Double: %,.2f %n2nd parameter Integer %d %n%nThe Max integer between %,.2f and %d is ",a ,b ,a ,b);
        return (a > b) ? a : b;
    }

    // Combine Int and double
    public double max (int a, double b) {
        System.out.printf("%nMethod Overloaded with- %n1st parameter Int: %d %n2nd parameter Double %,.2f %n%nThe Max integer between %d and %,.2f is ",a ,b ,a ,b);
        return (a > b) ? a : b;                                 
    }




    /*                                                                Minimum method */
    // int datatype
    public int min (int a, int b) {
        System.out.printf("%nMethod Overloaded by Integer parameter %nThe Minimum number between %d and %d is ",a, b);
        return (a < b) ? a : b;
    }
    
    // double datatype
    public double min (double a, double b) {
        System.out.printf("%nMethod Overloaded by Double parameter %,.2f%nThe Minimum number between %,.2f and %,.2f is ",a, b);
        return (a < b) ? a : b;
    }

    // Combine double and int
    public double min (double a, int b) {
        System.out.printf("%nMethod Overloaded with- %n1st parameter Double: %,.2f %n2nd parameter Integer: %d %n%nThe Minimum number between %,.2f and %d is ",a, b, a, b);
        return (a < b) ? a : b;
    }

    // Combine Int and double
    public double min (int a, double b) {
        System.out.printf("%nMethod Overloaded with- %n1st parameter Integer: %d %n2nd parameter Double: %,.2f %n%nThe Minimum number between %d and %,.2f is ",a, b, a, b);
        return (a < b) ? a : b;                                                                                                                                      // a, b, a, b
    }
}
