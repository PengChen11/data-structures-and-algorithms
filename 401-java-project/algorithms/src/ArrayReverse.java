import java.lang.Math;

public class ArrayReverse {

    public static int[] reverseArray (int[] arr){

        int endIndex = arr.length - 1;
        int midIndex = (int) arr.length / 2;

        for (int i=0; i < midIndex; i++){
            int temp = arr[i];
            arr[i] = arr [endIndex-i];
            arr[endIndex-i] = temp;
        }

        return arr;
    }
}