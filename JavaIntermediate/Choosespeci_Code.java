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
        Animal animal = new Animal(); // Animal class
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
        String answer = sc.nextLine();  // Make sure the input variable is inside the While loop condition or else it don't repeat the input You response inside
        mathG.openMathClassorNot(answer);
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
        B obj = new B();
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
    }
    static void theAbstract () {
        /* Read information                                                                    Abstract
            */
        Shape myRectangle = new Rectange();
        Shape myCircle = new Circle();
        myRectangle.draw();
        myCircle.draw();
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
}
