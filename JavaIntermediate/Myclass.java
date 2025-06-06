package JavaIntermediate;
import java.util.Scanner;

import ExternalPackage.Javainter;
// import JavaIntermediate.Vehicle;

// import some.other.package.Javainter;
/*
    public is an access modifier, meaning that it is used to set the level of access. You can use access modifiers for classes, attributes, and methods.

    For classes, the available modifiers are public or default (left blank), as described below:

    public: The class is accessible by any other class.

    default: The class is accessible only by classes in the same package.

    The following choices are available for attributes and methods:

    default: A variable or method declared with no access control modifier is available to any other class in the same package.

    public: Accessible from any other class.

    protected: Provides the same access as the default access modifier, with the addition that subclasses can access protected methods and variables of the superclass (Subclasses and superclasses are covered in upcoming lessons).

    private: Accessible only within the declared class itself.
 */
public class Myclass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Hello from packaged Myclass!");
         /*                                                          javaOOP Class                                                               */   
        javaOOP java = new javaOOP(); // javaOOP class
        // System.out.printf("%s",java.javaYearCreated);
        System.out.println(java.javaYearCreated);
        System.out.println(java.javaFounder);
/*                                                                   Animal Class                                                               */ 
        Animal animal = new Animal(); // Animal class
        animal.bark();

        Prinftformat pformat = new Prinftformat(); // Prinftformat
        System.out.println("True or False? "+ pformat.myBoolean+"\n");
        System.out.printf("Double digit: %,.2f\n\n", pformat.myDouble); // access the attribute myDouble in class Prinftformat

        /*                                                          Vehicle Class                                                               */        
        // Vehicle v1 = new Vehicle();
        // Vehicle v2 = new Vehicle();
        // Vehicle brom2 = new Vehicle();

        Vehicle tarak2 = new Vehicle("Dumtruck");
        System.out.println("My tarak-tarak "+tarak2.nameofCar);

        // Vehicle mynameofCar = new Vehicle("Toyota");
        // v1.color = "red";
        // v2.color = "gold";  
        // v2.horn();
        // System.out.println("The color of Vehicle 1: "+v1.color);
        // System.out.println("The color of Vehicle 2: "+v2.color);

        // System.out.println("My name of my car is "+mynameofCar.getNameofCar()); // We use this one, if we use a Getters and Setters for a private attribute
        // System.out.println("\nname of this car: "+brom2.nameofCar+" Love it\n"); //


        

        // String colorOfbrom2 = "Blue";
        // brom2.setMycolor(colorOfbrom2);
        // System.out.printf("this is my Color of vehicle 1: %s %nand the brom2 will ", brom2.getMycolor());
        // brom2.horn();

        /*                                                          Javainter Class                                                               */ 

        Javainter owner = new Javainter(); // Javainter class with the package name: PrintFormat
        System.out.println("owner: "+ owner.name);


        /*                                                          Sakyanan Class                                                               */ 

        Sakyanan akongSakyanan = new Sakyanan(50, 4, "Black", 50, 21);
        // Sakyanan specificFeature = new Sakyanan();
        System.out.println("Ilan ang gulong nang sasakyan? "+akongSakyanan.getWheels());

        // specificFeature.setColor("Pink");
        // System.out.println(specificFeature.getColor());

        /*                                                          Person Class                                                               */
        // Value & Reference Types
        // Value 
        Double x = 4.0;
        square(x); // Square method
        System.out.println(x); // Output: 4
        System.out.println(x.getClass().getName());

        // Reference Types
        Person j; Person p;
        j = new Person("Gabdevs");
        p = new Person("programmerDab");

        p.setAge(21); // the private age of Person p setted (age = 21)
        j.setAge(21);     // setAge = 21    usng the Setters: method   private int age = 21; updated

        celebrateBirthday(j); // Call the method celebBirth...() and takes the Person object as its parameter
        System.out.print("\n1. It's time for quiz!\n\nWhat is the age of Person j after calling the celebBirth.. method()? ");
        int personJ = sc.nextInt();

        // Ternary Systax/Operator || Shorthand if-else
        String result = personJ == j.getAge() ? "You are Correct!\n" :  "Wrong answer.\n";
        System.out.println(result);


        /*  he use to time Time travelled
            timeTravel();
         Another quiz */
        timeTravel(p);
        System.out.printf("2. Another quiz%n%nIf current age of %s is %d years old. %nHow old is Person p/%s after time travelled from 2025 to 2015  the method? ",p.getName(), p.getAge(), p.getName()); // Output 11
        int hisageof2015 = sc.nextInt(); System.out.println((hisageof2015 == p.getAge()) ? "You're right he is "+p.getAge()+" years old." : "Wrong answer.");
        sc.close();

        // The Math Class
        // int m = Math.min(5, 2);
        // System.out.println("\n"+m);

        // int 
        MathguideClass mathG = new MathguideClass();
        String answer;
        mathG.openMathClassorNot();

        

        /*    There are a number of other methods available in the Math class, including:
            sqrt() for square root, sin() for sine, cos() for cosine, and others.      */
    }
    // Squaroot
    static void squaroot(int n) {
    }

    // Square of x
    static void square(double x) {
        x = x * x;
    }

    /* 
        Algorithim | Code 
        Gi-send ang Object Person by name of p
        method name celebrateBirthday();
    */ 
    static void celebrateBirthday(Person p) {
        p.setAge(p.getAge() + 1);   // 21 + 1 = 22
    }
    /* 
        Algorithim | Code 
        Gi-send ang Object Person by variable name of p
        method name timeTravel();
    */ 
    static void timeTravel(Person traveller) {
        // Let's say it's 2025 year and he time traveled in the past in 2015!
        int currentYear = 2025; int timeTravelledPast = 2015;

        traveller.setAge(traveller.getAge()-(currentYear - timeTravelledPast)); 
        /*
                Here is the breakdown Timetravelling Formula:
        the Person p current age setted is "21" decrement by  
        (currentYear - timeTravelledPast) result inside the parenthesis  is 10
         */
    }
}
