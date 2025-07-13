package JavaIntermediate.Leetcode_practice;
import java.util.LinkedList;

public class TwoSum {

    public int[] twoSum(int[] nums, int target) {
        LinkedList<Integer>  ll = new LinkedList<>();

        boolean valid = false;
        int i = 0;
        int initialTarget = nums.length - 1;

        while (!valid) {
            if (nums[i] + nums[initialTarget] == target) {
                ll.add(i);
                ll.add(initialTarget);
                valid = true;
                System.out.println("Found: " + ll);
                return new int[] { i, initialTarget };
            } else {
                initialTarget--;
                if (initialTarget == i) {
                    i++;
                    initialTarget = nums.length - 1;
                }
            }
        }
        System.out.println("Found: " + ll);
        
        return new int[] {};
    }   

    public static void main(String[] args) {
        TwoSum ts = new TwoSum();

        int[] nums = { 3, 4, 5, 6, 5, 11 }; // Expected Output: [0,1]  because 2 + 7 = 9
        int target = 15;

        int[] result = ts.twoSum(nums, target);
        System.out.println("Indices: " + result[0] + ", " + result[1]);
    }
}
