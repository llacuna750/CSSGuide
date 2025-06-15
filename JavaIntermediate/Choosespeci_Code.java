package JavaIntermediate;
import java.util.Scanner;
import ExternalPackage.*;

public class Choosespeci_Code extends TestAll {
    static Scanner sc = new Scanner(System.in);

    static void javaOOP () {
        javaOOP java = new javaOOP(); // javaOOP class
        // System.out.printf("%s",java.javaYearCreated);
        System.out.println(java.javaYearCreated);
        System.out.println(java.javaFounder);
    }

    static void Animalclass () {
        // Animal animal = new Animal(); // Animal class
        // animal.bark();
        Animal animal = new Animal(); // Pass required argument(s) to Animal constructor
        animal.bark();

        Prinftformat pformat = new Prinftformat(); // Prinftformat
        System.out.println("True or False? "+ pformat.myBoolean+"\n");
        System.out.printf("Double digit: %,.2f\n\n", pformat.myDouble); // access the attribute myDouble in class Prinftformat
    }

    static void Constructors () {
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

    }

    static void Javainter_Class  () {
        Javainter owner = new Javainter(); // Javainter class with the package name: PrintFormat
        System.out.println("owner: "+ owner.name);
    }

    static void Sakyanan_Class () {
        Sakyanan akongSakyanan = new Sakyanan(50, 4, "Black", 50, 21);
            // Sakyanan specificFeature = new Sakyanan();
            System.out.println("\nIlan ang gulong nang sasakyan? "+akongSakyanan.getWheels());
            // specificFeature.setColor("Pink");
            // System.out.println(specificFeature.getColor());

    }

    static void Person_Class () {
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
    }
    
    static void The_Math_Class () {
        // The Math Class
        // int m = Math.min(5, 2);
        // System.out.println("\n"+m);

        MathguideClass mathG = new MathguideClass();
        // String answer = sc.nextLine();  // Make sure the input variable is inside the While loop condition or else it don't repeat the input You response inside
        mathG.openMathClassorNot(sc);
    }

    static void the_Static () {
        /*                                                                                                       Static*/
        System.out.println(); BromWannaride.horn();
        Persona.pCount = 1; 
        Persona.pCount++;
        System.out.println(Persona.pCount); 
    }

    static void Final() {
        System.out.println("\nfinal variable: "+ PI); 

        // Java 2 Module 1 Quiz
        int res  = Minandmax.min(5, 2); System.out.println("Min: "+res); System.out.println("Max: "+Minandmax.max(15, res));
    }

    static void  Encapsulating() {
        System.out.println("\nEncapsulating is like data hiding \nThere are 4 core concepts in OOP: encapsulation, inheritance, polymorphism, and abstraction.\r\n" + //
                        "            using private access modifier to it's value data-types\r\n" + //
                        "\r\n" + //
                        "            In summary, encapsulation provides the following benefits:\r\n" + //
                        "            - Control of the way data is accessed or modified\r\n" + //
                        "\r\n" + //
                        "            - More flexible and easily changed code\r\n" + //
                        "\r\n" + //
                        "            - Ability to change one part of the code without affecting other parts");
    }

    static void theInheritance () {
        Dog d = new Dog();
        System.out.println("\nThe Dog born of "+d.legs+" legs as Animal");
        d.eat(); System.out.print("He can bark because Dog class inheriting the Animal class "); d.bark();

        B obj = new B();
        obj.setB("this is String private B gikan kay superclass Class A"); System.out.println(obj.getB()+"\n"+ obj.getA());
    }

    static void thePolymorphism () {
        Animal cat = new Cat();
        Animal cow = new Cow();
        System.out.println();cat.makeSound();
        cow.makeSound();
    }

    static void OverridingandOverloading () {
        System.out.println("\nOverriding method:");
        B obj = new B();
        // Cat c = new Cat();
        // c.makeSound();
        boolean valid = false;

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
        // Program pg = new Program();

        Program.forLoopTarget();
        obj.doSomething();

        int chooseMaxorMin = select1to2(sc);
        while (!valid) {

            if (chooseMaxorMin == 1) {
                defineInput_min();
                valid = true;
            }
            else if (chooseMaxorMin == 2) {
                defineInput_max();
                valid = true;
            }
        }

        // if-else best to emplement to this one
        // if (pg.max(pickAh, pickBe) <= 999999999.99 ) {
        //     System.out.println("\nOverloading: max method int int parameter way "+pg.max(pickAh,pickBe));
        // }else {
        //     System.out.printf("%nMax Method%nMethod overload in int parameter %.0f",pg.max(pickAh,pickBe));
        // }

        // Ternary Version 
        // String resultMessage = (pg.max(pickAh, pickBe) <= 999999999.99 ) ? "\nOverloading: max method int int parameter way "+pg.max(pickAh,pickBe) : 
        // "\nOverloading: max method int int parameter way "+pg.max(pickAh,pickBe);
        // System.out.println(resultMessage);
        
        // System.out.println("Overloading: max method in Double parameter way "+pg.max((double)pickA, (double)pickB));
    }

    static void theAbstract () {
        /* Read information                                                                    Abstract
            */
        Shape myRectangle = new Rectange();
        Shape myCircle = new Circle();
        myRectangle.draw();
        myCircle.draw();

        Ero iro = new Ero();
        System.out.print("\nEnter age of your dog: ");
        int dogAge = sc.nextInt();

        iro.setPrintAge(dogAge);
        System.out.println("Age of dog from the Absract superclass set to: "+ iro.printAge());
    }

    static void FloydsTriangle () {
    /*  Floyd's Triangle
            1
            1 2 
            3 4 5
            6 7 8 9
        */
        Floydtriangle("\nEnter rows: ",sc);
    }

    static int select1to2 (Scanner scanner) {
        boolean valid = false;
        int choose_number = 0;
        

        while (!valid) {
            System.out.println("\nMethod Overloading.");
            System.out.println("\nChoose the following method: \n1. Minimum method \n2. Maximum method");
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
                    System.out.println("\nEnter the number (1 - 2) only.");
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input. Please enter a number. ");
            }
    	}

        return choose_number;
    }

    static void defineInput_min () {
        Program pg = new Program();
        boolean valid = false;

        while (!valid) {
            System.out.print("\nEnter first number: ");
            String inputA = sc.nextLine();

            System.out.print("Enter second number: ");
            String inputB = sc.nextLine();

            // Try parsing both as double first
            try {
                if (!inputA.contains(".") && !inputB.contains("."))  {
                    
                    int a = Integer.parseInt(inputA);
                    int b = Integer.parseInt(inputB);
                    System.out.println(pg.min(a, b));
                    return;
                }

                if (inputA.contains(".") && !inputB.contains(".")) {
                    double a = Double.parseDouble(inputA);
                    int b = Integer.parseInt(inputB);
                    System.out.println(pg.min(a, b)); 
                    return;
                }

                if (!inputA.contains(".") && inputB.contains(".")) {
                    int a = Integer.parseInt(inputA);
                    double b = Double.parseDouble(inputB);
                    System.out.println(pg.min(a, b));
                    return;
                }

                else {
                    double a = Double.parseDouble(inputA);
                    double b = Double.parseDouble(inputB);
                    System.out.println(pg.min(a, b));
                    return;
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input! Please enter numeric values only.");
            }
        }
    }

    static void defineInput_max () {
        Program pg = new Program();
        boolean valid = false;

        while (!valid) {
            System.out.print("\nEnter first number: ");
            String inputA = sc.nextLine();

            System.out.print("Enter second number: ");
            String inputB = sc.nextLine();

            // Try parsing both as double first
            try {
                if (!inputA.contains(".") && !inputB.contains("."))  {
                    
                    int a = Integer.parseInt(inputA);
                    int b = Integer.parseInt(inputB);
                    pg.max(a, b);
                    return;
                }

                if (inputA.contains(".") && !inputB.contains(".")) {
                    double a = Double.parseDouble(inputA);
                    int b = Integer.parseInt(inputB);
                    System.out.println(pg.max(a, b)); 
                    return;
                }

                if (!inputA.contains(".") && inputB.contains(".")) {
                    int a = Integer.parseInt(inputA);
                    double b = Double.parseDouble(inputB);
                    System.out.println(pg.max(a, b));
                    return;
                }

                else {
                    double a = Double.parseDouble(inputA);
                    double b = Double.parseDouble(inputB);
                    System.out.println(pg.max(a, b));
                    return;
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input! Please enter numeric values only.");
            }   
        }
    }

    static void getFactorialRecurs (){
        // Factorial 
        System.out.print("\nEnter a number to get the factorial: ");
        int intput = sc.nextInt();
        double gidouble = (double)Factorecursive(intput);

        // System.out.println("The factorial of "+20+" is "+Factorecursive(20));
        System.out.printf("The factorial of %d is %,.2f%n",intput, gidouble);

        int update = intput;
        int y = update - 1; // update * y - 1 = 4
        // int y = update; // new Implementation: if x * y
        // int x = 1; // new implementation
        int resultRec = 0;

        System.out.println();
        // Outer for row ata
        for (int i=update; i>=1; i--) {
            // Inner loop for column ata

            for (int h=1; h<=1; h++) {
                resultRec = update * y; // update * y - 1 = 4
                // resultRec = x * y; // new Implementation: if x * y 

                if (i == 1) { resultRec = update; } // new Implementation

                if (i != 1) {
                    // System.out.print(update+" * "+y+" = "+resultRec ); // Old
                    System.out.print(update+" * "+y+" = "+resultRec ); // new: update * y - 1 = 4 
                    // System.out.print(x+" * "+y+" = "+resultRec ); // if x * y
                }
                // if Implement the new Update
                
                update = resultRec; // new
                y = y - 1;
                // x = resultRec; // new implementation
                
            }
            System.out.println((i == 1 ) ? "\nTotal: "+resultRec : "");
            
        }
    }

    // interface Animel
    static void interfaceTestClass () {
        // Ering Class is a Subclass and inheritted the abstract method from the superclass Interface class
        Ering siOranges = new Ering();
        siOranges.eat(); siOranges.makeSound();
    }

    static void type_Casting () {
        System.out.println("\nType Casting\n");
        /*                                                          Type Casting
         * Assigning a value of one type to a variable of another type is known as Type
         * Casting.
         * 
         * To cast a value to a specific type, place the type in parentheses and
         * position it in front of the value.
         * 
         * Example:
         */ 
        
        double a = 42.571;
        int b = (int)a;

        double x = -12.25;
        double y = 2.65;
        System.out.println(b);

        TestAll t1 = new TestAll();
        t1.sum_x_y((int)x, (int)y);

        /*
         * Type Casting
         * For classes, there are two types of casting.
         * 
         * Upcasting
         * You can cast an instance of a subclass to its superclass.
         * 
         * Consider the following example, assuming that Cat is a subclass of Animal
         * 
         * Animal cat = new Cat();
         * 
         * Java automatically upcasted the Cat type variable to the Animal type.
         * 
         * Downcasting
         * Casting an object of a superclass to its subclass is called downcasting.
         * 
         * Example:
         * 
         * Animal a = new Cat();
         * ((Cat)a).makeSound();
         * 
         * This will try to cast the variable a to the Cat type and call its makeSound()
         * method.
         * 
         * Why is upcasting automatic, downcasting manual? Well, upcasting can never
         * fail. But if you have a group of different Animals and want to downcast them
         * all to a Cat, then there's a chance that some of these Animals are actually
         * Dogs, so the process fails.
         */
        System.out.println("\nType Casting: for classes");
        A object = new B(); // Upcasting: A reference to a B object
        B bb = (B) object; // Downcasting: back to B
        bb.print(); // Calls B's print()
    }
    static void The_equals_method () {
        Animalqa a1 = new Animalqa("Robby");
        Animalqa a2 = new Animalqa("Robby");
        Animalqa a3 = new Animalqa("Razeyt");
        System.out.println(a1.equals(a2));

        double a1Update = (double) a1.hashCode();
        System.out.printf("%s = %,.2f%n", (a1.name), a1Update);

        System.out.println(a2.hashCode());
        System.out.println(a3.hashCode());
        System.out.println((int) 'a');

        String[] letters = a1.name.split(""); // splits each character
        // Alternatively, if you use a char[]:
        // char[] letters = word.toCharArray();

        System.out.println(letters);
        System.out.println("a1 length: " + a1.name.length()); // 5

        for (int i = 0; i < letters.length; i++) {
            char cya = letters[i].charAt(0);
            System.out.println("The ASCII and Unicode of " + letters[i] + " is " + (int) cya);
        }
        System.out.println((int) 'A'); // So 'A' is 65 in both ASCII and Unicode.

        A a = new A();
        a.setX(6);

        A b = new A();
        b.setX(6);
        System.out.println(a.equals(b));
    }
}
