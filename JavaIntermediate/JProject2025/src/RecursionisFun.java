public class RecursionisFun {
    public static void main(String[] args) {
        RecursionisFun rs = new RecursionisFun();
        rs.sayHi(5);

        // int num = 15;
        // num = -1; // not decrementing or just initialize varible values
        // System.out.println(num);
    }

    void sayHi(int n) {
        if (n == -1) { return; }

        String hi = (n != 0) ? hi() : "Done!";
        System.out.println(hi);

        // n-=1;
        n--;
        sayHi(n);
        
        // if (n == 0) {
        //     System.out.println("Done!");
        // } else {
        //     System.out.println("Hi!");
        //     n-=1;
        //     sayHi(n);
        // }
    }

    static String hi() {
        return "Hi!";
    }
}
