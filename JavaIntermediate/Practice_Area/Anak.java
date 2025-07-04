public class Anak extends Ginikanan {
    Anak () {
    }

    @Override
    public String toString() {
        return "Anak []";
    }

    void displayA (){
        System.out.println("Accessed: "+ a);
    }

    void displayB() {
        System.out.println("Accessed: "+ b);
    }
}

