package challenges;
import org.junit.Test;
import java.lang.reflect.Array;
import java.util.ArrayList;
import static org.junit.Assert.*;

public class BinarySearchTest {
    @Test public void testBinarySearch1() {
        int[] testArr = {11,22,33,44,55,66,77};
        int expected = -1;
        int actual = BinarySearch.binarySearch(listGenerator(testArr), 90);
        assertEquals("Should return -1 when the given value is out of range", expected, actual);
    }

    @Test public void testBinarySearch2() {
        int[] testArr = {4,8,15,16,23,42};
        int expected = 2;
        int actual = BinarySearch.binarySearch(listGenerator(testArr), 15);
        assertEquals("Should be able to find the correct index", expected, actual);
    }

    @Test public void testBinarySearch3() {
        int[] testArr = {1, 2, 3, 5, 6, 7};
        int expected = -1;
        int actual = BinarySearch.binarySearch(listGenerator(testArr), 4);
        assertEquals("Should return -1 when the given value can not be found", expected, actual);
    }

    @Test public void testBinarySearch4() {
        int[] testArr = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14};
        int expected = 7;
        int actual = BinarySearch.binarySearch(listGenerator(testArr), 7);
        assertEquals("Should return -1 when the given value can not be found", expected, actual);
    }


    private ArrayList listGenerator (int[] arr){
        ArrayList<Integer> result = new ArrayList<>();
        for (int val : arr){
            result.add(val);
        }
        return result;
    }
}
