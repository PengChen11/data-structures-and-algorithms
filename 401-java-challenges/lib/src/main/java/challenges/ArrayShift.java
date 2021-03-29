package challenges;

import java.util.ArrayList;

public class ArrayShift {
    public static ArrayList insertShiftArray(ArrayList arr, int val) {
        int midIndex;
        if (arr.size() % 2 == 0) midIndex = arr.size() / 2;
        else midIndex = (arr.size()+1) / 2;
        // adding val to after the mid val
        int tempVal;
        tempVal= (int) arr.get(midIndex);
        arr.set(midIndex, val);
        // shift the rest of val in array, the original tail value will be pushed outside
        for (int i = midIndex+1; i< arr.size(); i++) {
            int innerTemp;
            innerTemp = (int) arr.get(i);
            arr.set(i, tempVal);
            tempVal = innerTemp;
        }

        // add back the original tail value
        arr.add(tempVal);

        return arr;
    }
}
