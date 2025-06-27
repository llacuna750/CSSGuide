package JavaIntermediate.ListofObject;
import static java.lang.System.out;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Listobject {


    static Listobject runMe = new Listobject();
    static Listobject getGender = new Listobject();
    String m = "Male", f = "Female";

    public static void main(String[] args) {
        /*
         * Person dabskie = new Person("Gabriel", 20);
         * dabskie.setName("Dabdev"); // Updated the name
         * out.println(dabskie.getName());
         */

        // List<Person> listofPersonOld = Arrays.asList(new Person("Gabriel", 21)); //
        // Another alternative way of adding a Object in List
        runMe.run();
    }

    public void run (){
        List<Person> listofPerson = new ArrayList<>(); // have multibly Objects inside the List

        listofPerson.add(new Person("Gabriel", 21, getGender.m));
        listofPerson.add(new Person("Jobert", 18, getGender.m));
        listofPerson.add(new Person("PulapSkert", 23, getGender.m));
        listofPerson.add(new Person("Oranges", 26, getGender.m));
        listofPerson.add(new Person("Nathashia", 29, getGender.f));

        // out.println(listofPerson.size()); // Display size of ArrayList
        // out.println(listofPerson.toString()); // Display All but hashcode
        // out.println(listofPerson.get(0).getName()); // Display the getName

        // for (int i=0; i<listofPerson.size(); i+=1){
        // out.println(listofPerson.get(i).getName()); // another alternative way to
        // display name aside for each
        // }out.println();

        try {
            for (Person mgaPerson : listofPerson) {
                out.println(mgaPerson.getName() + " age is " + mgaPerson.getAge());
                // out.println(mgaPerson.getClass());
            }
            // out.println(displayYoungerPersoninTheList(listofPerson)); // Expected Output
            // Jobert age 18
            for (Map.Entry<Integer, String> entry : displayYoungerPersoninTheList(listofPerson).entrySet()) {
                System.out.println("The youngest in the List of Person is " + entry.getValue() + " and he is "
                        + entry.getKey() + " years old.");
            }

            for (int x = 0; x < listofPerson.size() - 1; x++) {
                if (x == 0) {
                    System.out.println("\nResult finding List of " + getGender.m + ":");
                }
                out.println(x + 1 + ". " + displayNameofWhoareMale(listofPerson).get(x));
            }

        } catch (UnsupportedOperationException e) {
            out.println("Unsupported operation: " + e.getMessage());
        } catch (Exception e) {
            out.println("Other error: " + e.getMessage());
        }
    }

    // HashMap function that can find the youngest person in the List of Person's Object
    public static HashMap<Integer, String> displayYoungerPersoninTheList (List<Person> myPersons) {
        List<Person> getAgeofPersonlessthan20 = new ArrayList<>(); // current Elements: 0  => add all those person younger here less than 20
        for (Person personAge: myPersons) {
            if (personAge.getAge() < 20){
                getAgeofPersonlessthan20.add(personAge); // get the person age that less than 20
            }
        }

        HashMap<Integer, String> result = new HashMap<>(); // put in result the key Index Integer, and object value 

        for (Person thePersonSearched: getAgeofPersonlessthan20){
            result.put(thePersonSearched.getAge(), thePersonSearched.getName());
        }

        List<Person> resultName = new ArrayList<>();
        System.out.println(resultName);

        for (Person personResult: getAgeofPersonlessthan20){
            resultName.add(personResult);
        }

        for (Person personResult: getAgeofPersonlessthan20){
            resultName.add(personResult);
        }
        return result;
    }

    // List function that can find the youngest person in the List of Person's Object
    public static List<String> displayNameofWhoareMale(List<Person> myP){
        List<Person> searchedPers = new ArrayList<>(); // Find the target gold (Person Object)
        for (Person personFind: myP){
            if (personFind.getGender().equalsIgnoreCase(getGender.m)){ // Check if who is the female in the List
                searchedPers.add(personFind); // Add to a new List<Person> indicating that we find.
            }
        }

        List<String> result = new ArrayList<>(); // Return the List<String> out of this method
        for (Person res: searchedPers){
            result.add(res.getName());
        }
        return result;
    };
}
