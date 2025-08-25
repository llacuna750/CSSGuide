package javap_2025_1st.sem_3rd.year;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class TestGreeting {
    @Test
    public void testGreeting() {
        App ap = new App();
        assertEquals("Hello World!", ap.getGreeting());
    }
}
