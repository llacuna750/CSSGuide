package javaSomefile;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import java.awt.*;

public class Myframe extends JFrame {
    Myframe () {
        // LEts Learn BASIC JFrame
        // JFrame this = new JFrame(); // Instantiate the JFrame API and create object.
        this.setTitle("First JFRAME"); // set Title of a this
        this.setDefaultCloseOperation(3); // exit out application
        this.setResizable(true); // Cannot re-size the JFrame box
        this.setSize(420, 420); // set the x-dimension and y-dimension of this
        System.out.println("\nMy JFrame Title: "+this.getTitle()); // get JFrame Title
        this.setVisible(true); // set the visibility of JFrame App / Software = true

        ImageIcon image = new ImageIcon("images/watchthis.png"); // Create an Image
        this.setIconImage(image.getImage());  // Change icon of this
        this.getContentPane().setBackground(new Color(100,255,200)); // set Background Color
    }
}
