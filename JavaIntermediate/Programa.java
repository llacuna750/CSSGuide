package JavaIntermediate;

class Programa {
    public static void main(String[] args) {
        Machine m = new Machine() {
            @Override public void start() {
                System.out.println("Wooooo");
            }
        };
        m.start();
    }    
}
