package ExternalPackage;

import JavaIntermediate.Animal;

public class Cow extends Animal {
    public void makeSound(String mooo) {
        System.out.println(mooo);
        System.out.println("Mooo...");
    }

    // public Cow() {
    //     super("cow"); // Call the Animal constructor with the required argument
    // }
}
