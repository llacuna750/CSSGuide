public class PassByvalue {
    public static void main(String[] args) throws Exception {

        int[] myStudentAge = {19, 22, 35, 40, 70};
        int target1 = 3;
        int target2 = 2;
                                    // passbyValue method   
        displayAgeValue(myStudentAge[target1]);           // output: 100 from Function value  
        
        // passbyReference method
        displayAgeReference(myStudentAge);                // OUTPUT:  19  // If you call that method it run entire statement before run the next line


        System.out.println("\nLog the myStudentAge Array at index["+target1+"]: ====> "+myStudentAge[target1]);
        System.out.println("\nLog the myStudentAge Array at index["+target2+"]: ====> "+myStudentAge[target2]); // Output :   75  Updated by : displayAgeReference() method

    }

    // Pass by value method
    public static void displayAgeValue(int studentAge) {
        studentAge = 100;
        System.out.println("\n(from displayAgeValue method): " + studentAge); // If function have a  value on a statement and it print out that's would display 
    }

    // Pass by reference method
    public static void displayAgeReference(int[] studentAge) { 
        studentAge [2]= 75; // modified the array mystudentage list  {19, 22, 75, 40, 70} current list   
                            // updated the int array by calling this method

        System.out.println("\n(from displayAgeReference method): " + studentAge[0]); // If you write a Another array update value and it call the array that would be the Display Output
    }
}

