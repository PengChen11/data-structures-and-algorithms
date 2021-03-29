package challenges;

import java.util.ArrayList;

public class BinarySearch {
    public static int binarySearch (ArrayList arr, int val){
        //the array is sorted, so if the key is bigger than the last element or smaller than the 1st one, then don't even do the search;
        if (val < (int) arr.get(1) || val > (int) arr.get(arr.size()-1)) return -1;
        // is given array is empty, return -1
        if (arr.size()==0) return -1;


        int startIndex = 0;
        int endIndex = (int) arr.size()-1;

        while (startIndex <= endIndex){
            int midIndex = (startIndex + endIndex) /2; // equals to math.floor
            if ((int) arr.get(midIndex) == val) return midIndex;
            else {
                if (val < (int)arr.get(midIndex)){
                    endIndex = midIndex -1;
                } else {
                    startIndex = midIndex +1;
                }
            }
        }

        return -1;
    }
}
