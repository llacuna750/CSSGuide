public class studentInfo {
    private String Name;
    private int age;
    private double money;
    private int Birth_year;
    private int ID_number;

    private double Bank_money;

    // Setters
    public studentInfo (String Name, int edad, double kwarta, int Birth_year, int ID_number, double Bank_money) {

        this.Bank_money = Bank_money;
        this.Name = Name;
        this.age = edad;
        this.money = kwarta;
        this.Birth_year = Birth_year;
        this.ID_number = ID_number;
    }
    
    public String GetName () {
        return Name;
    }
    // Getters
    public double Getbank_Money () {
        return Bank_money;
    }
}
    