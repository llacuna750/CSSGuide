package ExternalPackage;

public
class A {
    protected String a;
    private String b;

    /* Contructor Class A */
    public A() {
        System.out.println("\nNew A");
    }

    // Getters
    public String getB() {
        return b;
    }
    // Setters
    public void setB(String b) {
        this.b = b;
    }
    // Getters for protected a
    public String getA() {
        return a;
    }

    // We have Setters for incase you want to asign
    public void setA(String a) {
        this.a = a;
    }
}
