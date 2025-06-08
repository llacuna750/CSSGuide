package ExternalPackage;

// public
class depoltclass {
    private static String accesslogin = "Available for you";

    // Getters
    public static String getAccessLogin() {
        return accesslogin;
    }

    // Setters
    public static void setAccessLogin(String x) {
        accesslogin = x; // The assignment to variable accesslogin has no effect
        // accesslogin = x; // Valid  and you want to re-value the accesslogin
        // this.accesslogin = accesslogin; // best practice to use this keyword.
    }
}
