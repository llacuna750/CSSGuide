package JavaIntermediate;
 
// Let's Say in this class Vehile we have many Vehicles Object and every vehicles s different color & brand
// private
public
class Vehicle {
  int maxSpeed;
  int wheels;
  String color;
  double fuelCapacity;  

  private String mycolor; // data hiding.

  // private 
  String nameofCar;

  // Getters
  public String getMycolor() {
    return mycolor;
  }

  // Setters
  public void setMycolor(String c) {
    this.mycolor = c;
  }

  // WE use constructors for this class Vehicle
  // public Vehicle() {
  //     nameofCar = "Toyota";
  // }

  // u can do like this
  public Vehicle(String carName) {
    nameofCar = carName;
  }

  // if the attribute is private, we use also getters & setters for that problem
  // Vehicle(String car) {
  //   nameofCar = car;
  // }
  // Getters for attribute name nameofCar
  public String getNameofCar() {
    return nameofCar;
  }
  /*
    Vehicle() {
    this.setColor("Red");
    }

    // If you use this method of constructoring it will pass the c parameter to setters name setColor 
    Vehicle(String c) {
      this.setColor(c);
    }
  
    // Setter       
    public void setColor(String c) {
      this.color = c;  // here the attribute private color assign by constuctor the parameter String c

    }
  */

  void horn() {
    System.out.println("Beep!");
  }
}
