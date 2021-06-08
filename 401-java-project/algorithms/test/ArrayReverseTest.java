import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

public class ArrayReverseTest {

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

    @Test
    public void testReverseArray5(){
        int[] test = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199};
        System.out.println("\nreverseArray should reverse a given int array " + Arrays.toString(test));
        int[] actual = ArrayReverse.reverseArray(test);
        int[] expected = {199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2};
        assertArrayEquals("reverseArray should reverse a given int array" + Arrays.toString(test), expected,
                actual);
        System.out.println("reverseArray reversed the given int array to " + Arrays.toString(actual));
    }
}