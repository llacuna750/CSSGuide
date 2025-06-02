public class Main {
    public static void main(String[] args) {

        System.out.println("\n---------------Constructor⚡-----------------");
        studentInfo student1 = new studentInfo("Gabriel", 20, 1000, 2004, 2023306394, 195000500);
        System.out.println(student1.GetName());
        System.out.printf("$%,.2f",student1.Getbank_Money());
    }
}
