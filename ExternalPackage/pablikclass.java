package ExternalPackage;

public class pablikclass {
    // private String accesslogin = "Available to login.";

    public static void main(String[] args) {
        // pablikclass pclass = new pablikclass();
        // System.out.println("Congratulations! "+pclass.accesslogin);

        // We have a value data-types to access but its private and we use Static to it and Static getters method
        // System.out.println(depoltclass.accesslogin); // The field depoltclass.accesslogin is not visible set it to static

        depoltclass.setAccessLogin("Gwapo si gabriel");
        System.out.println("\nStatus: "+depoltclass.getAccessLogin());
    }
}
