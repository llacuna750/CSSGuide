package JavaIntermediate;
// import java.util.Scanner;

// import OOP_Practicing.Human;

// import static java.lang.System.out; // imports the out object from the System class in the java.lang package

// import java.io.File;
// import java.util.Scanner; // imports the Scanner class from the java.util package
// import java.util.Formatter;
// import java.io.File; // imports the File class from the java.io package

// import ExternalPackage.*; // uses wild Card to import all classes in a package.

/*  public is an access modifier, meaning that it is used to set the level of access. You can use access modifiers for classes, attributes, and methods.

    For classes, the available modifiers are public or default (left blank), as described below:

    public: The class is accessible by any other class.

    default: The class is accessible only by classes in the same package.

    The following choices are available for attributes and methods:

    default: A variable or method declared with no access control modifier is available to any other class in the same package.

    public: Accessible from any other class.

    protected: Provides the same access as the default access modifier, with the addition that subclasses can access protected methods and variables of the superclass (Subclasses and superclasses are covered in upcoming lessons).

    private: Accessible only within the declared class itself.
*/
public class Myclass  {
    // static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        // Human h1 = new Human();
        // h1.Speak();

        // Boolean isBoolean = true;
        // String notBoolean = "Not a boolean";


        // System.out.print("\nTry to not enter boolean values: ");
        // Boolean isItBoolean = sc.nextBoolean();

        // System.out.println(isItBoolean);

        // boolean isBothBoolean = (isBoolean.getClass() == notBoolean.getClass()) || false;

        // if (notBoolean != null && isBoolean.getClass() == Boolean.class) {
        //     System.out.println("Value is a boolean.");
        // }

        // if (notBoolean != null && notBoolean.getClass().equals(Boolean.class)) {
        //     System.out.println("notBoolean is a Boolean.");
        // } else {
        //     System.out.println("notBoolean is NOT a Boolean.");
        // }
        


        // out.printf("%n%55s!%n", "Normalan");
        TestAll.main(args);

        
        // String[] Songlyrics = {
        //     "Dapat mong malaman",
        //     "Walang personalan ang mga kaganapan",
        //     "Pwede bang normalan lang lahat ng ito",
        //     "Sana ay magkatotoo...",
        //     "Pero sa ngayon",
        //     "",
        //     "Dapat mong malaman",
        //     "Walang personalan ang mga kaganapan",
        //     "Pwede bang normalan lang lahat ng ito",
        //     "Sana ay magkatotoo...",
        //     "Pero sa ngayon"
        // };
        
        // Thread playSong = new Thread(() -> {
        //     for (String line : Songlyrics) {
        //         if (line.trim().isEmpty()) {
        //             System.out.println(); // Print a blank line if the line is empty
        //             continue;   
        //         }
 
        //         String[] words = line.split(" ");

        //         for (String word : words) {
        //             System.out.print(word + " ");
        //             try {
        //                 Thread.sleep(615); // Delay between each word
        //             } catch (InterruptedException e) {
        //                 System.out.println("Thread was interrupted while sleeping!");
        //                 return; // Exit thread early on interruption
        //             }
        //         }

        //         System.out.println(); // Print newline after the line
        //         try {
        //             Thread.sleep(610); // Delay between each line
        //         } catch (InterruptedException e) {
        //             System.out.println("Thread was interrupted while sleeping!");
        //             return;
        //         }
        //     }
        // });

        // playSong.start();

        // Myclass usebSort = new Myclass();

        // int[] number = {10, 5, 6, 7, 2, 3, 1}; // 7 length
        // usebSort.bubbleSortEx(number);

        // System.out.print("\nBubble sorted: ");
        // for (int i : number) {
        //     // System.out.print(+i);
        // }

        // Myclass addUp = new Myclass();
        // System.out.println(addUp.addUp(10));

        // forLoop(number);
    }

    // Left Side — O(n) Linear Time
    int addUp(int n) {
        int sum = 0;
        for (int i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    }


    // Right Side—O(1) Constant Time
    // int addUp(int n) {
    //     int sum = n * (n + 1) / 2;
    //     return sum;
    // }


    public static void forLoop(int n[]) {
        for(int i=0; i<n.length-1; i+=1) {
            System.out.println("------------------------");
            for(int j=0; j<n.length-1; j++) {
                System.out.println("i: "+i+" j: "+j);
            }
        }
    }

    public void bubbleSortEx(int my_n[]) {
        System.out.println("Bubble sorting..");

        try {
            // for outer loop
            for (int i = 0; i < my_n.length-1; i++) {
                System.out.println("------------------------");
                // for inner loop : para saakoa murag inner loop ang una gi pahuarot nga index number ayha ang outer
                for (int j = 0; j < my_n.length - i - 1; j++) {
                    // System.out.println("\nj < "+(my_n.length - i -1)+" = "+(j < my_n.length - i - 1));
                    // System.out.println("i: "+i +",  j: "+ j);
                    // System.out.println(my_n[j]);

                    /**
                     *formula: 7 - i - 1
                     * j = 0:  <   7 - 0 - 1  equal to 6     
                     * j = 1:  <   7 - 1 - 1  equal to 5 
                     * j = 2:  <   7 - 2 - 1  equal to 4 
                     * j = 3:  <   7 - 3 - 1  equal to 3  
                     * j = 4:  <   7 - 4 - 1  equal to 2  
                     * j = 5:  <   7 - 5 - 1  equal to 1  
                     * j = 6:  <   7 - 6 - 1  equal to 0  
                     */
                    // swap logic
                    if (my_n[j] >  my_n[j + 1]) {
                        System.out.println("\n"+j+" < "+ "7 - i - 1 = "+(my_n.length - i - 1));
                        System.out.println("i: " + i + ",  j: " + j);
                        int temp = my_n[j]; 
                        my_n[j] = my_n[j+1];
                        my_n[j+1] = temp;
                    }
                }
            }
        } catch(IndexOutOfBoundsException e) {
            System.out.println(e.getMessage());
        }
        
    }
}