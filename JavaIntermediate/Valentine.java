package JavaIntermediate;

public class Valentine extends Card { 
    private String name;
    private int date;
    Valentine (String n, int a) {
        name = n;
        date = a;
    }

    public void sendCard() {
        System.out.println("Valentine message card to "+name);
        System.out.println("The date is "+date);
    }
}
