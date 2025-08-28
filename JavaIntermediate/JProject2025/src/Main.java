public class Main {
    public static void main(String[] args) {
        // Ginikanan siA = new Ginikanan(); // only need when in Polymorphism
        // var ab = new Child();
        // ab.displayA();
        // ab.displayB();

        Dog df = new Dog();
        df.bark();

        Dog d1 = new Chihuahua();
        d1.bark();
        d1.poop();
        System.out.println(d1.getAvgSize());
    }
}
    