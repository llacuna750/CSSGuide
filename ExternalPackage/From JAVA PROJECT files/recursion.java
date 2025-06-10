public class recursion {
    public static void print(int n) {
        if (n == 10) {
            System.out.println(n + " Finish Line! ");
            return;
        }else {
            System.out.println( n + " ");
            print(n + 1);
        }
    }
    public static void main(String[] args) {
        int number = 1;
        print(number);
    }
}
