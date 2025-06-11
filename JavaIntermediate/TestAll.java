package JavaIntermediate;
import java.util.Scanner;

import ExternalPackage.*;

public class TestAll {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // System.out.printf("%-15s This is TEST ALL Class!\n", "Hello");
        // System.out.printf("%15sThis is TEST ALL Class!\n", "");

        int iChoose = pick1to3(sc);

        if (iChoose == 1) {
        /*                                                          javaOOP Class                                                               */   
        
            javaOOP java = new javaOOP(); // javaOOP class
            // System.out.printf("%s",java.javaYearCreated);
            System.out.println(java.javaYearCreated);
            System.out.println(java.javaFounder);
    /*                                                                   Animal `Class                                                               */ 
            Animal animal = new Animal(); // Animal class
            animal.bark();

            Prinftformat pformat = new Prinftformat(); // Prinftformat
            System.out.println("True or False? "+ pformat.myBoolean+"\n");
            System.out.printf("Double digit: %,.2f\n\n", pformat.myDouble); // access the attribute myDouble in class Prinftformat


            /*                                                          Constructors
                Constructors are special methods invoked when an object is created and are used to initialize them.     

                A constructor can be used to provide initial values for object attributes.      
                    in bisaya - pwede ka maka initial ug values sa usa ka attribute / variable  
                    two type of initial values:
                    1. inside Constructor class assign the value of attributes
                    2. with Constructor class in its paramet


                - A constructor name must be same as its class name.

                - A constructor must have no explicit return type. 
                Example of a constructor:
                public class Vehicle {
                    private String color;
                    Vehicle() {
                        color = "Red";
                    }
                }

                The Vehicle() method is the constructor of our class, so whenever an object of that class is created, the color attribute will be set to "Red".
                A constructor can also take parameters to initialize attributes.

                public class Vehicle {
                    private String color;
                    Vehicle(String c) {
                        color = c;
                    }
                }
                You can think of constructors as methods that will set up your class by default, so you don’t need to repeat the same code every time.
            */
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

            /*                                                           Person Class                                                               */
            // Value & Reference Types
            // Value 
            Double x = 4.0;
            // square(x); // Square method 
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
            String result = personJ == j.getAge() ? "You're answer: Correct!\n" :  "You're answer: Wrong answer.\n";
            System.out.println(result);

            /*  he use to time Time travelled
                timeTravel();
            Another quiz */
            
            System.out.printf("2. Another quiz%n%nIf current age of %s is %d years old. %nHow old is Person p/%s after time travelled from 2025 to 2015  the method? ",p.getName(), p.getAge(), p.getName()); // Output 11
            timeTravel(p);
            int hisageof2015 = sc.nextInt(); System.out.println((hisageof2015 == p.getAge()) ? "You're right he is "+p.getAge()+" years old." : "You're answer: Wrong.");

            // The Math Class
            // int m = Math.min(5, 2);
            // System.out.println("\n"+m);

            MathguideClass mathG = new MathguideClass();
            String answer = sc.nextLine();  // Make sure the input variable is inside the While loop condition or else it don't repeat the input You response inside
            mathG.openMathClassorNot(answer);

            /*                                                                                                       Static*/
            BromWannaride.horn();
            Persona.pCount = 1; 
            Persona.pCount++;
            System.out.println(Persona.pCount); 

            /*                                                                                                       Final */
            System.out.println("final variable: "+ PI); 

            // Java 2 Module 1 Quiz
            //                                                                                                     Min and Max

            int res  = Minandmax.min(5, 2); System.out.println("Min: "+res); System.out.println("Max: "+Minandmax.max(hisageof2015, res));
            
                                                                                                                // Trying making sqroot & square
            System.out.print("\nFind the squaroot of n: "); int sqrthis = sc.nextInt(); 
            squaroot(sqrthis);
            square(sqrthis);
            
            /*                        Open this to show Information...                                            Encapsulation  /* 
            is like data hiding
            There are 4 core concepts in OOP: encapsulation, inheritance, polymorphism, and abstraction.
            using private access modifier to it's value data-types

            In summary, encapsulation provides the following benefits:
            - Control of the way data is accessed or modified

            - More flexible and easily changed code

            - Ability to change one part of the code without affecting other parts
            */

            /*                        Open this to show Information...                                             Inheritance  
            is like subclass or derived/child class is class inheriting / gi-liwatan kumbaga or na-liwatan
            super class or base/parent class is whose inherited in bisaya gikan-naliwat or asa naliwat
            ex. class Car extends Vehicle{}

            When one class is inherited from another class, it inherits all of the superclass' non-private variables and methods.

                additional: inheritance is like a ability on its class or identity

                Example:
                class Animal {
                    protected int legs;

                    public void eat() {
                        System.out.println("Animal eats");
                    }
                }
                class Dog [b]extends [/b]Animal {
                    Dog() {
                        legs = 4;
                    }
                }

                Constructors are not member methods, and so are not inherited by subclasses.
                However, the constructor of the superclass is called when the subclass is instantiated.

                exameple: Go to Class A and B
            */

            /* Let's create a subclass & super Class 
                Subclass = Dog
                Superclass = Animal
            */
            Dog dog = new Dog();
            System.out.println("\nThe Dog born of "+dog.legs+" legs as Animal");

            /* Subclass Dog is don't have eat method and bark method because of Inheritance / extends keyword he inherite that behavior
            in the superclass. */ 
            dog.eat(); System.out.print("He can bark because Dog class inheriting the Animal class "); dog.bark();

            /*  If you declare constructor to the Subclass B you can initialize the protected access modifier attribute or method */
            B obj = new B();
            obj.setB("this is String private B gikan kay superclass Class A"); System.out.println(obj.getB()+"\n"+ obj.getA());
            

            /*                        Open this to show Information...                                            Polymorphism  
            Polymorphism, which refers to the idea of "having many forms", occurs when there is a hierarchy of classes related to each other through inheritance.
            additional: Same person can have different roles.

            A call to a member method will cause a different implementation to be executed, depending on the type of the object invoking the method.

            Here is an example: Dog and Cat are classes that inherit from the Animal class. Each class has its own implementation of the makeSound() method.

            class Animal {
                public void makeSound() {
                    System.out.println("Grr...");
                }
            }
            class Cat extends Animal {
                public void makeSound() {
                    System.out.println("Meow");
                }
            }
            class Dog extends Animal {
                public void makeSound() {
                    System.out.println("Woof");
                }
            }
                As all Cat and Dog objects are Animal objects, we can do the following in main:
                public static void main(String[ ] args) {
                    Animal a = new Dog();
                    Animal b = new Cat();
                }
            We've created two reference variables of type Animal, and pointed them to the Cat and Dog objects.
            Now, we can call the makeSound() methods.

            */
            Animal cat = new Cat();
            Animal cow = new Cow();
            System.out.println();cat.makeSound();
            cow.makeSound();

            /* Open this to show Information...                                             Overriding & Overloading
                
            As we saw in the previous lesson, a subclass can define a behavior that's specific to the subclass type, meaning that a subclass can implement a parent class method based on its requirement.
            This feature is known as method overriding.  */
            Cat c = new Cat();
            c.makeSound();

            /*  show info
                                            Method Overloading
            When methods have the same name, but different parameters, it is known as method overloading.

            This can be very useful when you need the same method functionality for different types of parameters.

            The following example illustrates a method that returns the maximum of its two parameters.
            
            int max(int a, int b) {
            if(a > b) { 
                return a;
                }
                else {
                    return b;
                }
            }
                
            The method shown above will only work for parameters of type integer.
            However, we might want to use it for doubles, as well. For that, you need to overload the max method:
            
            Now, our max method will also work with doubles.
            An overloaded method must have a different argument list; the parameters should differ in their type, number, or both.
            Another name for method overloading is compile-time polymorphism.
            */
            Program pg = new Program();
            System.out.println("\nOverloading: max method int parameter "+pg.max( 5,10 ));
            System.out.println("Overloading: max method Double parameter "+pg.max(1.3, 5.2));

            obj.doSomething();

            /* Read information                                                                    Abstract
            */
            Shape myRectangle = new Rectange();
            Shape myCircle = new Circle();
            myRectangle.draw();
            myCircle.draw();
            
            /*                                                                                 Floyd's Triangle
                1
                1 2 
                3 4 5
                6 7 8 9
            */
            Floydtriangle("\nEnter rows: ",sc);
        }
        else if (iChoose == 2) {
            int choosing = checkifIntInput(sc);
            switch (choosing) {
                case 0: main(args); break;
                case 1: Choosespeci_Code.javaOOP(); break;
                case 2: Choosespeci_Code.Animalclass(); break;
                case 3: Choosespeci_Code.Constructors(); break;
                case 4: Choosespeci_Code.Javainter_Class(); break;
                case 5: Choosespeci_Code.Sakyanan_Class(); break;
                case 6: Choosespeci_Code.Person_Class(); break;
                case 7: Choosespeci_Code.The_Math_Class(); break;
                case 8: Choosespeci_Code.the_Static(); break;
                case 9: Choosespeci_Code.Final(); break;
                case 10: Choosespeci_Code.Encapsulating(); break;
                case 11: Choosespeci_Code.theInheritance(); break;
                case 12: Choosespeci_Code.thePolymorphism(); break;
                case 13: Choosespeci_Code.OverridingandOverloading(); break;
                case 14: Choosespeci_Code.theAbstract(); break;
                case 15: Choosespeci_Code.FloydsTriangle(); break;
                case 16: Kindsofforloop.main(args); break;
                case 17: squaroot(zeroTounli_sqroot(sc)); break;
                case 18: square(zeroTounli_square(sc)); break;
                case 19: Minandmax.minandmaximum(); break;

                default: break;
            }
        }
        else {
            System.out.println("\nBye thanks! \nExiting....");
        }

        sc.close();
    }

    static void Floydtriangle (String prompt, Scanner scanner) {

        System.out.print(prompt);
        int rows = scanner.nextInt();
        scanner.nextLine(); // consume leftover newline
        boolean valid = false;

        while (!valid) {
            System.out.println("\nEnter the following to proceed: \n1. Symbol way\n2. Number way");
            String choose = scanner.nextLine();
            // scanner.nextLine(); // consume leftover newline
            
            String symbol = "";

            if (choose.equals("1") || choose.equals("2")) {
                valid = true;
                int number = 1;

                if (!choose.equals("2")) {
                    System.out.print("\nEnter the symbol: ");
                    symbol = scanner.nextLine(); // only ask ONCE
                }

                for (int i=1; i <= rows; i+=1) {
                    
                    System.out.println();
                    for (int j=1; j<=i;) {
                        if (!choose.equals("1")) {
                            System.out.print(number+ " ");
                            
                        }
                        else {
                            System.out.print(symbol+ " ");
                        }
                        j+=1;
                        number++;
                    }
                }
            }
            else if
            (choose.isEmpty()) {
                System.out.println("Requiare to fill the blanks.");
            }
            else if 
            (!choose.matches("[a-z A-Z 0-9]+")) {
                System.out.println("\nDon't put special characters.");
            }
            else {
                System.out.println("\nEnter (1 or 2) only");
            }
        }
        System.out.println(); // System.out.print(number); // updated: 22
    }

    static final double PI = 3.14;   

    /* click the right arrow to show info
    There are a number of other methods available in the Math class, including:
        sqrt() for square root, sin() for sine, cos() for cosine, and others.      
    Squaroot                                                                       */
    static void squaroot(double n) {
        // formula of sqroot
        double addfirst = n + n;
        double divide = n / addfirst; // 1/2
        double res = Math.pow(n, divide);
        System.out.printf("%nThe squaroot of %.0f is: %.2f %nExplanation: %.2f X %.2f = %.0f%n",n ,res ,res, res, n);
    }

    // Square of x
    static void square(int x) {
        int res = x * x;
        System.out.println("The square of "+x+" is "+res);
    }

    /*  click the right arrow
        Algorithim | Code 
        Gi-send ang Object Person by name of p
        method name celebrateBirthday();
    */ 
    static void celebrateBirthday(Person p) {
        p.setAge(p.getAge() + 1);   // 21 + 1 = 22
    }
    /* click the right arrow
        Algorithim | Code 
        Gi-send ang Object Person by variable name of p
        method name timeTravel();
    */ 
    static void timeTravel(Person traveller) {
        // Let's say it's 2025 year and he time traveled in the past in 2015!
        int currentYear = 2025; int timeTravelledPast = 2015;

        traveller.setAge(traveller.getAge()-(currentYear - timeTravelledPast)); 

        /* click the right arrow
                Here is the breakdown Timetravelling Formula:
        the Person p current age setted is "21" decrement by  
        (currentYear - timeTravelledPast) result inside the parenthesis  is 10 
        */
    }

    static int checkifIntInput (Scanner scanner) {
        System.out.println();
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.println("0. Back to main \n1. Java OOP \n2. Animal Class \n3. Constructors \n4. Java Inter \n5. Sakyanan Class \n6. Person Class \n7. The Math Class \n8. The Static \n9. Final \n10. Encapsulating");
            System.out.println("11. The Inheritance \n12. thePolymorphism \n13. Overriding and Overloading \n14. theAbstract \n15. FloydsTriangle \n16. forloop-basic");
            System.out.println("17. Find the Square-Root of a Number \n18. Find the Square of a Number \n19. Minimum and Maximum \n");
            
            System.out.print("Enter the following number: ");
            String input = scanner.nextLine();

    		if (input.isBlank()) {
                System.out.println("\nDon't leave it blank!\n");
                continue; // pag about niya sa try - catch mo false na siya inig try
            }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number >= 0 && choose_number <= 19) {
                    valid = true;
                } else {
                    System.out.println("\nEnter the following number only (0 up to 19).");
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input. Please enter a number.\n");
            }
    	}

        return choose_number;
    }

    static int pick1to3 (Scanner scanner) {
        System.out.print("Enter the following to proceed: ");
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.println("\n1. Test All \n2. Test the specific code \n3. Continue");
            String input = scanner.nextLine();

    		if (input.isBlank()) {
                System.out.println("Don't leave it blank!");
                continue; // pag about niya sa try - catch mo false na siya inig try
            }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number >= 1 && choose_number <= 3) {
                    valid = true;
                } else {
                    System.out.println("\nEnter the following number only (1 up to 3).");
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input. Please enter a number. ");
            }
    	}

        return choose_number;
    }
    static int zeroTounli_sqroot (Scanner scanner) {
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.print("\nEnter a number and get the square root: ");
            String input = scanner.nextLine();

    		if (input.isBlank()) {
                System.out.println("\nDon't leave it blank!");
                continue; // pag about niya sa try - catch mo false na siya inig try
            }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number >= 1 && choose_number <= 999999999) {
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

    static int zeroTounli_square (Scanner scanner) {
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.print("\nEnter a number to square it's number: ");
            String input = scanner.nextLine();

    		if (input.isBlank()) {
                System.out.println("\nDon't leave it blank!");
                continue; // pag about niya sa try - catch mo false na siya inig try
            }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number >= 1 && choose_number <= 999999999) {
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
}
