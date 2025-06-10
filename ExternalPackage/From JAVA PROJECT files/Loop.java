public class Loop {

    public static void main(String[] args) {
                                                                 //  for loop Skipping iteration
        // for ( i=20; i>=0; i-=2 ) {

        //     if (i int== 14 || i == 10) {
        //         continue;
        //     }
        //     System.out.println(i);
        // }
        // System.out.println();

        //                 // While loop Skipping iteration
        int x = 20;
        while (x >= 0) {
            
            if (x == 14 || x == 10) {
                x -= 2;
                continue;
            }
            System.out.println(x);
            x -= 2;
        }

                                                // code that can skip number exclude  using while-loop  0-10
        // int y = 0;
        // while (y <= 10) {
        //     if (y == 5 || y == 2) {
        //         y++;
        //         continue;
        //     }
        //     System.out.println(y);
        //     y++;

        // }

        //                                              // code that can skip number exclude  using while-loop
        
        // int x = 10;
        // while (x >= 0) {
        //     if (x == 5 || x == 2) {
        //         x--;
        //         continue;
        //     }
        //     System.out.println(x);
        //     x--;
        // }

        // System.out.println();
        //                                                          // code that can skip number exclude using for-loop
        // for (int i=10; i>=0; i-- ) { 
        //     if ((i == 5) || (i == 2)) {
        //         continue;
        //     }
        //     System.out.println(i);
        // }

                                                                    // code that can Sum all interger array
        int [] sum_these = { 10, 20, 30, 40 };
        
        int sum = 0;
        for (int i=0; i<sum_these.length; i++) {
            sum += sum_these[i];
        }
        System.out.println(sum);

        /*
        Solution:
        example:
        sum = sum + sum_these[i]    0 + 10 = 10
                                    10 + 20 = 30
                                    30 + 30 = 60
                                    60 + 40 = new sum = 100

        sum = sum + i; example: Iteration 1: x = 1, sum = 0 + 1 = 1
                                Iteration 2: x = 2, sum = 1 + 2 = 3
                                Iteration 3: x = 3, sum = 3 + 3 = 6

         */
    }
}
