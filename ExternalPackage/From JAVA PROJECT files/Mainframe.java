import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class Mainframe extends JFrame{
    public void init () {
        setTitle("Welcome");
        setSize(450, 300);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setVisible(true);
    }
    public static void main(String[] args) {
        Mainframe mframe = new Mainframe();
        mframe.init();
    }
    
}   
