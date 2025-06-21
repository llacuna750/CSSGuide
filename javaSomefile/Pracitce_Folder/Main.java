package javaSomefile.Pracitce_Folder;

import java.util.ArrayList;
import java.util.Iterator;
public class Main {
    // static class B implements Runnable {
    //     public void run() {
    //         System.out.println("B");
    //     }
    // }

    // static class A extends Thread {
    //     public void run() {
    //         System.out.println("A");
    //         Thread t = new Thread(new B());
    //         t.start();
    //     }

    //     public static void main(String[] args) {
    //         A object = new A();
    //         object.start();
    //     }
    // }

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < 6; i++) {
            list.add(i);
        }
        int x = 0;
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) {
            x+= it.next();	
        }
        System.out.println(x);          
        
        int f=1, i=2;
        while(++i<5)
        f*=i;
        System.out.println(f);
    }
}
