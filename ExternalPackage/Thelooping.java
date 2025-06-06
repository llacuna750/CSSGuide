package ExternalPackage;
import java.util.Scanner;

public class Thelooping {
    public static String returnString (String str) {
        for(int i=0; i<=str.length(); i++) {
            System.out.println("How many you times enter space: ");
        }
        return str;
    }

    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);
		boolean cons = true;

    						//while loop
    	while (cons) {
            // Object obj = "Hello";
            // System.out.println(obj.getClass().getSimpleName());  // Output: String

    		System.out.print("\nEnter your name: ");
    		String name = scanner.nextLine();

    		if (name.matches("[a-z A-Z]+")) {
    			System.out.println("Hey! "+ name);
    			break;
    		}else if (name.isBlank()) {
    			System.out.println("\nDon't leave it blank!");
    		}
    		// else if (name.equalsIgnoreCase(returnString(name))) {
            //     System.out.println("Name: ");
            // }
    		else {
    			System.out.println("\nEnter a legit name!");
    			// System.out.println("\n\nThank You for trying our System! ");
    		}
			scanner.close();
    	}
    				//Do - while
//    	do {
//    		System.out.println("\nEnter your name: ");
//    		String name = scanner.nextLine();
//    		
//    		if (name.isBlank()) {
//    			System.out.println("Dont leave it blank!");
//    		}else if (name.matches("[a-z A-Z]+")) {
//    			System.out.println("\nHey "+name+" Keep coding!");
//    			break;
//    		}else {
//    			System.out.println("\nEnter a legit name!");
//    		}
//    	}while (true);
    	
    	// for loop
//    	for (int i=0; i<=10; i++) {
//    		System.out.println("\nIteration "+i);
//    	}
//    	
//    	System.out.print("\n\nResult: ");
//    	for (int i=10; i>=0; i-=2) {
//    		System.out.print(i+" ");
//    	}
//    		System.out.println("\nHappy new year!  ");
    	
    						//nested loop
//    	System.out.println("Enter your rows:");
//    	int rows = scanner.nextInt();
//    	
//    	System.out.println("Enter your columns:");
//    	int columns = scanner.nextInt();
//    	
//    	System.out.println("Enter your symbol:");
//    	String symbol = scanner.next();
//    	
//    	for (int x=1; x<=rows; x++ ) {
//    		System.out.println();
//    		for (int z=1; z<=columns; z++ ) {
//    			System.out.print(" "+ symbol);
//    		}
//    	}
    				//  Arrays
//    	String[] names = {"Jesus", "Michael", "Gabriel", "Judiel"};
////    	String[] names = new String[3];  
////    	names[0] = "Jesus";
////    	names[1] = "Michael";
////    	names[2] = "Gabriel";
//    	
//    	for (int i=0; i<names.length; i++) {
//    		System.out.println(names[i]+"\t"+names[i].length());
//    	}
//    	System.out.println(names.length);
//    					 for - each
//    	for (String name: names) {
//    		System.out.println(name);
//    	}System.out.println(names.length);
    	
    			// 2 Dimensional Array = an Array of a arrays
//    	String[][] namez = {
//			    			{"Gabriel", "God", "Jah"}, 
//				    		{"Puti", "Gamay", "Jah"}, 
//				    		{"Bill", "Moses", "Prophet"}
//						   };
//    	String[][] namez = new String[3][3]; 
//    	namez[0][0] = "Gabriel";
//    	namez[0][1] = "God";
//    	namez[0][2] = "Jah";
//    	namez[1][0] = "Puti";
//    	namez[1][1] = "Gamay";
//    	namez[1][2] = "Jah";
//    	namez[2][0] = "Bill";
//    	namez[2][1] = "Moses";
//    	namez[2][2] = "Prophet";
//    	
//    	for (int i=0; i<namez.length; i++) {
//    		System.out.println(); 
//    			System.out.print(namez[i][j]+"    ");
//    		}
//    	}
//    	int[][] numbers = new int[3][3];
//    	numbers[0][0] = 10;     numbers[0][1] = 40;      numbers[0][2] = 70;
//    	numbers[1][0] = 20;     numbers[1][1] = 50;      numbers[1][2] = 80;
//    	numbers[2][0] = 30;     numbers[2][1] cars[1][2] = "airplane";= 60;      numbers[2][2] = 90;
//    	
//    	for (int i=0; i<numbers.length; i++) {
//    		System.out.println();
//    		for (int j=0; j<numbers[i].length; j++) {
//    			System.out.print(numbers[i][j]+" ");
//    		}
//    	}
//    	 					 2D Array
//        String[][] namez = new String[3][3]; 
//        String[][] namez = {    {"dab", "gab", "ict"}, 
//				        		{"techno", "hacker", "developer"}, 
//				        		{"Absent", "OOP", "Java"} };
//        namez[0][0]	= "dab";
//        namez[0][1] = "gab";
//        namez[0][2] = "ict";
//        	
//        namez[1][0] = "techno";
//        namez[1][1] = "hacker"; 
//        namez[1][2] = "developer";
//        
//        namez[2][0] = "Absent";
//        namez[2][1] = "OOP";
//        namez[2][2] = "Java";
        
//        int count = 1;
//        for (int i=0; i<namez.length; i++ ) {
//        	System.out.println();
//        	for (int j=0; j<namez[i].length; j++ ) {
//        		System.out.printf("%d. %-20s",count, namez[i][j]);
//        		count++;
//        	}
//        }
//    			 2D Array
//    	String[][] cars = new String[2][3];
//    	cars[0][0] = "Taxi";
//    	cars[0][1] = "Big taxi";
//    	cars[0][2] = "Tank";
//
//    	cars[1][0] = "Emergency";
//    	cars[1][1] = "airplane";
//    	cars[1][2] = "jet";
//
//    	int count = 1;
//    	for (int i = 0; i < cars.length; i++) {
//    	    for (int x = 0; x < cars[i].length; x++) {
//    	        System.out.printf("%d. %-15s", count, cars[i][x]);
//    	        count++;
//    	    }
//    	    System.out.println();
//    	}
    	
//    	String[] Students = {"Gabriel", "Jude",  "BRAD"};
    	
//    	System.out.println(Students[0].trim());
//    	System.out.println(Students[0].equalsIgnoreCase("gabriel"));
//    	System.out.println(Students[1].charAt(2)); // Output d
//    	System.out.println(Students[1].indent(1));
//    	System.out.println(Students[1].indexOf("e")); // Output 3
//    	System.out.println(Students[2].toLowerCase());
//    	System.out.println(Students[2].repeat(5));
//    	System.out.println(Students[0].replace("e", "y")); // Output Gabriyl
//    	boolean valid = false;
//    	while (!valid) {
//    		for (int g=0; g<Students.length; g++) {
//        		System.out.println(g+1 +". "+Students[g]);
//        	}
//    		System.out.print("\nEnter the target name between 1 - 3: ");
//        	int target_name = scanner.nextInt();
//        	
//        	for (int g=0; g<Students.length; g++) {
//        		
//        		if (target_name >= 1 && target_name <= 3) {
//        			System.out.println(g+1 +". "+Students[target_name - 1]);
//        			valid = true;
//        			break;
//        		}else {
//        			g = g + 3; // g+=1 or g++ short hand
////        			g = g + 2; // g+= 2 short hand
//        			System.out.println("\nEnter 1 to 3 only.\n");
//        		}
//        	}
//    	}
    	/*
    	 g = 0
    	 g+=2
	 				1x true
    	 g = 0 + 2 = 2 < 3; true    
    	 g = 2 + 2 = 4 < 3; false 
    	 
    	 g = 0;
    	 g++ or g+=1
    	 			2x true
    	 g = 0 + 1 = 1 < 3; true    
    	 g = 1 + 1 = 2 < 3; true 
    	 g = 2 + 1 = 3 < 3; false
    	 
    	 g=0 + 3 = 3 < 3; false
    	 
    	 */
    }
}