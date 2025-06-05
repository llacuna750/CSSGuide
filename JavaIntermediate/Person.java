package JavaIntermediate;

class Person {
    private String name;
    private int age;

    Person (String n) {
        this.name = n;
    }

    public String getName () {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int a) {
        this.age = a;
    }
}
