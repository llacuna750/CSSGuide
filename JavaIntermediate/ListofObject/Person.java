package JavaIntermediate.ListofObject;

public class Person {
    private String name;
    private int age;
    private String gender;

    public Person(String ngalan, int edad, String gender) {
        this.name = ngalan;
        this.age = edad;
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // @Override
    // public String toString() {
    //     return "Person [name=" + name + ", age=" + age + ", toString()=" + super.toString() + "]";
    // }

    // ✅ Override toString()
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }

}
