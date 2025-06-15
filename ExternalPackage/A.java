package ExternalPackage;

public class A {
    protected String a;
    private String b;
    private int x;

    /* Contructor Class A */
    public A() {
        System.out.println("\nNew A (im from class A as Base Class im declared inside a Constructor and Im not direcly Insantiated)");
    }

    // Getters
    public String getB() {
        return b;
    }
    // Setters
    public void setB(String b) {
        this.b = b;
    }

    @Override
    public boolean equals(Object obj) {
        return ((A) obj).x == this.x;
    }

    // Getters for protected a
    public String getA() {
        return a;
    }

    // We have Setters for incase you want to asign
    public void setA(String a) {
        this.a = a;
    }
    
    // Implement the Overriding Overload
    /* Without parameter dosomething() method  */
    public void doSomething() {
        System.out.println("A");
    }
    
    /* With parameter dosomething() method */
    public void doSomething(String str) {
        System.out.println(str);
    }

    public void setX(int x) {
        this.x = x;
    }
    
    // Kind of Method Overloading
    public void print() {
        System.out.println("no Parameter");
    }

    public void print(String str) {
        System.out.println("You call print() method as String parameter with "+str+"\n");
    }

    public void print(int x) {
        System.out.println("You call print() method as Int parameter "+x);
    }
}

    

