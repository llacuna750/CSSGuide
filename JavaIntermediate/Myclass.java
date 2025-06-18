package JavaIntermediate;

import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;
import java.util.Scanner;

// import ExternalPackage.; // uses wild Card to import all classes in a package.
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
// public 
class Myclass {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        System.out.println("\nHello Myclass!\n");
        TestAll.main(args);

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
        HashMap<String,Integer> points = new HashMap<String, Integer>();
        points.put("Amy", 154);
        points.put("Gab", 17);
        points.put("Oranges", 16);
        points.put("Dave", 42);
        points.put("Rob", 733);
        points.put("Rob", 500); // Rob re-asssign value to 500
        System.out.println(points.get("Dave"));
        System.out.println(points.keySet()); // no "733" key returns the value of null.
        System.out.println(points);
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

        System.out.println("\nOriginal Employees:");
        for (Map.Entry<String, Integer> entry : employees.entrySet()) {
            System.out.println(entry.getKey() + " - Age: " + entry.getValue());
        }

        System.out.print("\nEnter age limit (N): ");
        int N = scanner.nextInt();

        // Remove employees whose age is less than N
        Iterator<Map.Entry<String, Integer>> iterator = employees.entrySet().iterator();
        while (iterator.hasNext()) {
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
}