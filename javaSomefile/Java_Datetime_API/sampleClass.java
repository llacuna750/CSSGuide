package javaSomefile.Java_Datetime_API;

import java.text.*;
import java.util.*;

public class sampleClass {
    public static void main(String[] args) {
        // Date cd = new Date();
        // System.out.println("\nToday is "+cd);

        String md = new SimpleDateFormat("yyyy.MM.dd. HH.mm.ss").format(new Date());
        System.out.println(md);
    }
    
}
