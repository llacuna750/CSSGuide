package JavaIntermediate;

class Dog extends Animal{
    Dog () {
        legs = 4;
    }

    @Override
    public void makeSound () {
        // System.out.println(bark);
        System.out.println("Dog barks");
    }

    // @Override 
    // public void bark() {
    //     System.out.println("Awhh.. Awhh.!");
    // }
}
