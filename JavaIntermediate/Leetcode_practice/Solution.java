package JavaIntermediate.Leetcode_practice;

import java.util.ArrayList;
import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        // String programmerName = "Gabvs";
        // System.out.println(programmerName);
        
        int[] num = { 2, 7, 11, 15}; // Output: [0,1] /
        // int[] num = { 3, 2, 4};         // Output: [1,2] 
        // int[] num = { 3, 3};         // Output: [0,1] /
        // int[] num = { 3, 4, 6, 7, 5};         // Output: [1,2] /
        int target = 9;

        Solution t = new Solution();
        int[] res = t.twoSum(num,target);
        System.out.println("\nOutput: "+Arrays.toString(res));
        
        // int[] arr = { 3, 8, 20, 5};
        // System.out.println("\nExample of Array items inside a square bracket: "+Arrays.toString(arr));
    }

    public int[] twoSum(int[] nums, int target) {
        System.out.println("\nFind the target = "+ target+"\nInside of this items of array: "+ Arrays.toString(nums));
        
        ArrayList<Integer> temp = new ArrayList<> ();

        System.out.println("nums length: "+nums.length);         
        // 0 < 3 = true
        // 1 < 3 = true
        // 2 < 3 = true
        // 3 < 3 = true

        // nums = [2,7,11,15]
        int find = nums.length - 1; // 4 - 1 = 3
        // 0 == 3 = false
        // 0 == 2 = false
        // 0 == 1 = true
        // 0 == 0 = false        
        int start = 0;  
        int secondStart = find - 1;  // 2

        // System.out.println("second H: "+secondStart);
        System.out.println("\nfind = "+find+";");
        String spaces = "/".repeat(50);
        String myspaces = " ".repeat(50);
        String spacesx = "*".repeat(50);

        for (int i=0; i <= nums.length-1; i++) {
            int sum = nums[start] + nums[find];
            int secondCheck = nums[secondStart] + nums[find];

            if (secondCheck == target && find > 1) {
                System.out.println("latest find = " + find);
                System.out.println("\n" + spaces);
                System.out.println("\nSUCCESS!");
                System.out.println("\nSame value, " + nums[secondStart] + " + " + nums[find] + " = " + secondCheck
                        + " == " + target);

                temp.add(find - 1);
                temp.add(find);
                System.out.println("\nFinal value of find: " + find + "\n");
                System.out.println(myspaces + "secondStart: " + secondStart + "\n");
                find -= 1;
                System.out.print(spaces + "\n");
                if (secondStart > 1) {
                    secondStart = secondStart - 1;
                }
            }

            else if (((nums[start] + nums[find]) == target && find > 0 )) {
                
                System.out.println("\n" + spaces);
                System.out.println("\nSUCCESS!");
                System.out
                        .println("\nBecause, " + nums[start] + " + " + nums[find] + " = " + sum + " == " + target);

                temp.add(find - 1);
                temp.add(find);
                System.out.println("\nFinal value of find: " + find + "\n");
                System.out.println("\nArrayList: " + temp);
                System.out.println(myspaces+"secondStart: " + secondStart);
                find -= 1;
                System.out.println("\n" + spaces);
                
                
                if (secondStart > 1) {
                    secondStart -= 1;
                }
                
            } 

            else if (nums[start] + nums[find] == target && (find == 0)) {
                
                System.out.println("\n" + spaces);
                System.out.println("\nSUCCESS!");
                System.out.println("\nBecause, " + nums[start] + " + " + nums[find] + " = " + sum + " == " + target);
                System.out.println("\nTrue: value of find: " + find);
                find -= 1;
                System.out.println(myspaces+"secondStart: " + secondStart);
                System.out.print("\nArrayList: " + temp);
                if (secondStart > 1) {
                    secondStart -= 1;
                }
                System.out.println("\n" + spaces);
            }
            else {
                System.out.println("\n" + spacesx);
                System.out.println("\nNot match. Because, "+nums[start]+ " + "+nums[find]+" = "+ sum +" != "+target);
                System.out.println("\nNot match also here. Because, "+nums[secondStart]+ " + "+nums[find]+" = "+ secondCheck +" != "+target);
                System.out.println("\nFinal value of find: " + find + "\n");
                System.out.println(myspaces+"secondStart: "+secondStart);

                find -= 1;
                if (secondStart > 1) {
                    secondStart -= 1;
                }
                System.out.println("\n" + spacesx);
            }
        }
        // return new int[0];
        // Convert ArrayList<Integer> to int[]
        int[] result = new int[temp.size()];
        for (int i = 0; i < temp.size(); i++) {
            result[i] = temp.get(i);
        }
        return result;
    }
}
