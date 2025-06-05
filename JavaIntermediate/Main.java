package JavaIntermediate;

public class Main {
    public static void main(String[] args) {

        System.out.println("\n---------------Constructor⚡-----------------");

        // Create studentInfo and SchoolInfo objects
        studentInfo student1 = new studentInfo("Gabriel", 20, 1000, 2004, 2023306394, 195000500);
        SchoolInfo myschool = new SchoolInfo();

        // Print formatted student information
        System.out.printf(
            "My name is %s and I am studying in %s. Money left: $%,.2f%n%60s %d%n",
            student1.GetName(),
            myschool.akongGiskwelahan,
            student1.Getbank_Money(),
            "Student ID:",
            student1.IDnumber
        );
    }
}
