package Java_IP_Converter_Code;

import java.util.Scanner;

public class IPConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter IPv4 address: ");
        String ip = scanner.nextLine();
        scanner.close();

        String[] parts = ip.split("\\.");
        if (parts.length != 4) {
            System.out.println("Invalid IPv4 address.");
            return;
        }

        try {
            int[] octets = new int[4];
            for (int i = 0; i < 4; i++) {
                octets[i] = Integer.parseInt(parts[i]);
                if (octets[i] < 0 || octets[i] > 255)
                    throw new NumberFormatException();
            }

            // Decimal (32-bit)
            long decimal = (long) (octets[0] << 24 | octets[1] << 16 | octets[2] << 8 | octets[3]) & 0xFFFFFFFFL;

            // Binary
            String binary = String.format("%8s.%8s.%8s.%8s",
                    Integer.toBinaryString(octets[0]),
                    Integer.toBinaryString(octets[1]),
                    Integer.toBinaryString(octets[2]),
                    Integer.toBinaryString(octets[3])).replace(" ", "0");

            // Hexadecimal
            String hexDotted = String.format("%02X.%02X.%02X.%02X", octets[0], octets[1], octets[2], octets[3]);
            String hexFull = String.format("0x%02X%02X%02X%02X", octets[0], octets[1], octets[2], octets[3]);

            // Reverse DNS
            String reverseDNS = octets[3] + "." + octets[2] + "." + octets[1] + "." + octets[0] + ".in-addr.arpa";

            // Output
            System.out.println("\nIP Address: " + ip);
            System.out.println("Decimal: " + decimal);
            System.out.println("Binary: " + binary);
            System.out.println("Hex (dotted): " + hexDotted);
            System.out.println("Hex (full): " + hexFull);
            System.out.println("Reverse DNS: " + reverseDNS);

        } catch (NumberFormatException e) {
            System.out.println("Invalid IP address format.");
        }
    }
}
