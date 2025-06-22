package JavaIntermediate;

import static java.lang.System.out; // imports the out object from the System class in the java.lang package

// import java.io.File;
// import java.util.Scanner; // imports the Scanner class from the java.util package
// import java.util.Formatter;
// import java.io.File; // imports the File class from the java.io package

// import ExternalPackage.; // uses wild Card to import all classes in a package.

/*  public is an access modifier, meaning that it is used to set the level of access. You can use access modifiers for classes, attributes, and methods.

    For classes, the available modifiers are public or default (left blank), as described below:

    public: The class is accessible by any other class.

    default: The class is accessible only by classes in the same package.

    The following choices are available for attributes and methods:

    default: A variable or method declared with no access control modifier is available to any other class in the same package.

    public: Accessible from any other class.

    protected: Provides the same access as the default access modifier, with the addition that subclasses can access protected methods and variables of the superclass (Subclasses and superclasses are covered in upcoming lessons).

    private: Accessible only within the declared class itself.
*/
class Myclass {
    // static Scanner sc = new Scanner(System.in); 
    public static void main(String[] args) {

        out.printf("%n%55s!%n", "Hello Myclass");
        TestAll.main(args);

        
        
    }
}