import java.util.Arrays;

public class PassByvalue {
    public static void main(String[] args) throws Exception {

        int[] myStudentAge = {19, 22, 35, 40, 70};
        int target0 = 0;
        int target1 = 1;

        // passbyValue method   
        System.out.println("\n\n\nIs updated: "+ displayAgeValue(myStudentAge[target1]));
        
        // passbyReference method
        // System.out.println("Is updated: "+ displayAgeReference(myStudentAge));
        
        System.out.println("\n\n\nPass by Value \nExplaination: "+ displayAgeValue(myStudentAge[target1])+" == "+ myStudentAge[target1] +"\nis Update: "+ (displayAgeValue(myStudentAge[target1]) == myStudentAge[target1]));
        System.out.println("Array contents: " + Arrays.toString(myStudentAge));
        
        System.out.println("\n\n\nPass by Ref. \nExplaination: "+ displayAgeReference(myStudentAge) +" == "+  myStudentAge[target0] +"\nis Update: "+ (displayAgeReference(myStudentAge) == myStudentAge[target0])); // Output :   75  Updated by : displayAgeReference() method2
        System.out.println("Array contents: " + Arrays.toString(myStudentAge));


        // System.out.print("{ ");
        for (int i = 0; i < myStudentAge.length; i++) {
            // System.out.print(myStudentAge[i]);

            if (i < myStudentAge.length - 1) {
                // System.out.print(", ");
            }
        }
        // System.out.print(" }\n\n");
    }

    // Pass by value method
    public static  int displayAgeValue(int studentAge) {
        studentAge = 100;
        // System.out.println("\n(from displayAgeValue method): " + studentAge); // If function have a  value on a statement and it print out that's would display 

        return studentAge;
    }

    // Pass by reference method
    public static int displayAgeReference(int[] studentAge) { 
        studentAge [0]= 75; // modified the array mystudentage list  {19, 22, 75, 40, 70} current list   
                            // updated the int array by calling this method

        // If you write a Another array update value and it call the array that would be the Display Output
        return studentAge[0];
    }
}

