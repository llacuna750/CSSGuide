package JavaIntermediate;
import java.util.Scanner;

import ExternalPackage.*; // uses wild Card to import all classes in a package.
// import ExternalPackage.Persona;
// import ExternalPackage.BromWannaride;
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

        // int 
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
        int res  = minandmax.min(5, 2); System.out.println("Min: "+res); System.out.println("Max: "+minandmax.max(hisageof2015, res));
        
        // Trying making sqroot
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
        */

        /* Let's create a subclass & super Class 
            Subclass = Dog
            Superclass = Animal
         */
        Dog d = new Dog();
        System.out.println("The Dog born of "+d.legs+" legs.");
        d.eat();

        B obj = new B();
        obj.setB("this is String private B gikan kay superclass"); System.out.println(obj.getB()+"\n"+ obj.getA());
        
        
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
        cat.makeSound();
        cow.makeSound();
        /* Open this to show Information...                                             Overriding & Overloading

        
        */


        sc.close();
    }


    public static final double PI = 3.14;   

    /* click the right arrow to show info
    There are a number of other methods available in the Math class, including:
        sqrt() for square root, sin() for sine, cos() for cosine, and others.      
    Squaroot                                                                       */
    static void squaroot(double n) {
        // formula of sqroot
        double addfirst = n + n;
        double divide = n / addfirst; // 1/2
        double res = Math.pow(n, divide);
        System.out.printf("%nThe squaroot of %.0f is: %.2f %nExplanatio n: %.2f X %.2f = %.0f%n",n ,res ,res, res, n);
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
}
