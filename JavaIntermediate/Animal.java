package JavaIntermediate;


public class Animal {
  String name;
  protected int legs;
  
  public void eat() {
      System.out.println("Animals eats");
  }
  
  void bark() {
    System.out.println("Woof-Woof");
  }

  public void makeSound() {
    // System.out.println(grrr);
    System.out.println("Grr...");
  }

  // public Animal (String n) {
  //   name = n;
  // }
}