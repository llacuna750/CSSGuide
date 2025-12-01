package JavaIntermediate;


class Sakyanan {
    private int maxSpeed; // data hiding
    private int wheels; // data hiding
    private String color; // data hiding
    private double fuelCapacity;  // data hiding
    
    // The getter method returns the value of the attribute.
    // Getters start with get, followed by the variable name, with the first letter of the variable name capitalized.
    
    // Getter
    public int getMaxSpeed() {
        return maxSpeed;
    }
    
    // Getter
    public int getWheels() {
        return wheels;
    }

    // Getter
    public String getColor() {
        return color;
    }

    // Getter
    public double getFuelCapacity() {
        return fuelCapacity;
    }
    
    /* The setter method takes a parameter and assigns it to the attribute.
    Setters start with set, followed by the variable name, with the first letter of the variable name capitalized. */

    public void setMaxSpeed(int kapaspas) {
        this.maxSpeed = kapaspas;
    }

    // Setter
    public void setWheels(int ligid) {
        this.wheels = ligid;
    }

    // Setter
    public void setColor(String culay) {
        this.color = culay;
    }

    // Setter
    public void setFuelCapacity(int fuelCapac) {
        this.fuelCapacity = fuelCapac;
    }
    
    /*  Setter
     Tanan private na attribute kay gi assignan in One line of Object
     dili ma public void kay daghan siyay parameter

     Important: and this is Called Constructor
      with it uses setters to a private attribute
    */
    public Sakyanan(int kapaspas, int ligid, String c, int fuelCapac
    ,int wheels
    //i think it getting no effect because the number of attributes in these class is lessthan to the number of Constructor parameter.
    // but if you decrement or equal the number of attribute in number of Constructor parameter 
    // it will work the wheels = ligid
    ) {
        this.maxSpeed = kapaspas;
        this.wheels = wheels; // best practice
        // wheels = ligid; // don't work
        // wheels = wheels; // read problem error: ❌ This just assigns the param to itself!
        this.color = c;
        this.fuelCapacity = fuelCapac;
    }
    
    public void horn() {
        System.out.println("Beep!");
    }
}
