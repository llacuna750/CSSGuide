package JavaIntermediate;

import java.util.Scanner;

public class factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // System.out.print("Enter a Number: ");
        // int num = sc.nextInt();

        // for (int i=num; i >= -1; i--) {
        //     if (i == -1) {
        //         System.out.println("Happy New Year!");
        //     }else {
        //         System.out.println(i);
        //     }
        // }

        int num1 = 10;
        System.out.println();
        boolean con = true;

        while (con) {
            if (-1 < num1) {
                System.out.println(num1);
                num1 -= 1;
            }else {
                System.out.println("Stop Here!\n");
                con = false; 
            }
        }

        // 2D Array
        String[][] names = {
            {"Gabriel", "Dab", "Olides"},
            {"Chikarnd", "Gamay", "SnoopyDog"}
        };

        // int x = names[0].length;
        //   int y = names[1].length;
          int count = 1;

        System.out.println("length: "+names.length +"\n");

        for (int i=0; i<names.length; i++) {
            for (int j=0; j<names[i].length; j++) {
                System.out.println(count+". "+ names[i][j] +" ");
                count++;
            }
            // System.out.println();
        }

        System.out.println("\nTarget name: "+names[1][2]);
        /* 1st []= dept   
           2nd []= row  
           3rd []= column
        */
        String[][][] animals = {
            {
               {"Dog", "Car", "Rabbit"},
               {"Bat", "Lion", "Ostrich"},
               {"Chicken", "Eagle", "Whale"}
            }
            ,{
                {"Dragon", "Ant", "Snake"},
                {"jeraff", "falcon", "horse"}
             }
        };
        System.out.println("\nDept: "+animals.length +
        "\nRow of first Dept: "+animals[0].length+
        "\nRow of second Dept: "+animals[1].length+"\n");
        System.out.println("Targeted animals: "+animals[1][0][1]+"\n");

        int ihap = 1;
        for (int i=0; i < animals.length; i++) {
            for (int j=0; j < animals.length; j++) {
                for (int z=0; z < animals[j].length; z++) {
                    System.out.println(ihap+". "+animals[i][j][z]);
                    ihap++;
                }
                System.out.println();
            }
            System.out.println();
        }

        int a[][] = {
            {1, 2, 3, 4, 5},
            {6, 4, 2, 7},
            {3, 6},
            {2, 6, 8},
          };
          
          int sum=0, amount=0;
          for (int[] row : a)
            for (int val : row) {
              sum += val; amount += 1;
            }
          
        //   return sum / (double) amount;
          System.out.println(sum / (double) amount);

          int[][] myNumbers = { {1,2,3,4,5}, {6,7,8,9} };
          int n = myNumbers[0].length;
          int m = myNumbers[1].length;
          int z =  n + m;
          System.out.println(z);

        // System.out.println();
        // System.out.println(paktoryal(num));

        // System.out.println(uCallMe(num));
        sc.close();
    }

    // for loop factorial non-recursive
    // public static int factorial (int n) {
    //     int res = 1;
    //     for (int i=n; i >= 1; i--) {
    //         res *= i;
    //     }
    //     return res;
    // }

    // recursive factorial (if else condition)
    // public static int pak (int n) {
    //     if (n > 1 ) {
    //         return n * paktoryal(n - 1);
    //     }else { 
    //         return n;
    //     }
    // }

    // recursive factorial for loop
    public static int paktoryal (int n) {
       int res = 0;
        for (int i=1; i < n; i++) {
            res = i * n; 
            /*
             1 * 5 
             5 * 4
             20 * 3
             60 * 2
             120 * 1

           
            */
            // System.out.println("n: "+ n); 
            //  n--;
             paktoryal(n - 1);  
            System.out.println("Res: "+ res);     
        }
        return  res;
    }
    // public static int CallMe(int n) {
    //     String res;
    //     for (int i=1; i<=n; i++) {
    //         return System.out.println();
    //     }
    // }

    // public static int uCallMe(int n) {
    //     while (n >= 0) {

    //     }
    //     return true;
    // }


}