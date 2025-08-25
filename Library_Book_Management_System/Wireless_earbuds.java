package Library_Book_Management_System;

public class Wireless_earbuds extends Earphone{
    public Wireless_earbuds(int volume_Level, int battery_Life, String brand) {
        super(volume_Level, battery_Life, brand); // forward parameters to superclass constructor
    }

    @Override
    void muteVolume() {
        // super.muteVolume();
        System.out.println("\nYour earbuds is Muted!");
        setVolume_Level(0);
    }

    void keep_intheCase_the_earbuds() {
        System.out.println("Power Oppp..!");
    }
}
