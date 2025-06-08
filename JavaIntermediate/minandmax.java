package JavaIntermediate;

public class minandmax {
    // public 
    static int min(int a, int b) {
        if (a > b) {
            return b;
        }
        return a;
    }

    // public 
    static int max (int a, int b) {
        if (a > b) {
            return a; // if a greater than b
        }
        return b; // if the a less than b 
    }
}
