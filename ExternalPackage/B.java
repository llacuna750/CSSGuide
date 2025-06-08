package ExternalPackage;

public class B extends A{
    /* Contructor Class A */
    public B() {
        System.out.println("New B");
        a = "protected a is from a superclass and initialized in subclass";
    }
}