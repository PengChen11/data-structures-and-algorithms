import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

public class ArrayReverseTest {

    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void reverseArray() {
        int[] test = {1,2,3,4,5,6,7,8};
        System.out.println("\nreverseArray should reverse a given int array " + Arrays.toString(test));
        int[] actual = ArrayReverse.reverseArray(test);
        int[] expected = {8,7,6,5,4,3,2,1};
        assertArrayEquals("reverseArray should reverse a given int array " + Arrays.toString(test), expected,
                actual);
        System.out.println("reverseArray reversed the given int array to " + Arrays.toString(actual));
    }

    @Test
    public void testReverseArray2(){
        int[] test = {18,89, 2354, 3546, 23, 10, -923, 823, -12};
        System.out.println("\nreverseArray should reverse a given int array " + Arrays.toString(test));
        int[] actual = ArrayReverse.reverseArray(test);
        int[] expected = {-12,823,-923,10,23,3546,2354,89,18};
        assertArrayEquals("reverseArray should reverse a given int array" + Arrays.toString(test), expected,
                actual);
        System.out.println("reverseArray reversed the given int array to " + Arrays.toString(actual));
    }

    @Test
    public void testReverseArray3(){
        int[] test = {1};
        System.out.println("\nreverseArray should reverse a given int array " + Arrays.toString(test));
        int[] actual = ArrayReverse.reverseArray(test);
        int[] expected = {1};
        assertArrayEquals("reverseArray should reverse a given int array" + Arrays.toString(test), expected,
                actual);
        System.out.println("reverseArray reversed the given int array to " + Arrays.toString(actual));
    }

    @Test
    public void testReverseArray4(){
        int[] test = {};
        System.out.println("\nreverseArray should reverse a given int array " + Arrays.toString(test));
        int[] actual = ArrayReverse.reverseArray(test);
        int[] expected = {};
        assertArrayEquals("reverseArray should reverse a given int array" + Arrays.toString(test), expected,
                actual);
        System.out.println("reverseArray reversed the given int array to " + Arrays.toString(actual));
    }
}