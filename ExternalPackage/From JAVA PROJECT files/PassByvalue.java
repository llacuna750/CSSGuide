public class PassByvalue {
    public static void main(String[] args) throws Exception {

        int[] myStudentAge = {19, 22, 35, 40, 70};

                                    // passbyValue method   
        displayAgeValue(myStudentAge[3]);           // output: 100 from Function value  
        System.out.println("using sout ====> "+myStudentAge[3]);

                                 // passbyReference method
        displayAgeReference(myStudentAge);                           // OUTPUT:  19  // If you call that method it run entire statement before run the next line
        System.out.println("using sout ====> "+myStudentAge[2]); // Output :   75  Updated by : displayAgeReference() method

    }

    public static void displayAgeValue(int studentAge) {
        studentAge = 100;
        System.out.println("\nMy student age is (pass by value): " + studentAge); // If function have a  value on a statement and it print out that's would display 
    }

    public static void displayAgeReference(int[] studentAge) {
        studentAge [2]= 75;   // modified the array mystudentage list  {19, 22, 75, 40, 70} current list   
                            // updated the int array by calling this method

        System.out.println("\nMy student age is (pass by reference): " + studentAge[0]);// If you write a Another array update value and it call the array that would be the Display Output
    }
}
