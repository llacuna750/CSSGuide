package JavaIntermediate;

// import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Iterator;
// import static java.lang.System.out;

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
        // TestAll.main(args);
        
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
    
        // LinkedList<String> animalni = new LinkedList<>();
        // animalni.add("fox");
        // animalni.add("cat");
        // animalni.add("dog");
        // animalni.add("rabbit");

        // Iterator<String> it = animalni.iterator();
        // String value = it.next();
        // out.println(value);
        // /*  <b>it.next()</b> returns the first element in the list and then moves the
        //  * iterator on to the next element.
        //  * 
        //  * Each time you call <b>it.next()</b>, the iterator moves to the next element
        //  * of the list.
        //  * 
        //  * 
        // Typically, iterators are used in loops. At each iteration of the loop, you
        //  * can access the corresponding list element.
        //  * 
        //  * Example:
        //  */
        // LinkedList<String> animalka = new LinkedList<>();
        // animalka.add("foxxy");
        // animalka.add("pussycat");
        // animalka.add("doggy");
        // animalka.add("rabby");

        // Iterator<String> itt = animalka.iterator();
        // while (itt.hasNext()) {
        //     String mvalue = it.next();
        //     out.println(mvalue);
        // }
        /* Here, the while loop determines whether the iterator has additional elements,
         * prints the value of the element, and advances the iterator to the next.
         * 
         * Iterators Practice:
         * Write a code to calculate and output the sum of LinkedList elements.
         */
    
        List<Integer> list = new ArrayList<Integer>();
        list.add(10);
        list.add(20);
        list.add(30);
        Iterator<Integer> it = list.iterator();
        it.next();
        System.out.println(it.next());
    }
}