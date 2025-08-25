package Library_Book_Management_System;

public class Earphone {
    private int volume_Level;
    private int battery_Life;
    private String brand;

    
    public Earphone(int volume_Level, int battery_Life, String brand) {
        this.volume_Level = volume_Level;
        this.battery_Life = battery_Life;
        this.brand = brand;
    }


    // Getters & Setters Volume Status
    public int getVolume_Level() {
        return volume_Level;
    }

    public void setVolume_Level(int volume_Level) {
        this.volume_Level = volume_Level;
    }


    // Getters & Setters Battery Life status 
    public int getBattery_Life() {
        return battery_Life;
    }

    public void setBattery_Life(int battery_Life) {
        this.battery_Life = battery_Life;
    }


    // Getters & Setters Battery Life status
    public String getBrand() {
        return brand;
    }


    public void setBrand(String brand) {
        this.brand = brand;
    }

    // Behaviour of a Earphone
    void muteVolume() {
        System.out.println("The earPhone is Muted");
    }

    void clickPowerOn() {
        System.out.println("You click powerButton!");
    }

    void clickPowerOn(int n) {
        System.out.println("You hold powerButton for "+n+" seconds!");
    }

    @Override
    public String toString() {
        return "\n[volume_Level=" + volume_Level + ", battery_Life=" + battery_Life + "]";
    }
}
