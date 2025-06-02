package JavaIntermediate;

import javaIntermediate1.Javainter;

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
        Javainter owner = new Javainter(); // Javainter class
        javaOOP java = new javaOOP(); // javaOOP class
        Animal animal = new Animal(); // Animal class

        animal.bark();
        System.out.println("Hello from packaged Myclass!");

        Vehicle v1 = new Vehicle();
        Vehicle v2 = new Vehicle();
        v1.color = "red";
        v2.color = "gold";
        v2.horn();

        // System.out.printf("%s",java.javaYearCreated);
        System.out.println(java.javaYearCreated);
        System.out.println(java.javaFounder);
        System.out.println("The color of Vehicle 1: "+v1.color);
        System.out.println("The color of Vehicle 2: "+v2.color);
        System.out.println("owner: "+ owner.name);
    }
}
