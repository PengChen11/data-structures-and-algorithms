import java.lang.Math;

public class ArrayReverse {

  public static void main (String[] args){
    System.out.println("things in reversed first array");
    test1();
    System.out.println("things in reversed second array");
    test2();
  }

  public static int[] reverseArray (int[] arr){

    int endIndex = arr.length - 1;
    int midIndex = (int) Math.floor( arr.length / 2);

    for (int i=0; i < midIndex; i++){
      int temp = arr[i];
      arr[i] = arr [endIndex-i];
      arr[endIndex-i] = temp;
    }

    return arr;
  }

  public static void test1 () {
    int[] test = {1,2,3,4,5,6};
    int[] result = reverseArray(test);
    for ( int el : result ) {
      System.out.println(el);
    }
  }

  public static void test2 () {
    int[] test = {89, 2354, 3546, 23, 10, -923, 823, -12};
    int[] result = reverseArray(test);
    for ( int el : result ) {
      System.out.println(el);
    }
  }
}