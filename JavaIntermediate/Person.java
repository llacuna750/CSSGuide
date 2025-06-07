package JavaIntermediate;

class Person {
    private String name;
    private int age;

    // Constructors
    Person (String n) {
        this.name = n; // private String name is setted
    }

    // Getters
    public String getName () {
        return name;
    }
    // Getters
    public int getAge() {
        return age;
    }
    // Setters
    public void setAge(int a) {
        this.age = a;
    }
}
