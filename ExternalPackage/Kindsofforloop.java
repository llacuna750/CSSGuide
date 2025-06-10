package ExternalPackage;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Kindsofforloop {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		
		// create nested loop
		
		int rows = row("\nEnter how many row: ", sc);
		// System.out.println("Enter your rows: ");
		// int rows = sc.nextInt();

		
		System.out.print("Enter your columns: ");
		int columns = sc.nextInt();
		
		System.out.print("Enter your symbol: ");
		String symbol = sc.next();
		
		for (int i=1; i<=rows; i++) {

			// int number = 1;
			System.out.println();
			for (int j=1; j<=columns; j++) {
				System.out.print(" "+symbol);
			}
		}System.out.println("\n");
		
		String[] names = new String[3];
		names[0] = "paul";
		names[1] = "gabriel";
		names[2] = "Jordan";
		
		System.out.println("List names: \n");
		for (int i=0; i<names.length; i++) {
			System.out.println(i+1+". "+names[i]);
		}

		sc.close();
    }

	public static int row (String prompt, Scanner scanner) {
		while (true) {
			try {
				System.out.print(prompt);
				int myrows = scanner.nextInt();
				return myrows;
				
			}catch (InputMismatchException e) {
				System.out.println("Enter numbers only");
				scanner.next();
			}
		}
	}
}
