package Library_Book_Management_System;

class Outside {
    int outsideAge;

    class Inside {
        int insideAge;
    }
}

class InnerStellar {
    public static void main(String[] args) {
        Outside o = new Outside();
        Outside.Inside i = o.new Inside();

        o.outsideAge = 50;
        i.insideAge = 20;
        System.out.println("Outside age: "+o.outsideAge);
        System.out.println("Inside Age: "+i.insideAge);
    }
}




