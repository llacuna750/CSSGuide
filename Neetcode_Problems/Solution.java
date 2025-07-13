package Neetcode_Problems;
import static java.lang.System.out;

import java.util.HashSet;

public class Solution {
    public static void main(String[] args) {
    /* 
    217   Contains Duplicate
        Given an integer array nums,return true if any value appears more than once in the array,
        otherwise return false.
        -------------------------------------
        |        Example 1:                 |
        |                                   |
        |        Input:nums=[1,2,3,3]       |
        |                                   |
        |        Output:true                |
        |------------------------------------
        |        Example 2:                 |
        |                                   |
        |        Input:nums=[1,2,3,4]       |
        |                                   |
        |        Output:false               |
        -------------------------------------
    */
        Solution t = new Solution();
        // int[] nums = {1, 2, 3, 4}; // Input
        
        // out.println(t.hasDuplicate(nums));

    /*
    219. Contains Duplicate II
        Given an integer array nums and an integer k,
        return true if there are two distinct indices i and j in the array 
        such that nums[i] == nums[j] and abs(i - j) <= k.

    -------------------------------------
    |        Example 1:                 |
    |                                   |
    |  Input: nums = [1,2,3,1], k = 3   |
    |                                   |
    |        Output:true                |
    |------------------------------------
    |        Example 2:                 |
    |                                   |
    |  Input: nums = [1,0,1,1], k = 1   |
    |                                   |
    |        Output: true               |
    |------------------------------------|
    |        Example 3:                  |
    |                                    |
    |Input: nums = [1,2,3,1,2,3], k = 2  |
    |                                    |
    |        Output: false               |
    --------------------------------------
    */
        int[] dnums = { 10, 2, 3, 2, 7, 6, 10}; 
        int k = 2;
        
        boolean myAnswer = t.containsNearbyDuplicate(dnums, k);
        System.out.println("myAnswer: "+ myAnswer);
    }

    public boolean containsNearbyDuplicate(int[] nums, int k) {
        boolean dupli2 = false;
        try {
            
            for (int j = nums.length - 1; j > 0; ) {
                for (int i = nums.length - 1; i >= 0;  i-=1) { 
                    if (i < nums.length - 1) { 
                        if (nums[i] == nums[j]) {
                            System.out.printf(
                                    "\n----------------------------------------------------------------\nFound Duplicate Nearby:%ni: %d %-8s nums[i]: %d %-15s j: %d      nums[j]: %d%n%n",
                                    i, "", nums[i], "", j, nums[j]);
                            int getRes = Math.abs(i - j);
                            System.out.println("getRes: " + getRes+ "       <=       K: "+k+"    Boolean answer: "+(getRes <= k)+"\n----------------------------------------------------------------");
                            j = 0;
                            return dupli2 = getRes <= k;
                        } else {
                            System.out.println("I: " + i + "          nums[i] = " + nums[i] + "                J: " + j
                                    + "     nums[j] = " + nums[j]);
                        }
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("Error an occur: "+e.getMessage());
        }
        return dupli2;
    }
    
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> hashset = new HashSet<>();
        boolean dupli = false;
        try {
            for (int d = 0; d < nums.length; d += 1) {
                if (!hashset.contains(nums[d])) {
                    hashset.add(nums[d]);
                } else {
                    dupli = hashset.contains(nums[d]); // The duplicate one
                    out.println("The duplicate:" + nums[d]);
                }
            }
        } catch (Exception e) {
            out.println("Error an occur:" + e.getMessage());
        }
        out.println("Output only the not duplicated Numbers: " + hashset);
        return dupli;
    }
}
