package JavaIntermediate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Formatter;
import java.util.HashMap;
import java.util.HashSet;
import java.util.InputMismatchException;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Random;
import java.util.Scanner;

import static java.lang.System.out;
import static java.util.Collections.sort;
import java.io.File;
import java.io.FileNotFoundException;

import ExternalPackage.*;
import JavaIntermediate.ListofObject.Listobject;
import JavaIntermediate.Programa.Rank;
    
class TestAll extends Listobject {
    static String spaces = "-".repeat(30); // Java 11+
    static Scanner sc = new Scanner(System.in);
    static  Choosespeci_Code specificode = new Choosespeci_Code();

    public static void main(String[] args) {
        
        // System.out.printf("%-15s This is TEST ALL Class!\n", "Hello");
        // System.out.printf("%15sThis is TEST ALL Class!\n", "");

        int iChoose = pick1to3(sc);
        Listobject runMe = new Listobject();
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
            // String answer = sc.nextLine();  // Make sure the input variable is inside the While loop condition or else it don't repeat the input You response inside
            mathG.openMathClassorNot(sc);

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
            
            /* Open this to show Information... Encapsulation /*
             * is like data hiding
             * There are 4 core concepts in OOP: encapsulation, inheritance, polymorphism,
             * and abstraction.
             * using private access modifier to it's value data-types
             * 
             * In summary, encapsulation provides the following benefits:
             * - Control of the way data is accessed or modified
             * 
             * - More flexible and easily changed code
             * 
             * - Ability to change one part of the code without affecting other parts
             * 
             * Encapsulation Practice
             * Create a program to manage art school admission.
             */

            /* Open this to show Information... Inheritance
             * is like subclass or derived/child class is class inheriting / gi-liwatan
             * kumbaga or na-liwatan
             * super class or base/parent class is whose inherited in bisaya gikan-naliwat
             * or asa naliwat
             * ex. class Car extends Vehicle{}
             * 
             * When one class is inherited from another class, it inherits all of the
             * superclass' non-private variables and methods.
             * 
             * additional: inheritance is like a ability on its class or identity
             * 
             * Example:
             * class Animal {
             * protected int legs;
             * 
             * public void eat() {
             * System.out.println("Animal eats");
             * }
             * }
             * class Dog [b]extends [/b]Animal {
             * Dog() {
             * legs = 4;
             * }
             * }
             * 
             * Constructors are not member methods, and so are not inherited by subclasses.
             * However, the constructor of the superclass is called when the subclass is
             * instantiated.
             * 
             * exameple: Go to Class A and B
             * 
             * 
             * Inheritance Practice:
             * Complete/fix the given code to develop your own photo editing application.
             */

            /* Let's create a subclass & super Class 
                Subclass = Dog
                Superclass = Animal
            */
            Dog dog = new Dog();
            System.out.println("\n"+spaces+"Inheritance"+spaces+"\nThe Dog born of "+dog.legs+" legs as Animal");

            /* Subclass Dog is don't have eat method and bark method because of Inheritance / extends keyword he inherite that behavior
            in the superclass. */ 
            dog.eat(); System.out.print("The dog can "); dog.bark(); System.out.print("-after inheriting the Animal parent class");

            /*  If you declare constructor to the Subclass B you can initialize the protected access modifier attribute or method */
            System.out.println("\n  \n"+spaces+"Inheritance Constructor"+spaces);
            B obj = new B();
            obj.setB("this is String private B gikan kay superclass Class A"); System.out.println(obj.getB()+"\n"+ obj.getA());
            

            /* Open this to show Information... Polymorphism
             * Polymorphism, which refers to the idea of "having many forms", occurs when
             * there is a hierarchy of classes related to each other through inheritance.
             * additional: Same person can have different roles.
             * 
             * A call to a member method will cause a different implementation to be
             * executed, depending on the type of the object invoking the method.
             * 
             * Here is an example: Dog and Cat are classes that inherit from the Animal
             * class. Each class has its own implementation of the makeSound() method.
             * 
             * class Animal {
             * public void makeSound() {
             * System.out.println("Grr...");
             * }
             * }
             * class Cat extends Animal {
             * public void makeSound() {
             * System.out.println("Meow");
             * }
             * }
             * class Dog extends Animal {
             * public void makeSound() {
             * System.out.println("Woof");
             * }
             * }
             * As all Cat and Dog objects are Animal objects, we can do the following in
             * main:
             * public static void main(String[ ] args) {
             * Animal a = new Dog();
             * Animal b = new Cat();
             * }
             * We've created two reference variables of type Animal, and pointed them to the
             * Cat and Dog objects.
             * Now, we can call the makeSound() methods.
             * 
             * 
             * Polymorphism Practice:
             * Complete the program by reimplementing the given method in the inherited
             * vehicle classes.
             */
            System.out.println("\n"+spaces+"Polymorphism"+spaces);
            Animal cat = new Cat();
            Animal cow = new Cow();
            System.out.println();cat.makeSound(); // same method makesound() but different Animal
            cow.makeSound(); 

            Card a_1 = new Valentine("Gabriel", 14);
            Card a_2 = new Holiday();
            Card a_3 = new Birthday();
            a_1.sendCard();
            a_2.sendCard();
            a_3.sendCard();

            /* Open this to show Information...                                             Overriding & Overloading
                
            As we saw in the previous lesson, a subclass can define a behavior that's specific to the subclass type, meaning that a subclass can implement a parent class method based on its requirement.
            This feature is known as method overriding.  */
            System.out.println("\n" + spaces + "Overriding" + spaces);
            Cat c = new Cat();
            c.makeSound();

            /* show info
             * Method Overloading
             * When methods have the same name, but different parameters, it is known as
             * method overloading.
             * 
             * This can be very useful when you need the same method functionality for
             * different types of parameters.
             * 
             * The following example illustrates a method that returns the maximum of its
             * two parameters.
             * 
             * int max(int a, int b) {
             * if(a > b) {
             * return a;
             * }
             * else {
             * return b;
             * }
             * }
             * 
             * The method shown above will only work for parameters of type integer.
             * However, we might want to use it for doubles, as well. For that, you need to
             * overload the max method:
             * 
             * Now, our max method will also work with doubles.
             * An overloaded method must have a different argument list; the parameters
             * should differ in their type, number, or both.
             * Another name for method overloading is compile-time polymorphism.
             * 
             * Overloading Practice:
             *  Complete and overload the given method to calculate the double of provided
             * variables.
             */
            System.out.println("\n" + spaces + "Overriding & Overloading" + spaces);
            Program pg = new Program();
            System.out.println("\nOverloading: max method int parameter "+pg.max( 5,10 ));
            System.out.println("Overloading: max method Double parameter "+pg.max(1.3, 5.2));

            obj.doSomething();  

            /*  Abstraction
             * Read information Abstract
             * 
             * Abstract Classes Practice:
             * Complete the code by implementing the given methods inherited from abstract
             * Game class.
             */
            System.out.println("\n" + spaces + "Abstraction" + spaces);
            Shape myRectangle = new Rectange();
            Shape myCircle = new Circle();
            myRectangle.draw();
            myCircle.draw();
            
            /*                                         Floyd's Triangle
                1
                1 2 
                3 4 5
                6 7 8 9
            */
            System.out.println("\n" + spaces + "Floydtrianlge" + spaces);
            Floydtriangle("\nEnter rows for Floydtrianlge: ",sc);

            System.out.println("\n" + spaces + "Interface" + spaces);
            Ering siOranges = new Ering();
            siOranges.eat(); siOranges.makeSound();

            // Factorial 
            System.out.println("\n" + spaces + "Factorial" + spaces);
            System.out.print("\nEnter a number to get the factorial: ");
            int intput = sc.nextInt();
            double gidouble = (double)Factorecursive(intput);

            // System.out.println("The factorial of "+20+" is "+Factorecursive(20));
            System.out.printf("The factorial of %d is %,.2f%n",intput, gidouble);

            int update = intput;
            int num = 5;
            int y = update - 1;

            System.out.println();
            // Outer for row ata
            for (int i=update; i>=1; i--) {
                // Inner loop for column ata
                
                for (int h=1; h<=1; h++) {
                    int resultRec = update * y;
                    if (h <= num) {
                        System.out.print(update+" * "+y+" = "+resultRec );
                    }
                    y = y - 1;
                    update = resultRec;
                }
                System.out.println();
            }

            /*                                                        Type Casting*/
            System.out.println("\n" + spaces + "Type Casting" + spaces);
            sc.nextLine();
            double a = 42.571;
            int b = (int)a;

            double xDouble = -12.25;
            double yDouble = 2.65;
            System.out.println(b);

            TestAll t1 = new TestAll();
            t1.sum_x_y((int)xDouble, (int)yDouble);

            int pick = Programa.pick1to3(sc);
            if (pick != 2) {
                Machine m = new Machine() {
                    @Override
                    public void start() {
                        System.out.println("Wooooo");
                    }
                };
                System.out.println("\nAnnonymous Class \n");
                m.start();
            }

            /* Inner Classes
             * Java supports nesting classes; a class can be a member of another class.
             * 
             * Creating an inner class is quite simple. Just write a class within a class.
             * Unlike a class, an inner class can be private. Once you declare an inner
             * class private, it cannot be accessed from an object outside the class.
             * 
             * Example:
             */
            if (pick != 1) {
                System.out.println("\nInside a Robot Class have a inner-class Brain");
                Robot r = new Robot(3);
                System.out.println("\nInner Class\nAssign the id. \nid = " + r.id);
            }
            /* Hashcode Calculator
             * 🧮 Example:
             * "Cat".hashCode() is calculated by the built-in Java formula:
             
             */

            /*  The equals() method
             * Comparing Objects
             * Remember that when you create objects, the variables store references to the
             * objects.
             * 
             * So, when you compare objects using the equality testing operator (==), it
             * actually compares the references and not the object values.
             * 
             * Example:
             * 
             * Despite having two objects with the same name, the equality testing returns
             * false, because we have two different objects (two different references or
             * memory locations).
             * class A {
             * 
             * private int x;
             * 
             * public static void main(String[ ] args) {
             * 
             * A a = new A();
             * 
             * a.x = 5;
             * 
             * A b = new A();
             * 
             * b.x = 5;
             * 
             * System.out.println(a == b);
             * 
             * }
             * 
             * }
             */
            System.out.println("\n" + spaces + "Equals-method" + spaces+"\n");
            Animalqa a1 = new Animalqa("Robby");
            Animalqa a2 = new Animalqa("Robby");
            Animalqa a3 = new Animalqa("Razeyt");
            System.out.println(a1.equals(a2));

            double a1Update = (double) a1.hashCode();
            System.out.printf("%s = %,.2f%n", (a1.name), a1Update);

            System.out.println(a2.hashCode());
            System.out.println(a3.hashCode());
            System.out.println((int) 'a');

            /*   The automatically generated hashCode() method is used to determine where to
             * store the object internally. Whenever you implement equals, you MUST also
             * implement hashCode.
             * 
             * We can run the test again, using the equals method:
             */
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

            A ah = new A();
            ah.setX(6);

            A be = new A();
            be.setX(6);
            System.out.println(ah.equals(be));

            /* Enums
             * An Enum is a special type used to define collections of constants.
             * 
             * Here is a simple Enum example:
             * enum Rank {
             * SOLDIER,
             * SERGEANT,
             * CAPTAIN
             * }
             * 
             * Note that the values are comma-separated.
             * 
             * You can refer to the constants in the enum above with the dot syntax.
             * 
             * Rank a = Rank.SOLDIER;
             * 
             * Basically, Enums define variables that represent members of a fixed set.
             * 
             * 
             * After declaring an Enum, we can check for the corresponding values with, for
             * example, a switch statement.
             * 
             * Rank a = Rank.CAPTAIN;
             * switch (a) {
             * case SOLDIER:
             * System.out.println("Soldier says hi!");
             * break;
             * case SERGEANT:
             * System.out.println("Sergeant says Hello!");
             * break;
             * case CAPTAIN:
             * System.out.println("Captain says Welcome!");
             * break;
             * default:
             * break;
             * }
             * 
             * You should always use Enums when a variable (especially a method parameter)
             * can only take one out of a small set of possible values.
             * 
             * If you use Enums instead of integers (or String codes), you increase
             * compile-time checking and avoid errors from passing in invalid constants, and
             * you document which values are legal to use.
             * 
             * 
             * Some sample Enum uses include month names, days of the week, deck of cards,
             * etc.
             * 
             * Enums
             * Create a shooter program, where player has a corresponding number of bullets
             * for each difficulty level.
             */
            System.out.println("\n" + spaces + "Enums" + spaces);
            Rank a_gay = Rank.SOLDIER;
            switch (a_gay) {
                case SOLDIER: System.out.println("Soldier says hi!"); break;
                case SERGEANT: System.out.println("Sergeant says Hello!"); break;
                case CAPTAIN: System.out.println("Captain says Welcome!"); break;
                default: break;
            }
            System.out.println("\n" + spaces + "Using the Java API" + spaces);
            /*  Java API
             * The Java API is a collection of classes and interfaces that have been written
             * for you to use.
             * 
             * The Java API Documentation with all of the available APIs can be located on
             * the Oracle website at
             * 
             * http://docs.oracle.com/javase/7/docs/api/
             * 
             * Once you locate the package you want to use, you need to import it into your
             * code.
             * 
             * The package can be imported using the import keyword.
             * 
             * For example:
             * import java.awt.*;
             * 
             * The awt package contains all of the classes for creating user interfaces and
             * for painting graphics and images.
             * 
             * The wildcard character (*) is used to import all of the classes in the
             * package.
             */
            System.out.println(
                    "Java API \n\nThe Java API is a collection of classes and interfaces that have been written for you to use. \n\nThe Java API Documentation with all of the available APIs can be located on the Oracle website at http://docs.oracle.com/javase/7/docs/api \n");
            System.out.println(
                    "Once you locate the package you want to use, you need to import it into your code. \n\nThe package can be imported using the import keyword.  For example: \nimport java.awt.*; \n");
            System.out.println(
                    "The awt package contains all of the classes for creating user interfaces and for painting graphics and images. \nThe wildcard character (*) is used to import all of the classes in the package.");

            /* An exception is a problem that occurs during program execution. Exceptions
             * cause abnormal termination of the program.
             * 
             * Exception handling is a powerful mechanism that handles runtime errors to
             * maintain normal application flow.
             * 
             * An exception can occur for many different reasons. Some examples:
             * 
             * - A user has entered invalid data.
             * 
             * - A file that needs to be opened cannot be found.
             * 
             * - A network connection has been lost in the middle of communications.
             * 
             * - Insufficient memory and other issues related to physical resources.
             * 
             * As you can see, exceptions are caused by user error, programmer error, or
             * physical resource issues. However, a well-written program should handle all
             * possible exceptions.
             * 
             * 
             * A <b>catch </b>statement involves declaring the type of exception you are
             * trying to catch. If an exception occurs in the <b>try </b>block, the catch
             * block that follows the try is checked. If the type of exception that occurred
             * is listed in a catch block, the exception is passed to the catch block much
             * as an argument is passed into a method parameter.
             * 
             * The Exception type can be used to catch all possible exceptions.
             * 
             * The example below demonstrates exception handling when trying to access an
             * array index that does not exist:
             * 
             * try {
                * // Wrong syntax
                * int aWrong[ ] = new int[2]; // Error syntax
                * System.out.println(aWrong[5]);
             * }
             * catch (Exception e) {
                * // some code to handle errors
                * System.out.println("\nAn error occured");
             * }
             */
            try {
                /*  Exception Handling
                 * Write a program to take N number as input and output the element of the array
                 * with N index.
                 */
                System.out.println("\n" + spaces + "Exception Handling" + spaces);
                int xD = 10;
                int xB = 0;
                int z = xD / xB;
                System.out.println(z);

                // Correct syntax 
                int[] bCorrect = new int[2];
                bCorrect[1] = 3;
                System.out.println("\nWrong syntax: \n"+bCorrect[1]);
    
                // Wrong syntax
                int aWrong[ ] = new int[2]; // Error syntax
                System.out.println(aWrong[5]);
            }
            catch (Exception e) {
                // some code to handle errors
                System.out.println("\nAn error occured");
            }
            
            System.out.println("\n" + spaces + "Multiple Exceptions" + spaces);
            /*  Multiple Exceptions Practice
             * Complete the code to handle two possible exceptions.
             */
            boolean balid = false;
            while (!balid) {
                System.out.println("\nContinue? \n1 = yes \n2 = no?");
                int finalChoose = sc.nextInt();

                if (finalChoose == 1) {
                    System.out.println(Multiple_Exceptions(42, 0)); 
                    balid = true;
                }
                if (finalChoose == 2) {
                    System.out.println("\nTry next time!");
                    balid = true;
                }
                else {
                    System.out.println("\n⚠️ Please enter only 1 or 2.");
                }
            }

            /*  Threads
             * Java is a multi-threaded programming language. This means that our program
             * can make optimal use of available resources by running two or more components
             * concurrently, with each component handling a different task.
             * 
             * You can subdivide specific operations within a single application into
             * individual threads that all run in parallel.
             * 
             * The following diagram shows the life-cycle of a thread.
             * 
             * 
             * There are two ways to create a thread.
             * 
             * 1. Extend the Thread class
             * 
             * Inherit from the <b>Thread </b>class, override its run() method, and write
             * the functionality of the thread in the run() method.
             * 
             * Loader obj_loader = new Loader();
             * obj_loader.start();
             * 
             * Then you create a new object of your class and call it's <b>start()</b>
             * method to run the thread.
             * 
             * Example:
             * 
             * As you can see, our Loader class extends the Thread class and overrides its
             * run() method.
             * 
             * When we create the obj object and call its start() method, the run() method
             * statements execute on a different thread.
             * 
             * Every Java thread is prioritized to help the operating system determine the
             * order in which to schedule threads. The priorities range from 1 to 10, with
             * each thread defaulting to priority 5. You can set the thread priority with
             * the <b>setPriority()</b> method.
             * 
             * 
             * The other way of creating Threads is implementing the Runnable interface.
             * 
             * Implement the run() method. Then, create a new Thread object, pass the
             * Runnable class to its constructor, and start the Thread by calling the
             * start() method.
             * 
             * Thread t = new Thread(new Loader());
             * t.start();
             * 
             * Example:
             */
            
            System.out.println("\n" + spaces + "Threads" + spaces);
            Loader obj_loader = new Loader();
            obj_loader.start();

            Thread t = new Thread(new Lohder());
            t.start();

            
            /* Types of Exceptions
             * There are two exception types, checked and unchecked (also called runtime).
             * The main difference is that checked exceptions are checked when compiled,
             * while unchecked exceptions are checked at runtime.
             * 
             * As mentioned in our previous lesson, Thread.sleep() throws an
             * InterruptedException. This is an example of a checked exception. Your code
             * will not compile until you've handled the exception.
             * 
             *
             * public class MyClass {
             * public static void main(String[ ] args) {
             * try {
             * Thread.sleep(1000);
             * } catch (InterruptedException e) {
             * //some code
             * }
             * }
             * }
             * 
             * We have seen examples of unchecked exceptions, which are checked at runtime,
             * in previous lessons.
             * 
             * Example (when attempting to divide by 0):
             * 
             * int value = 7;
             * value = value / 0;
             * 
             * It is good to know the Types of Exceptions because they can help you debug
             * your code faster.
             */
            System.out.println("\n" + spaces + "Runtime vs. Checked Exceptions" + spaces);
            Thread sleepingThread = new Thread(() -> {
                try {
                    System.out.println("Thread is going to sleep for 5 seconds...");
                    Thread.sleep(5000); // Pauses for 5 seconds
                    System.out.println("Thread woke up naturally.");
                } catch (InterruptedException e) {
                    System.out.println("Thread was interrupted while sleeping!");
                }
            });

            sleepingThread.start();

            // Main thread waits 2 seconds before interrupting
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                // Shouldn't happen here
            }

            System.out.println("Main thread is interrupting the sleeping thread...");
            sleepingThread.interrupt(); // Interrupts the sleeping thread


            ArrayList<String> colors = new ArrayList<String>();

            colors.add("Yellow");
            colors.add("Blue");
            colors.add("Red");
            colors.add("Green");

            ArrayList<Integer> score = new ArrayList<>();
            System.out.println("\n" + spaces + "ArrayList Intervget" + spaces);
            score.add(3);
            score.add(10);
            System.out.println(score.contains(3));
            System.out.println(score);

            System.out.println(spaces + "ArrayList String" + spaces);
            System.out.println("\n" + colors);
            System.out.println(colors.size());
            System.out.println(colors.get(0));

            int value = 7;
            try {

                if (value == 7) {
                    Thread.sleep(4000);
                    System.out.println(true);
                    value = value / 0;
                    System.out.println(value);
                }

            } catch (InterruptedException e) {
                System.out.println("interrupted");
            } catch (ArithmeticException e) {
                System.out.println("divide by zero error");
            }

            System.out.println("\n" + spaces + "Ternary Operator" + spaces);
            int learning_time_speed = 10,
                    time_average = 5,
                    Verygood = 9;
            String Vgood = "Very Good",
                    average = "Average",
                    bad = "Bad";

            // Ternary Operator in Java
            String resultT = learning_time_speed > Verygood ? Vgood
                    : learning_time_speed > time_average ? average : bad;

            System.out.println(resultT);

            /*   LinkedList
             * The LinkedList is very similar in syntax to the ArrayList.
             * 
             * You can easily change an ArrayList to a LinkedList by changing the object
             * type.
             * 
             * You cannot specify an initial capacity for the LinkedList.
             * 
             * LinkedList vs. ArrayList
             * The most notable difference between the LinkedList and the ArrayList is in
             * the way they store objects.
             * 
             * The ArrayList is better for storing and accessing data, as it is very similar
             * to a normal array.
             * 
             * The LinkedList is better for manipulating data, such as making numerous
             * inserts and deletes.
             * 
             * In addition to storing the object, the LinkedList stores the memory address
             * (or link) of the element that follows it. It's called a LinkedList because
             * each element contains a link to the neighboring element.
             * 
             * img-component
             * You can use the enhanced for loop to iterate over its elements.
             * 
             * 
             * Summary:
             * 
             * - Use an ArrayList when you need rapid access to your data.
             * 
             * - Use a LinkedList when you need to make a large number of inserts and/or
             * deletes.
             */
            System.out.println("\n" + spaces + "LinkList" + spaces);
            LinkedList<String> linkc = new LinkedList<>();
            linkc.add("Red");
            linkc.add("Blue");
            linkc.add("Green");
            linkc.add("Orange");
            linkc.add("Pink");
            System.out.println(linkc);

            for (String s : linkc ) {
                System.out.println(s);
            }

            // LinkedLists Practice quiz
            LinkedList<String> word = new LinkedList<>();
            String spaceC = "_".repeat(30);
            boolean valid = false;

            while (!valid) {
                System.out.println("\n" + spaceC);
                System.out.println("Current size: " + word.size());

                if (word.size() == 4) {
                    System.out.println("You can add the last item to your LinkedList.\n");
                }

                if (word.size() == 5) {
                    System.out.println("\nFinal LinkedList: " + word + "\n");
                    valid = true; // exit the loop
                } else {
                    System.out.print("Add item " + (word.size() + 1) + " to LinkedList: ");
                    String wordList = sc.nextLine().trim();
                    if (!wordList.isEmpty()) {
                        word.add(wordList);
                    } else {
                        System.out.println("❌ Input cannot be empty. Try again.");
                    }
                }
            }

            System.out.println("\n" + spaces + "HashMap" + spaces);
            /*  HashMap
             * Arrays and Lists store elements as ordered collections, with each element
             * given an integer index.
             * 
             * HashMap is used for storing data collections as key and value pairs. One
             * object is used as a key (index) to another object (the value).
             * 
             * The put, remove, and get methods are used to add, delete, and access values
             * in the HashMap.
             * 
             * Example:
             */
            HashMap<String, Integer> points = new HashMap<String, Integer>();
            points.put("Amy", 154);
            points.put("Gab", 17);
            points.put("Oranges", 16);
            points.put("Dave", 42);
            points.put("Rob", 733);
            points.put("Rob", 500); // Rob re-asssign value to 500
            System.out.println(points.get("Dave"));
            System.out.println(points.keySet()); // no "733" key returns the value of null.
            System.out.println(points);
            /* We have created a HashMap with Strings as its keys and Integers as its
             * values.
             * 
             * Use the get method and the corresponding key to access the HashMap elements.
             * 
             * HashMap Practice:
             * Write code to delete all the employees whose age is less than N number.
             */

            HashMap<String, Integer> employees = new HashMap<>();
            Scanner scanner = new Scanner(System.in);

            // Sample employees added
            employees.put("Alice", 25);
            employees.put("Bob", 19);
            employees.put("Charlie", 32);
            employees.put("Diana", 21);
            employees.put("Eve", 17);

            System.out.println("\nOriginal Employees:");
            for (Map.Entry<String, Integer> entry : employees.entrySet()) {
                System.out.println(entry.getKey() + " - Age: " + entry.getValue());
            }

            System.out.print("\nEnter age limit (N): ");
            int N = scanner.nextInt();

            // Remove employees whose age is less than N
            Iterator<Map.Entry<String, Integer>> iterator = employees.entrySet().iterator();

            while (iterator.hasNext()) { // it runs the while-Loop statement if 
                Map.Entry<String, Integer> entry = iterator.next();
                if (entry.getValue() < N) {
                    iterator.remove(); // Safe removal during iteration
                }
            }

            System.out.println("\nEmployees with age >= " + N + ":");
            for (Map.Entry<String, Integer> entry : employees.entrySet()) {
                System.out.println(entry.getKey() + " - Age: " + entry.getValue());
            }

            scanner.close();
            
            System.out.println("\n" + spaces + "HashSet & HashLinks" + spaces);
            /*  Sets
             * A Set is a collection that cannot contain duplicate elements. It models the
             * mathematical set abstraction.
             * 
             * One of the implementations of the Set is the HashSet class.
             * 
             * Example
             */
            HashSet<String> set = new HashSet<>();
            set.add("A");
            set.add("B");
            set.add("C");
            set.add("C"); // cannot contain duplicate elements2
            System.out.println(set);

            /*  You can use the <b>size()</b> method to get the number of elements in the
             * 
             * HashSet.
             * 
             * 
             * LinkedHashSet
             * The HashSet class does not automatically retain the order of the elements as
             * they're added. To order the elements, use a LinkedHashSet, which maintains a
             * linked list of the set's elements in the order in which they were inserted.
             * 
             * What is hashing?
             * 
             * A hash table stores information through a mechanism called hashing, in which
             * a key's informational content is used to determine a unique value called a
             * hash code.
             * 
             * So, basically, each element in the HashSet is associated with its unique hash
             * code.
             * 
             * (i)
             * You've learned about the various collection types that are available in Java,
             * including Lists, Maps, and Sets. The choice of which one to use is specific
             * to the data you need to store and manipulate.
             */
            /* Random Classs */
            System.out.println("\n" + spaces + "Random Class" + spaces);
            Random myRandom = new Random();
            int randomInt = myRandom.nextInt(10)+1; // 0-9 to 1-10

            // Rock, Paper, Scissor
            String[] playChoice = {"Scissor", "Rock", "Paper"};
            
            out.println("Choose: \n1. Scissor\n2. Rock\n3. Paper\n");
            boolean validMe = false;

            while (!validMe) {
                try {
                    out.print("Your choice (1-3): ");
                    sc.nextLine(); // Add this after reading number input
                    int ind = sc.nextInt()-1; // expect 1-3 input from user

                    String player1 = playChoice[ind]; // convert 1-based to 0-based index
                    out.println(player1);
                    String computer = playChoice[myRandom.nextInt(playChoice.length)];

                    out.println("\nPlayer\t  VS\tComputer");

                    for (int pc = 0; pc < playChoice.length; pc++) {
                        if (player1.equals(playChoice[pc])) {
                            out.println(player1 +"\t\t"+ computer);
                        }
                    }

                    if (player1.equals(computer)) {
                        out.println("\n   It's a tie.\n");
                    } else if ((player1.equals("Rock") && computer.equals("Scissor")) ||
                            (player1.equals("Scissor") && computer.equals("Paper")) ||
                            (player1.equals("Paper") && computer.equals("Rock"))) {
                        out.println("\n    You Wins!\n");
                    } else {
                        out.println("\n    Computer Wins!\n");
                    }

                    validMe = true; // end loop after a valid round

                } catch (ArrayIndexOutOfBoundsException e) {
                    out.println("Invalid number! Enter between 1 and 3 only.\n");
                    sc.nextLine(); // Clear the invalid input buffer
                } catch (Exception e) {
                    out.println("Invalid input! Enter a number.\n");
                    sc.nextLine(); // ← this throws NoSuchElementException if no line exists
                }
            }   

            String symbol1 = "|"; // |
            String symbol2 = "+".repeat(50); // +

            double why = myRandom.nextDouble(10)+1; 
            boolean z = myRandom.nextBoolean();
            // out.print(symbol1+symbol2+"\n"+symbol1+"\tRandom integer: "+ randomInt+"\n"+symbol1+"\tRandom Double: "+y+"\n"+symbol1+"\tRandom Boolean: "+z+"\n"+symbol1+symbol2);
            out.printf("%s%s%s%n%-15sRandom integer: %d%20s %n%-15sRandom double: %,.5f%15s%n%-15sRandom boolean: %b%17s%n%s%s%s",symbol1, symbol2, symbol1, 
            symbol1, randomInt, symbol1, symbol1, why, symbol1 ,symbol1, z, symbol1, symbol1, symbol2, symbol1);
            
            System.out.println("\n" + spaces + "Normal array (Sorted using Arrays class)" + spaces);
            // Normal array Sort using Arrays Class
            int[] numArray = { 5, 10, 2, 3, 7, 15, 20, 11, 1, 8, 22};
            System.out.println();

            System.out.print("Original Array: ");
            for (int s=0; s<numArray.length; s++) {
                
                if (numArray[s] == numArray[0]) {
                    System.out.print("[");
                }
                if (numArray[s] < 99 && numArray[s] != numArray[numArray.length - 1]) {
                    System.out.print(numArray[s] + ",  ");
                }
                else {
                    System.out.print(numArray[s]);
                }
                if (numArray[s] == numArray[numArray.length -1]) {
                    System.out.print("]");
                }
            }

            Arrays.sort(numArray); // Sort once

            System.out.println("\nSorted Array:");
            for (int s : numArray) {
                System.out.println(s);
            }


            /*   Sorting Lists
             * For the manipulation of data in different collection types, the Java API
             * provides a <b>Collections </b>class, which is included in the java.util
             * package.
             * 
             * One of the most popular <b>Collections </b>class methods is <b>sort()</b>,
             * which sorts the elements of your collection type. The methods in the
             * Collections class are static, so you don't need a Collections object to call
             * them.
             * 
             * Example:
             */
            System.out.println("\n" + spaces + "ArrayList Sorting (and some method)" + spaces);
            ArrayList<String> animals = new ArrayList<>();
            animals.add("tiger");
            animals.add("cat");
            animals.add("snake");

            out.println("Not sorted: " + animals);
            sort(animals);
            out.println("Sorted: " + animals);
            out.println(animals.get(0));
            /* As you can see, the elements have been sorted alphabetically. */

            /*
             * Sorting Lists
             * You can call the <b>sort()</b> methods on different types of Lists, such as
             * Integers.
             */
            ArrayList<Integer> nums = new ArrayList<>();
            nums.add(3);
            nums.add(36);
            nums.add(73);
            nums.add(40);
            nums.add(15);

            out.println("\nNot sorted yet: " + nums);
            Collections.sort(nums);
            out.println("Sorted: " + nums);
            /*
             * Other useful methods in the <b>Collections </b>class:
             * 
             * <b>max(Collection c):</b> Returns the maximum element in c as determined by
             * natural ordering.
             * 
             * <b>min(Collection c):</b> Returns the minimum element in c as determined by
             * natural ordering.
             * 
             * <b>reverse(List list):</b> Reverses the sequence in list.
             * 
             * <b>shuffle(List list):</b> Shuffles (i.e., randomizes) the elements in list.
             * 
             * Sorting Lists Practice:
             * Complete the code to output ArrayList's maximum and minimum values.
             */

            out.println("Max: " + Collections.max(nums));
            out.println("Min: " + Collections.min(nums));

            /*
             * Sets
             * A Set is a collection that cannot contain duplicate elements. It models the
             * mathematical set abstraction.
             * 
             * One of the implementations of the Set is the HashSet class.
             * 
             * Example
             */
            System.out.println("\n" + spaces + "HashSet or Sets & LinkHashSet" + spaces);
            HashSet<String> hashset = new HashSet<>();
            hashset.add("A");
            hashset.add("B");
            hashset.add("B");
            hashset.add("Z"); // new Added
            hashset.add("F"); // new added
            hashset.add("M"); // new Added
            hashset.add("C");
            hashset.add("E");
            hashset.add("C"); // cannot contain duplicate elements2
            System.out.println(hashset);

            LinkedHashSet<String> linkset = new LinkedHashSet<>();
            linkset.add("Aaa");
            linkset.add("Bbb");
            linkset.add("new Add"); // new add
            linkset.add("latest"); // new add
            linkset.add("Bbb");
            linkset.add("Ccc");
            System.out.println(linkset);

            /*   You can use the <b>size()</b> method to get the number of elements in the
             * 
             * HashSet.
             * 
             * LinkedHashSet
             * The HashSet class does not automatically retain the order of the elements as
             * they're added. To order the elements, use a LinkedHashSet, which maintains a
             * linked list of the set's elements in the order in which they were inserted.
             * 
             * What is hashing?
             * 
             * A hash table stores information through a mechanism called hashing, in which
             * a key's informational content is used to determine a unique value called a
             * hash code.
             * 
             * So, basically, each element in the HashSet is associated with its unique hash
             * code.
             * 
             * (i)
             * You've learned about the various collection types that are available in Java,
             * including Lists, Maps, and Sets. The choice of which one to use is specific
             * to the data you need to store and manipulate.
             */
            /*
             * Iterators
             * An Iterator is an object that enables to cycle through a collection, obtain
             * or remove elements.
             * 
             * Before you can access a collection through an iterator, you must obtain one.
             * Each of the collection classes provides an <b>iterator()</b> method that
             * returns an iterator to the start of the collection. By using this iterator
             * object, you can access each element in the collection, one element at a time.
             * 
             * The Iterator class provides the following methods:
             * 
             * <b>hasNext()</b>: Returns true if there is at least one more element;
             * otherwise, it returns false.
             * 
             * <b>next()</b>: Returns the next object and advances the iterator.
             * 
             * <b>remove()</b>: Removes the last object that was returned by next from the
             * collection.
             * 
             * The Iterator class must be imported from the java.util package.
             * 
             * -----------------------------------------------------------------------------
             * ------------
             * 🔄 What is an Iterator?
             * An Iterator is a Java interface used to traverse (loop through) elements in a
             * collection like ArrayList, HashSet, LinkedList, etc.
             * 
             * Instead of using a for loop or for-each, you can use an Iterator to go
             * through elements one by one, and optionally remove them during iteration.
             * 
             * 🔧 Iterator Methods
             * 1. hasNext()
             * Purpose: Checks if there's another element to visit.
             * 
             * Returns: true if there's another element, false otherwise.
             * 
             * if (iterator.hasNext()) {
             * // safe to call next()
             * }
             * 
             * 2. next()
             * Purpose: Returns the next element in the collection and moves the cursor
             * forward.
             * 
             * Throws: NoSuchElementException if no more elements.
             * String value = iterator.next(); // gets current item and moves to next
             * 
             * 
             * 3. remove()
             * Purpose: Removes the last element returned by next() from the collection.
             * 
             * Can only be called once per next().
             * 
             * Throws: IllegalStateException if you call it before next() or call it twice
             * without another next().
             * 
             * iterator.next(); // get the current element
             * iterator.remove(); // remove it from the original collection
             * 
             * 
             * import java.util.*;
             * 
             * public class Main {
             * public static void main(String[] args) {
             * List<String> fruits = new ArrayList<>(Arrays.asList("Apple", "Banana",
             * "Cherry"));
             * 
             * Iterator<String> iterator = fruits.iterator();
             * 
             * while (iterator.hasNext()) {
             * String fruit = iterator.next();
             * if (fruit.equals("Banana")) {
             * iterator.remove(); // removes "Banana"
             * }
             * }
             * 
             * System.out.println(fruits); // Output: [Apple, Cherry]
             * }
             * }
             * 
             * ❗Important Notes:
             * You must call next() before calling remove().
             * 
             * remove() affects the original collection.
             * 
             * It's safer than removing elements inside a for-each loop (which throws
             * ConcurrentModificationException).
             * -----------------------------------------------------------------------------
             * 
             * Example:
             * Iterators
             * An Iterator is an object that enables to cycle through a collection, obtain
             * or remove elements.
             * 
             * Before you can access a collection through an iterator, you must obtain one.
             * Each of the collection classes provides an <b>iterator()</b> method that
             * returns an iterator to the start of the collection. By using this iterator
             * object, you can access each element in the collection, one element at a time.
             * 
             * The Iterator class provides the following methods:
             * 
             * <b>hasNext()</b>: Returns true if there is at least one more element;
             * otherwise, it returns false.
             * 
             * <b>next()</b>: Returns the next object and advances the iterator.
             * 
             * <b>remove()</b>: Removes the last object that was returned by next from the
             * collection.
             * 
             * The Iterator class must be imported from the java.util package.
             * 
             * Example:
             */
            System.out.println("\n" + spaces + "Iterators" + spaces);
            LinkedList<String> animalni = new LinkedList<>();
            animalni.add("fox");
            animalni.add("cat");
            animalni.add("dog");
            animalni.add("rabbit");

            out.println(animalni);
            String valval;

            Iterator<String> it = animalni.iterator();
            valval = it.next(); // first element Fox
            valval = it.next(); // second element Cat
            out.println(valval);
            out.println(it);

            /*   <b>it.next()</b> returns the first element in the list and then moves the
             * iterator on to the next element.
             * 
             * Each time you call <b>it.next()</b>, the iterator moves to the next element
             * of the list.
             * 
             * 
             * Typically, iterators are used in loops. At each iteration of the loop, you
             * can access the corresponding list element.
             * 
             * Example:
             */
            LinkedList<String> animalka = new LinkedList<>();
            animalka.add("foxxy");
            animalka.add("pussycat");
            animalka.add("doggy");
            animalka.add("rabby");

            Iterator<String> itt = animalka.iterator();

            out.println();
            while (itt.hasNext()) {
                String mvalue = itt.next();
                out.println(mvalue);
            }
            /*  Here, the while loop determines whether the iterator has additional elements,
             * prints the value of the element, and advances the iterator to the next.
             * 
             * Iterators Practice:
             * Write a code to calculate and output the sum of LinkedList elements.
             */

            List<Integer> listMe = new ArrayList<Integer>();
            listMe.add(10);
            listMe.add(20);
            listMe.add(30);
            Iterator<Integer> ittt = listMe.iterator();

            int total = 0;
            int val = 0;
            try {
                out.println();
                while (ittt.hasNext()) {
                    val = ittt.next(); // Get the next value
                    total += val; // Add it to the total
                    out.println("Current Value: " + val);
                    out.println("Total so far: " + total);
                }
            } catch (NoSuchElementException e) {
                out.println("No more elements to iterate over.");
            } catch (Exception e) {
                out.println("An error occurred: " + e.getMessage());
            } finally {
                ittt.remove(); // This will throw an exception if not called after next()
            }

            System.out.println("\n" + spaces + "Working with Files" + spaces);
            /*
             * Working with Files
             * The java.io package includes a File class that allows you to work with files.
             * 
             * To start, create a <b>File </b>object and specify the path of the file in the
             * constructor.
             */

            // File file = new File("C:\\data\\input-file.txt");
            /* With the <b>exists()</b> method, you can determine whether a file exists. */

            File xkana = new File("D:\\Javascriptbiggener\\javaSomefile\\Java_Datetime_API");

            if (xkana.exists()) {
                System.out.println(xkana.getName() + " exists!");
            } else {
                System.out.println("The file does not exist");
            }
            /*  The code above prints a message stating whether or not the file exists at the
             * specified path.
             * 
             * The <b>getName()</b> method returns the name of the file.
             * 
             * Note that we used double backslashes in the path, as one backslash should be
             * escaped in the path String.
             */
        
            /*  Reading a File
             * Files are useful for storing and retrieving data, and there are a number of
             * ways to read from a file.
             * 
             * One of the simplest ways is to use the <b>Scanner </b>class from the
             * java.util package.
             * 
             * The constructor of the <b>Scanner </b>class can take a File object as input.
             * 
             * To read the contents of a text file at the path "C:\\sololearn\\test.txt", we
             * would need to create a File object with the corresponding path and pass it to
             * the Scanner object.
             */
            out.println("\n" + spaces + "Reading Files" + spaces);
            try {
                File xx = new File("D:\\Javascriptbiggener\\JavaIntermediate\\Practice_Area\\Anak.java");
                Scanner sc = new Scanner(xx);
                // String firstL = sc.nextLine();
                // System.out.println(firstL);
                while (sc.hasNextLine()) {
                    String line = sc.nextLine();
                    out.println(line);
                    /* The <b>hasNextLine()</b> method checks if there is another line in the file,
                     * and the <b>nextLine()</b> method reads the next line from the file.
                     */
                }
                sc.close();
            } catch (FileNotFoundException e) {
                out.println("File not found: " + e.getMessage());
            }
            /* We surrounded the code with a try/catch block, because there's a chance that
             * the file may not exist.
             * 
             * {i}
             * It is always good practice to close a file when finished working with it. One
             * way to do this is to use the Scanner's <b>close()</b> method.
             */

            /*  Creating Files
             * Formatter, another useful class in the java.util package, is used to create
             * content and write it to files.
             * 
             * Example:
             */
            out.println("\n" + spaces + "Creating & Writing Files" + spaces);
            String filePath = "D:/Javascriptbiggener/JavaIntermediate/Practice_Area/MyFile.txt";
            String filePath1 = "D:/Javascriptbiggener/JavaIntermediate/Practice_Area/MyFile1.txt";
            try {
                Formatter f = new Formatter(filePath);
                Formatter f1 = new Formatter(filePath1);

                out.print("Enter some content to write to the file: ");
                String content = sc.nextLine(); // Assuming you want to take input from the user

                // for (int i = 0; i < 5; i++) {
                // out.print("Enter line " + (i + 1) + ": ");
                // content += sc.nextLine() + "\n"; // Collecting multiple lines of input
                // }
                // int nm = 1;
                // f.format("%d: %s",nm ,content);
                f.format(content);

                f1.format("It is located at: %s%n", filePath);
                f.close(); // Always close the Formatter to release resources
                f1.close();
                sc.close(); // Close the Scanner to release resources

                File file = new File(filePath);
                Scanner mysc = new Scanner(file);
                // int i=1;
                while (mysc.hasNext()) {
                    System.out.println(mysc.nextLine());
                    // i++;
                }
                mysc.close(); // Close the Scanner to release resources

            } catch (Exception e) {
                out.println("Error: " + e.getMessage());
            }

            /*  This creates an empty file at the specified path. If the file already exists,
             * this will overwrite it.
             * 
             * (i)
             * Again, you need to surround the code with a try/catch block, as the operation
             * can fail.
             * 
             * Once the file is created, you can write content to it using the same
             * Formatter object's <b>format()</b> method.
             * 
             * Example:
             * 
             * Creating & Writing Files Practice:
             * Complete the code to take the names of N tasks and write down them in the
             * file.
             */

        } else if (iChoose == 2) {
            int choosing = checkifIntInput(sc);
            try {
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
                    case 20: Choosespeci_Code.interfaceTestClass(); break;
                    case 21: Choosespeci_Code.getFactorialRecurs(); break;
                    case 22: Choosespeci_Code.type_Casting(); break;
                    case 23: Programa.main(args); break;
                    case 24: hashcodeChecker(sc); break;
                    case 25: Choosespeci_Code.The_equals_method(); break;
                    case 26: Choosespeci_Code.Enum(); break;
                    case 27: Choosespeci_Code.error_Handling(); break;
                    case 28: Multiple_Exceptions(20,0); break;
                    case 29: Thread_Me(); break;
                    case 30: TypesofExceptions(); break;
                    case 31: Ternary_Operator(); break;
                    case 32: specificode.rand0mClass(); break;
                    
                    case 33: Array_List(); break;
                    case 34: LinkedList_v0(); break;
                    case 35: HashMap_Method(); break;
                    case 36: specificode.arraySort(); break;
                    case 37: ArrayListSort(); break;
                    case 38: HashSets_LinkedHashSet(); break;
                    case 39: methodIterator(); break;

                    case 40: wwF(); break;
                    case 41: readingFile(); break;
                    case 42: Creating_Writing_Files(); break;
                    case 43: Java_2_Module_3_Quiz(); break;
                    case 44: runMe.run(); break;

                    default:
                }
            }  catch(ExceptionInInitializerError e) {
                System.out.println("Error an occur: " + e.getMessage());
            } catch (Exception e) {
                System.out.println("Error an occur: " + e.getMessage());
            }
        }
        else {
            System.out.println("\nBye thanks! \nExiting....\n");
        }
    }

    static int checkifIntInput (Scanner scanner) {
        System.out.println();
        boolean valid = false;
        int choose_number = 0;

        while (!valid) {
            System.out.println("0. Back to main \n1. Java OOP \n2. Animal Class \n3. Constructors \n4. Java Inter \n5. Sakyanan Class \n6. Person Class \n7. The Math Class \n8. The Static \n9. Final \n10. Encapsulating");
            System.out.println("11. The Inheritance \n12. The Polymorphism \n13. Overriding and Overloading \n14. The Abstract \n15. FloydsTriangle \n16. forloop-basic");
            System.out.println("17. Find the Square-Root of a Number \n18. Find the Square of a Number \n19. Minimum and Maximum \n20. Interfaces Basic\n21. Facotorial Recursive \n22. Type Casting \n23. Anonymous Classes and Inner Classes");
            System.out.println("24. hashCode Calculator \n25. The equals() method \n26. Enum \n27. Error_Handling \n28. Multiple Exceptions ( has throws ArithmeticException )\n29. Thread \n30. Types of Exceptions");
            System.out.println("31. Ternary Operator \n32. Random Class \n\n33. Array_List \n34. LinkList \n35. HashMap_Method \n36. Array Sort (nomral array) \n37. ArrayListSort");
            System.out.println("38. HashSets & LinkedHashSet \n39. Iterator (LinkList + List)\n\n40. Work with Files \n41. Reading File \n42. Creating and Writing Files");
            System.out.println("43. Java 2 Module 3 Quiz\n44. Listobject (HashMap + List.ArrayList<>() )\n");

            System.out.print("Enter the following number: ");
            String input = scanner.nextLine();

    		if (input.isBlank()) {
                System.out.println("\nDon't leave it blank!\n");
            continue; // pag about niya sa try - catch mo false na siya inig try
        }

            try {
                choose_number = Integer.parseInt(input);
                if (choose_number >= 0 && choose_number <= 44) {
                    valid = true;
                } else {
                    System.out.println("\nEnter the following number only (0 up to 44).");
                }
            } catch (NumberFormatException e) {
                System.out.println("\nInvalid input. Please enter a number.\n");
            }
    	}
        return choose_number;
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
            else if (choose.isEmpty()) { System.out.println("Requiare to fill in the blanks.");}
            else if (!choose.matches("[a-z A-Z 0-9]+")) { System.out.println("\nDon't put special characters."); }
            else { System.out.println("\nEnter (1 or 2) only"); }
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

    static int Factorecursive(int n) {
        return (n != 0) ? n *= Factorecursive(n - 1) : 1 ;
    }

    int sum_torial(int k) {
        if (k > 0) {
            // Recursive style its like factorial But it Sum method
            return k + sum_torial(k - 1);
        } else {
            return 0;
        }
    }

    void sum_x_y (int x, int y) {
        System.out.println(x + y);System.out.println();
    }

    static void hashcodeChecker(Scanner sc) {
        boolean valid = false;

        while (!valid) {
            System.out.print("\nType a word to calculate hashCode: ");
            // sc.nextLine();

            if (!sc.hasNextLine()) {
                System.out.println("No input found. Exiting...");
                return;
            }

            String myWord = sc.nextLine();

            if (myWord.isBlank()) {
                System.out.println("\nDon't leave it blank!");
                continue;
            }

            if (myWord.matches("[a-zA-Z]+")) {
                char[] letters = myWord.toCharArray();
                System.out.println("\nNumber length of "+myWord+" = "+letters.length+"\n");

                for (char c : letters) {
                    System.out.println("The ASCII and Unicode of '" + c + "' = " + (int) c);
                }

                System.out.println("\nJava hashCode of \"" + myWord + "\" is: " + myWord.hashCode());
                valid = true;
            } else {
                System.out.println("\nInvalid input. Only alphabetic characters are allowed.");
            }
        }
    }

    static int Multiple_Exceptions(int a, int b) throws ArithmeticException {
        /*   Multiple Exceptions & Exception Handling (many catch())
         *
         * throw
         * The <b>throw </b>keyword allows you to manually generate exceptions from your
         * methods. Some of the numerous available exception types include the
         * IndexOutOfBoundsException, IllegalArgumentException, ArithmeticException, and
         * so on.
         * 
         * For example, we can throw an ArithmeticException in our method when the
         * parameter is 0.
         * 
         * The <b>throws </b>statement in the method definition defines the type of
         * Exception(s) the method can throw.
         * 
         * Next, the <b>throw </b>keyword throws the corresponding exception, along with
         * a custom message.
         * 
         * If we call the div method with the second parameter equal to 0, it will throw
         * an ArithmeticException with the message "Division by Zero".
         * 
         * Multiple exceptions can be defined in the throws statement using a
         * comma-separated list.
         * 
         * A single try block can contain multiple catch blocks that handle different
         * exceptions separately.
         * 
         * Example:
         * 
         * try {
         * // some code
         * } catch (ExceptionType1 e1) {
         * // Catch block
         * } catch (ExceptionType2 e2) {
         * // Catch block
         * } catch (ExceptionType3 e3) {
         * // Catch block
         * }
         * 
         * All catch blocks should be ordered from most specific to most general.
         * 
         * Following the specific exceptions, you can use the Exception type to handle
         * all other exceptions as the last catch.
         */
        System.out.println("\n" + spaces + "Multiple_Exceptions" + spaces);
        if (b == 0) {
            throw new ArithmeticException("Division by Zero Gra gra"); // Output Exception in thread "main" java.lang.ArithmeticException: Division by Zero Gra gra
        } else {
            return a / b;
        }
    }

    static void Thread_Me()  {
        /*  Threads
         * Java is a multi-threaded programming language. This means that our program
         * can make optimal use of available resources by running two or more components
         * concurrently, with each component handling a different task.
         * 
         * You can subdivide specific operations within a single application into
         * individual threads that all run in parallel.
         * 
         * The following diagram shows the life-cycle of a thread.
         * 
         * 
         * There are two ways to create a thread.
         * 
         * 1. Extend the Thread class
         * 
         * Inherit from the <b>Thread </b>class, override its run() method, and write
         * the functionality of the thread in the run() method.
         * 
         * Loader obj_loader = new Loader();
         * obj_loader.start();
         * 
         * Then you create a new object of your class and call it's <b>start()</b>
         * method to run the thread.
         * 
         * Example:
         * 
         * As you can see, our Loader class extends the Thread class and overrides its
         * run() method.
         * 
         * When we create the obj object and call its start() method, the run() method
         * statements execute on a different thread.
         * 
         * Every Java thread is prioritized to help the operating system determine the
         * order in which to schedule threads. The priorities range from 1 to 10, with
         * each thread defaulting to priority 5. You can set the thread priority with
         * the <b>setPriority()</b> method.
         * 
         * 
         * The other way of creating Threads is implementing the Runnable interface.
         * 
         * Implement the run() method. Then, create a new Thread object, pass the
         * Runnable class to its constructor, and start the Thread by calling the
         * start() method.
         * 
         * Thread t = new Thread(new Loader());
         * t.start();
         * 
         * Example:
         */
        
        System.out.println("\n" + spaces + "Threads" + spaces);
        Loader obj_loader = new Loader();
        obj_loader.start(); 
        // obj_loader.setPriority(1);


        Thread t = new Thread(new Lohder());
        t.start();
    }
    static void TypesofExceptions()  {
        /* Types of Exceptions
         * There are two exception types, checked and unchecked (also called runtime).
         * The main difference is that checked exceptions are checked when compiled,
         * while unchecked exceptions are checked at runtime.
         * 
         * As mentioned in our previous lesson, Thread.sleep() throws an
         * InterruptedException. This is an example of a checked exception. Your code
         * will not compile until you've handled the exception.
         * 
         *
         * public class MyClass {
         * public static void main(String[ ] args) {
         * try {
         * Thread.sleep(1000);
         * } catch (InterruptedException e) {
         * //some code
         * }
         * }
         * }
         * 
         * We have seen examples of unchecked exceptions, which are checked at runtime,
         * in previous lessons.
         * 
         * Example (when attempting to divide by 0):
         * 
         * int value = 7;
         * value = value / 0;
         * 
         * It is good to know the Types of Exceptions because they can help you debug
         * your code faster.
         * 
         * Threads Practice
         * Complete the registration program to output the messages in correct order.
         */
        
        System.out.println("\n" + spaces + "Runtime vs. Checked Exceptions" + spaces);
        Thread sleepingThread = new Thread(() -> {
            try {
                System.out.println("Thread is going to sleep for 5 seconds...");
                Thread.sleep(5000); // Pauses for 5 seconds
                System.out.println("Thread woke up naturally.");
            } catch (InterruptedException e) {
                System.out.println("Thread was interrupted while sleeping!");
            }
        });

        sleepingThread.start();

        // Main thread waits 2 seconds before interrupting
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            // Shouldn't happen here
        }

        System.out.println("Main thread is interrupting the sleeping thread...");
        sleepingThread.interrupt(); // Interrupts the sleeping thread

        int value = 7;
        try {

            if (value == 7) {
                Thread.sleep(4000);
                System.out.println(true);
                value = value / 0;
                System.out.println(value);
            }

        } catch (InterruptedException e) {
            System.out.println("interrupted");
        } catch (ArithmeticException e) {
            System.out.println("divide by zero error");
        }
    }

    static void Array_List()  {
        /*  Translate course
         * ArrayList
         * The Java API provides special classes to store and manipulate groups of
         * objects.
         * 
         * One such class is the ArrayList. Standard Java arrays are of a fixed length,
         * which means that after they are created, they cannot expand or shrink.
         * 
         * On the other hand, ArrayLists are created with an initial size, but when this
         * size is exceeded, the collection is automatically enlarged.
         * 
         * When objects are removed, the ArrayList may shrink in size. Note that the
         * ArrayList class is in the java.util package, so it's necessary to import it
         * before using it.
         * 
         * Create an ArrayList as you would any object.
         * 
         * import java.util.ArrayList;
         * //...
         * ArrayList colors = new ArrayList();
         * 
         * You can optionally specify a capacity and type of objects the ArrayList will
         * hold:
         * 
         * ArrayList<String> colors = new ArrayList<String>(10);
         * 
         * The code above defines an ArrayList of Strings with 10 as its initial size.
         * 
         * ArrayLists store objects. Thus, the type specified must be a class type. You
         * cannot pass, for example, int as the objects' type. Instead, use the special
         * class types that correspond to the desired value type, such as Integer for
         * int, Double for double, and so on.
         * 
         * The ArrayList class provides a number of useful methods for manipulating its
         * objects.
         * 
         * The <b>add()</b> method adds new objects to the ArrayList. Conversely, the
         * remove() method removes objects from the ArrayList.
         * 
         * Example:
         * 
         * ArrayList<String> colors = new ArrayList<String>();
         * 
         * colors.add("Yellow");
         * colors.add("Blue");
         * colors.add("Red");
         * colors.add("Green");
         * 
         * System.out.println(colors);
         * 
         * Other useful methods include the following:
         * 
         * - <b>contains()</b>: Returns true if the list contains the specified element
         * 
         * - <b>get(int index)</b>: Returns the element at the specified position in the
         * list
         * 
         * - <b>size()</b>: Returns the number of elements in the list
         * 
         * - <b>clear()</b>: Removes all of the elements from the list
         * 
         * Note: As with arrays, the indexing starts with 0.
         */

        // ArrayList colors = new ArrayList);
        ArrayList<String> colors = new ArrayList<String>();

        String spaces = "-".repeat(30); // Java 11
        colors.add("Yellow");
        colors.add("Blue");
        colors.add("Red");
        colors.add("Green");

        ArrayList<Integer> score = new ArrayList<>();
        System.out.println("\n" + spaces + "ArrayList " + spaces);
        score.add(3);
        score.add(10);
        System.out.println(score.contains(3));
        System.out.println(score);

        System.out.println(spaces + "ArrayList String" + spaces);
        System.out.println("\n" + colors);
        System.out.println("Size of an Arraylist: "+colors.size());
        System.out.println(colors.get(0));
    }
    
    static void Ternary_Operator()  {
        System.out.println("\n" + spaces + "" + spaces);
        int learning_time_speed = 10, 
            time_average = 5, 
            Verygood = 9;
        String Vgood = "Very Good",
                average = "Average",
                bad = "Bad";

        // Ternary Operator in Java
        String result = learning_time_speed > Verygood ? Vgood
                : learning_time_speed > time_average ? average : bad;

        System.out.println(result);
    }

    static void LinkedList_v0()  {
        /*   LinkedList
         * The LinkedList is very similar in syntax to the ArrayList.
         * 
         * You can easily change an ArrayList to a LinkedList by changing the object
         * type.
         * 
         * You cannot specify an initial capacity for the LinkedList.
         * 
         * LinkedList vs. ArrayList
         * The most notable difference between the LinkedList and the ArrayList is in
         * the way they store objects.
         * 
         * The ArrayList is better for storing and accessing data, as it is very similar
         * to a normal array.
         * 
         * The LinkedList is better for manipulating data, such as making numerous
         * inserts and deletes.
         * 
         * In addition to storing the object, the LinkedList stores the memory address
         * (or link) of the element that follows it. It's called a LinkedList because
         * each element contains a link to the neighboring element.
         * 
         * img-component
         * You can use the enhanced for loop to iterate over its elements.
         * 
         * 
         * Summary:
         * 
         * - Use an ArrayList when you need rapid access to your data.
         * 
         * - Use a LinkedList when you need to make a large number of inserts and/or
         * deletes.
         */
        LinkedList<String>  c = new LinkedList<>();
        c.add("Red");
        c.add("Blue");
        c.add("Green");
        c.add("Orange");
        c.add("Pink");
        System.out.println(c);

        for (String s: c) {
            System.out.println(s);
        }

        // LinkedLists Practice quiz
        LinkedList<String> word = new LinkedList<>();
        String spaceC = "_".repeat(30);
        boolean valid = false;
        String wordList;
        
        
        while (!valid) {
            System.out.println("\n"+spaceC); System.out.println("\nCurrent size: "+word.size());
            System.out.println(word.size() == 4 ? "\nYou can add last items for your LinkList. \n" : "");
            
            if (word.size() == 5) {
                System.out.println(word+"\n");
                valid = true;
            }

            if (word.size() < word.size()+1 && word.size() < 5)  {
                System.out.print("add "+(word.size()+1)+" LinkList: " );
                wordList = sc.nextLine();
                word.add(wordList);
            }
        }
    }
    
    static void HashMap_Method()  {
        HashMap<String,Integer> points = new HashMap<String, Integer>();
        /* HashMap
         * Arrays and Lists store elements as ordered collections, with each element
         * given an integer index.
         * 
         * HashMap is used for storing data collections as key and value pairs. One
         * object is used as a key (index) to another object (the value).
         * 
         * The put, remove, and get methods are used to add, delete, and access values
         * in the HashMap.
         * 
         * 1. HashMap is Unordered
         * HashMap does not preserve insertion order.
         * 
         * The output order of points.keySet() and points.toString() is not guaranteed.
         * 
         * If you need insertion order, use LinkedHashMap.
         * 
         * 
         * Example:
         */
        System.out.println("\n" + spaces + "HashMap" + spaces);
        points.put("Jordan", 32);
        points.put("Amy", 154);
        points.put("Gab", 17);
        points.put("Oranges", 16);
        points.put("Dave", 42);
        points.put("Rob", 733);
        points.put("Rob", 500); // Rob re-asssign value to 500

        out.println(points.get("Dave"));
        out.println(points.keySet()); // no "733" key returns the value of null.
        out.println(points);
        /*  We have created a HashMap with Strings as its keys and Integers as its
         * values.
         * 
         * Use the get method and the corresponding key to access the HashMap elements.
         */


        HashMap<String, Integer> employees = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        // Sample employees added
        employees.put("Alice", 25);
        employees.put("Bob", 19);
        employees.put("Charlie", 32);
        employees.put("Diana", 21);
        employees.put("Eve", 17);

        out.println("\nExample Entry set:"+employees.entrySet());

        System.out.println("\nOriginal Employees:");
        for (Map.Entry<String, Integer> entry : employees.entrySet()) {
            System.out.println(entry.getKey() + " - Age: " + entry.getValue());
        }

        System.out.print("\nEnter age limit (N): ");
        int N = scanner.nextInt();

        // Remove employees whose age is less than N
        Iterator<Map.Entry<String, Integer>> iterator = employees.entrySet().iterator(); // get the HashMap objects using employees, .entrySet(), .iterator();

        System.out.println(iterator.next());
            
        

        
        out.println();

        while (iterator.hasNext()) { // it runs the while-Loop statement if was more than or one elements in Iterator Class
            Map.Entry<String, Integer> entry = iterator.next(); 
            if (entry.getValue() < N) {
                iterator.remove();  // Safe removal during iteration
            }
        }

        System.out.println("\nEmployees with age >= " + N + ":");
        for (Map.Entry<String, Integer> entry : employees.entrySet()) {
            System.out.println(entry.getKey() + " - Age: " + entry.getValue());
        }

        scanner.close();
    }

    static void HashSets_LinkedHashSet()  {
        /*   Sets
         * A Set is a collection that cannot contain duplicate elements. It models the
         * mathematical set abstraction.
         * 
         * One of the implementations of the Set is the HashSet class.
         * 
         * Great question! LinkedHashSet and LinkedList are both part of Java's
         * Collection Framework, but they serve very different purposes and have
         * different behaviors.
         * 
         * 1. Purpose
         * Additional:
         * | Feature | `LinkedHashSet` | `LinkedList` |
         * | ---------------------- | --------------------------- |
         * ----------------------- |
         * | **Type** | A **Set** | A **List** |
         * | **Allows duplicates?** | ❌ No (only unique elements) | ✅ Yes |
         * | **Maintains order?** | ✅ Yes (insertion order) | ✅ Yes (insertion order) |
         * | **Access by index?** | ❌ No | ✅ Yes (`get(index)`) |
         * 
         * 🔸 2. Use Cases
         * LinkedHashSet is used when:
         * 
         * You want no duplicates.
         * 
         * You want to maintain the order of insertion.
         * 
         * You don’t need indexed access.
         * 
         * LinkedList is used when:
         * 
         * You need a sequential list of items (with duplicates allowed).
         * 
         * You want to add/remove elements from both ends efficiently.
         * 
         * You need to access elements by position (index).
         * 
         * 
         * 🔸 3. Example Comparison
         * ✅ LinkedHashSet Example:
         * java
         * Copy
         * Edit
         * import java.util.LinkedHashSet;
         * 
         * LinkedHashSet<String> set = new LinkedHashSet<>();
         * set.add("A");
         * set.add("B");
         * set.add("B"); // duplicate ignored
         * set.add("C");
         * System.out.println(set); // [A, B, C]
         * 
         * ✅ LinkedList Example:
         * java
         * Copy
         * Edit
         * import java.util.LinkedList;
         * 
         * LinkedList<String> list = new LinkedList<>();
         * list.add("A");
         * list.add("B");
         * list.add("B"); // duplicate allowed
         * list.add("C");
         * System.out.println(list); // [A, B, B, C]
         * System.out.println(list.get(1)); // B
         * 
         * 🔸 4. Performance Differences
         * Operation LinkedHashSet LinkedList
         * Add/remove (middle) ❌ Not supported by index ⚠️ Slower (O(n))
         * Add/remove (ends) ✅ Efficient ✅ Efficient (esp. ends)
         * Check if element exists ✅ Fast (O(1)) ❌ Slower (O(n))
         * Access by index ❌ Not supported ✅ Yes (O(n)) *
         * 
         * ✅ Summary
         * | Feature | LinkedHashSet | LinkedList |
         * | ------------------ | ----------------------- | ------------------------ |
         * | Duplicate elements | ❌ No | ✅ Yes |
         * | Maintains order | ✅ Yes (insertion order) | ✅ Yes (insertion order) |
         * | Random access | ❌ No | ✅ Yes (`get(index)`) |
         * | Implements | `Set`, `Collection` | `List`, `Deque`, `Queue` |
         * 
         * 
         * Example
         */
        System.out.println("\n" + spaces + "HashSet or Sets & LinkHashSet" + spaces);
        HashSet<String> hashset = new HashSet<>();
        hashset.add("A");
        hashset.add("B");
        hashset.add("B");
        hashset.add("Z"); // new Added 
        hashset.add("F"); // new added 
        hashset.add("M"); // new Added
        hashset.add("C");
        hashset.add("E");
        hashset.add("C"); // cannot contain duplicate elements2
        System.out.println(hashset);

        LinkedHashSet<String> linkset = new LinkedHashSet<>();
        linkset.add("Aaa");
        linkset.add("Bbb");
        linkset.add("new Add"); // new add
        linkset.add("latest"); // new add 
        linkset.add("Bbb");
        linkset.add("Ccc");
        System.out.println(linkset);

        /* You can use the <b>size()</b> method to get the number of elements in the
        
         * HashSet.
         * 
         * LinkedHashSet
         * The HashSet class does not automatically retain the order of the elements as
         * they're added. To order the elements, use a LinkedHashSet, which maintains a
         * linked list of the set's elements in the order in which they were inserted.
         * 
         * What is hashing?
         * 
         * A hash table stores information through a mechanism called hashing, in which
         * a key's informational content is used to determine a unique value called a
         * hash code.
         * 
         * So, basically, each element in the HashSet is associated with its unique hash
         * code.
         * 
         * (i)
         * You've learned about the various collection types that are available in Java,
         * including Lists, Maps, and Sets. The choice of which one to use is specific
         * to the data you need to store and manipulate.
         */
    }
    
    static void ArrayListSort () {
        /*   Sorting Lists
         * For the manipulation of data in different collection types, the Java API
         * provides a <b>Collections </b>class, which is included in the java.util
         * package.
         * 
         * One of the most popular <b>Collections </b>class methods is <b>sort()</b>,
         * which sorts the elements of your collection type. The methods in the
         * Collections class are static, so you don't need a Collections object to call
         * them.
         * 
         * Example:
         */
        System.out.println("\n" + spaces + "ArrayList Sorting (and some method)" + spaces);
        ArrayList<String> animals = new ArrayList<>();
        animals.add("tiger");
        animals.add("cat");
        animals.add("snake");

        out.println("Not sorted: "+animals);
        Collections.sort(animals);
        out.println("Sorted: "+ animals);
        out.println(animals.get(0));
        /* As you can see, the elements have been sorted alphabetically. */

        /*  Sorting Lists
         * You can call the <b>sort()</b> methods on different types of Lists, such as
         * Integers.
         */
        ArrayList<Integer> nums = new ArrayList<>();
        nums.add(3);
        nums.add(36);
        nums.add(73);
        nums.add(40);
        nums.add(15);

        out.println("\nNot sorted yet: "+nums);
        sort(nums);
        out.println("Sorted: " + nums);
        /* Other useful methods in the <b>Collections </b>class:
         * 
         * <b>max(Collection c):</b> Returns the maximum element in c as determined by
         * natural ordering.
         * 
         * <b>min(Collection c):</b> Returns the minimum element in c as determined by
         * natural ordering.
         * 
         * <b>reverse(List list):</b> Reverses the sequence in list.
         * 
         * <b>shuffle(List list):</b> Shuffles (i.e., randomizes) the elements in list.
         * 
         * Sorting Lists Practice:
         * Complete the code to output ArrayList's maximum and minimum values.
         */

        out.println("Max: "+Collections.max(nums));
        out.println("Min: "+Collections.min(nums));

    }

    static void methodIterator() {
        /*  Iterators
         * An Iterator is an object that enables to cycle through a collection, obtain
         * or remove elements.
         * 
         * Before you can access a collection through an iterator, you must obtain one.
         * Each of the collection classes provides an <b>iterator()</b> method that
         * returns an iterator to the start of the collection. By using this iterator
         * object, you can access each element in the collection, one element at a time.
         * 
         * The Iterator class provides the following methods:
         * 
         * <b>hasNext()</b>: Returns true if there is at least one more element;
         * otherwise, it returns false.
         * 
         * <b>next()</b>: Returns the next object and advances the iterator.
         * 
         * <b>remove()</b>: Removes the last object that was returned by next from the
         * collection.
         * 
         * The Iterator class must be imported from the java.util package.
         * 
         * -----------------------------------------------------------------------------
         * 🔄 What is an Iterator?
         * An Iterator is a Java interface used to traverse (loop through) elements in a
         * collection like ArrayList, HashSet, LinkedList, etc.
         * 
         * Instead of using a for loop or for-each, you can use an Iterator to go
         * through elements one by one, and optionally remove them during iteration.
         * 
         * 🔧 Iterator Methods
         * 1. hasNext()
         * Purpose: Checks if there's another element to visit.
         * 
         * Returns: true if there's another element, false otherwise.
         * 
         * if (iterator.hasNext()) {
         * // safe to call next()
         * }
         * 
         * 2. next()
         * Purpose: Returns the next element in the collection and moves the cursor
         * forward.
         * 
         * Throws: NoSuchElementException if no more elements.
         * String value = iterator.next(); // gets current item and moves to next
         * 
         * 
         * 3. remove()
         * Purpose: Removes the last element returned by next() from the collection.
         * 
         * Can only be called once per next().
         * 
         * Throws: IllegalStateException if you call it before next() or call it twice
         * without another next().
         * 
         * iterator.next(); // get the current element
         * iterator.remove(); // remove it from the original collection
         * 
         * 
         * import java.util.*;
         * 
         * public class Main {
         * public static void main(String[] args) {
         * List<String> fruits = new ArrayList<>(Arrays.asList("Apple", "Banana", "Cherry"));
         * 
         * Iterator<String> iterator = fruits.iterator();
         * 
         * while (iterator.hasNext()) {
         * String fruit = iterator.next();
         * if (fruit.equals("Banana")) {
         * iterator.remove(); // removes "Banana"
         * }
         * }
         * 
         * System.out.println(fruits); // Output: [Apple, Cherry]
         * }
         * }
         * 
         * ❗Important Notes:
         * You must call next() before calling remove().
         * 
         * remove() affects the original collection.
         * 
         * It's safer than removing elements inside a for-each loop (which throws
         * ConcurrentModificationException).
         * -----------------------------------------------------------------------------
         * 
         * Example:
         * Iterators
         * An Iterator is an object that enables to cycle through a collection, obtain
         * or remove elements.
         * 
         * Before you can access a collection through an iterator, you must obtain one.
         * Each of the collection classes provides an <b>iterator()</b> method that
         * returns an iterator to the start of the collection. By using this iterator
         * object, you can access each element in the collection, one element at a time.
         * 
         * The Iterator class provides the following methods:
         * 
         * <b>hasNext()</b>: Returns true if there is at least one more element;
         * otherwise, it returns false.
         * 
         * <b>next()</b>: Returns the next object and advances the iterator.
         * 
         * <b>remove()</b>: Removes the last object that was returned by next from the
         * collection.
         * 
         * The Iterator class must be imported from the java.util package.
         * 
         * Example:
         */
        System.out.println("\n" + spaces + "Iterators" + spaces);
        LinkedList<String> animalni = new LinkedList<>();
        animalni.add("fox");
        animalni.add("cat");
        animalni.add("dog");
        animalni.add("rabbit");

        out.println(animalni);
        String value;

        Iterator<String> it = animalni.iterator();
        value = it.next(); // first element Fox 
        value = it.next(); // second element Cat
        out.println(value);
        out.println(it);

        /*  <b>it.next()</b> returns the first element in the list and then moves the
         * iterator on to the next element.
         * 
         * Each time you call <b>it.next()</b>, the iterator moves to the next element
         * of the list.
         * 
         * 
        Typically, iterators are used in loops. At each iteration of the loop, you
         * can access the corresponding list element.
         * 
         * Example:
         */
        LinkedList<String> animalka = new LinkedList<>();
        animalka.add("foxxy");
        animalka.add("pussycat");
        animalka.add("doggy");
        animalka.add("rabby");

        Iterator<String> itt = animalka.iterator();

        out.println(); while (itt.hasNext()) {
            String mvalue = itt.next();
            out.println(mvalue);
        }
        /* Here, the while loop determines whether the iterator has additional elements,
         * prints the value of the element, and advances the iterator to the next.
         * 
         * Iterators Practice:
         * Write a code to calculate and output the sum of LinkedList elements.
         */
        
        List<Integer> listMe = new ArrayList<Integer>();
        listMe.add(10);
        listMe.add(20);
        listMe.add(30);
        Iterator<Integer> ittt = listMe.iterator();

        int total = 0;
        int val = 0;
        try {
            out.println(); while (ittt.hasNext()) {
                val = ittt.next(); // Get the next value
                total += val; // Add it to the total
                out.println("Current Value: " + val);
                out.println("Total so far: " + total);  
            }
        } catch (NoSuchElementException e) {
            out.println("No more elements to iterate over.");
        } catch (Exception e) {
            out.println("An error occurred: " + e.getMessage());
        } finally {
            ittt.remove(); // This will throw an exception if not called after next()
        }
    }

    static void wwF () {
        out.println("\n" + spaces + "Working with Files" + spaces);
        /* Working with Files
         * The java.io package includes a File class that allows you to work with files.
         * 
         * To start, create a <b>File </b>object and specify the path of the file in the
         * constructor.
         */
        
        // File file = new File("C:\\data\\input-file.txt");
        /* With the <b>exists()</b> method, you can determine whether a file exists. */

        File x = new File("D:\\Javascriptbiggener\\javaSomefile\\Java_Datetime_API");

        if (x.exists()) {
            System.out.println(x.getName() + " exists!");
        } else {
            System.out.println("The file does not exist");
        }
        /* The code above prints a message stating whether or not the file exists at the
         * specified path.
         * 
         * The <b>getName()</b> method returns the name of the file.
         * 
         * Note that we used double backslashes in the path, as one backslash should be
         * escaped in the path String.
         */

    }

    static void readingFile () {
        /*  Reading a File
         * Files are useful for storing and retrieving data, and there are a number of
         * ways to read from a file.
         * 
         * One of the simplest ways is to use the <b>Scanner </b>class from the
         * java.util package.
         * 
         * The constructor of the <b>Scanner </b>class can take a File object as input.
         * 
         * To read the contents of a text file at the path "C:\\sololearn\\test.txt", we
         * would need to create a File object with the corresponding path and pass it to
         * the Scanner object.
         */
        out.println("\n" + spaces + "Reading Files" + spaces);
        try {
        File x = new File("D:\\Javascriptbiggener\\JavaIntermediate\\Practice_Area\\Anak.java");
        Scanner sc = new Scanner(x);
        // String firstL = sc.nextLine();
        // System.out.println(firstL);
            while (sc.hasNextLine()) {
                String line = sc.nextLine();
                out.println(line);
                /* The <b>hasNextLine()</b> method checks if there is another line in the file,
                * and the <b>nextLine()</b> method reads the next line from the file.
                */
            }
            sc.close();
        }
        catch (FileNotFoundException e) {
            out.println("File not found: " + e.getMessage());   
        }
        /*  We surrounded the code with a try/catch block, because there's a chance that
         * the file may not exist.
         * 
         * {i}
         * It is always good practice to close a file when finished working with it. One
         * way to do this is to use the Scanner's <b>close()</b> method.
         */
    }

    static void Creating_Writing_Files () {
        /*  Creating Files
         * Formatter, another useful class in the java.util package, is used to create
         * content and write it to files.
         * 
         * Example:
         */
        out.println("\n" + spaces + "Creating & Writing Files" + spaces);
        String filePath = "D:/Javascriptbiggener/JavaIntermediate/Practice_Area/MyFile.txt";
        String filePath1 = "D:/Javascriptbiggener/JavaIntermediate/Practice_Area/MyFile1.txt";
        try {
            Formatter f = new Formatter(filePath);
            Formatter f1 = new Formatter(filePath1);

            out.print("Enter some content to write to the file: ");
            String content = sc.nextLine(); // Assuming you want to take input from the user

            // for (int i = 0; i < 5; i++) {
            //     out.print("Enter line " + (i + 1) + ": ");
            //     content += sc.nextLine() + "\n"; // Collecting multiple lines of input
            // }
            // int nm = 1;
            // f.format("%d: %s",nm ,content);
            f.format(content);
            
            f1.format("It is located at: %s%n", filePath);
            f.close(); // Always close the Formatter to release resources
            f1.close();
            sc.close(); // Close the Scanner to release resources

            File file = new File(filePath);
            Scanner mysc = new Scanner(file);

            // int i=1;
            while (mysc.hasNext()) {
                System.out.println(mysc.nextLine());
                // i++;
            }
            mysc.close(); // Close the Scanner to release resources

        } catch (Exception e) {
            out.println("Error: " + e.getMessage());    
        }

        /*  This creates an empty file at the specified path. If the file already exists,
         * this will overwrite it.
         * 
         * (i)
         * Again, you need to surround the code with a try/catch block, as the operation
         * can fail.
         * 
         * Once the file is created, you can write content to it using the same
         * Formatter object's <b>format()</b> method.
         * 
         * Example:
         * 
         * Creating & Writing Files Practice:
         * Complete the code to take the names of N tasks and write down them in the
         * file.
         */
    
        }

    static void Java_2_Module_3_Quiz() {
        out.println("\n" + spaces + "Java_2_Module_3_Quiz#1" + spaces);
        String filepathN = "D:/Javascriptbiggener/JavaIntermediate/Practice_Area/Java 2 Module 3 Quiz.txt";
        File fmtReadFile = new File(filepathN); // for Reading a File
        try (
                Scanner forReading = fmtReadFile.exists() && fmtReadFile.length() > 0
                        ? new Scanner(fmtReadFile) // only create Scanner if file exists and is not empty
                        : null;) {

            if (!fmtReadFile.exists()) { // Check if the file is empty
                Formatter fmtCreate = new Formatter(filepathN); // for Creating a File
                fmtCreate.format(
                        "ArrayList<Integer> list = new ArrayList<Integer>();\r\n" +
                                "for (int i = 0; i < 6; i++) {\r\n" +
                                "\tlist.add(i);\r\n" +
                                "}\r\n" +
                                "int x = 0;\r\n" +
                                "\r\n" +
                                "Iterator<Integer> it = list.iterator();\r\n" +
                                "while (it.hasNext()) {\r\n" +
                                "\tx += it.next();\r\n" +
                                "}\r\n" +
                                "System.out.println(x);");

                out.println("File created successfully.");

                out.println("\nRun it again.");
                fmtCreate.close(); // Always close the Formatter to release resources
                return; // Exit the method after creating the file
            } else {
                out.printf("%nWhat is the Output of the following code?%n");
                while (forReading.hasNext()) {
                    out.println(forReading.nextLine());
                }

                out.printf("%nQ1 answer: ");
                int answer1 = sc.nextInt(); // Read user input
                if (answer1 == 15) {
                    out.println("Correct! The output is 15.");
                } else {
                    out.println("Incorrect. try again. (Don't use chatGPT)");
                }

                out.printf("%nQ2 answer: ");
                int answer2 = sc.nextInt(); // Read user input
                if (answer2 == 12) {
                    out.println("Correct! The output is 12.");
                } else {
                    out.println("Incorrect. try again. (Don't use chatGPT)");
                }
                forReading.close(); // Close the Scanner to release resources
            }

        } catch (FileNotFoundException e) {
            out.println("An error occurred: " + e.getMessage() + " try again.");
        } catch (InputMismatchException e) {
            out.printf("%nInvalid input. Please enter a valid integer answer.%n");
        }
    }

    static void method() {
    }
}