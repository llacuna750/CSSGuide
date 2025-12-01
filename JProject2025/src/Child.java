
public class Child extends Parent{
    public Child () {
        b = "Gwapo si Gab!";
    }

    @Override
    public String toString() {
        return "Anak []";
    }

    public void displayA() {
        System.out.println("Accessed: " + a);
    }

    public void displayB() {
        System.out.println("Accessed: " + b);
    }
}
