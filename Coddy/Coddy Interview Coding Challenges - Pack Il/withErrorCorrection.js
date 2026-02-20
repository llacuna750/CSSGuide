/*  With Error Correction

Challenge  (Medium):
You are given a signal as a string of zeros and ones.

Due to some electromagnetic noise, sometimes (although rarely) you are getting 0 instead of 1.

Assuming that each signal of 1's may have at most one error bit (meaning 0 instead of 1), 
return the length of the longest sequence that could possibly be sent to you with one error only.

Example 1,

Input:

111100111011101110

Expected output:

7

Because the 0 between two sequences of length 3 could be an error, connecting the two to a sequence of length 7.
 

Example 2:

Input:

0011110010110

Expected output:

5

Because one of the 0's adjacent to the sequence of length 4 could be an error, making it a sequence of length 5.

*/
function getLongestRepeatingOnes(s) {
    // Write code here
}

console.log(getLongestRepeatingOnes('111100111011101110'))