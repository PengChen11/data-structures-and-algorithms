package challenges;
import org.junit.Test;
import java.lang.reflect.Array;
import java.util.ArrayList;
import static org.junit.Assert.*;

public class ArrayShiftTest {
    @Test public void testArrayShift1() {
        int[] testArr = {2,4,6,8};
        int[] expectedArr = {2,4,5,6,8};
        ArrayList expected = listGenerator(expectedArr);
        ArrayList actual = ArrayShift.insertShiftArray(listGenerator(testArr), 5);
        assertEquals("two arrives should be the same", expected, actual);
    }

    @Test public void testArrayShift2() {
        int[] testArr = {4,8,15,23,42};
        int[] expectedArr = {4,8,15,16,23,42};
        ArrayList expected = listGenerator(expectedArr);
        ArrayList actual = ArrayShift.insertShiftArray(listGenerator(testArr), 16);
        assertEquals("two arrives should be the same", expected, actual);
    }

    private ArrayList listGenerator (int[] arr){
        ArrayList<Integer> result = new ArrayList<>();
        for (int val : arr){
            result.add(val);
        }
        return result;
    }
}
