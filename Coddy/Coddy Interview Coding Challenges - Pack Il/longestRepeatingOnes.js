/*  Longest Repeating Ones

Challenge  (Easy):

You are given a signal as a string of zeros and ones, 
return the length of the longest sequence of ones. 

Example,

Input:

0110111001011110000000011

Expected output:

4

*/

function getLongestRepeatingOnes(s) {
    // Write code here

    const splitStr = s.split('')
    const numberArray = splitStr.map(Number);
    let highestCount = 0
    let lastHighest = 0

    console.log(numberArray)
    // console.log(typeof s)

    for (const n of numberArray) {
        if (n == 0) {
            highestCount = 0
        } else {
            highestCount++
            lastHighest = Math.max(lastHighest, highestCount)
        }
        // console.log('highestCount',highestCount)
        // console.log('lastHighest',lastHighest)

    }

    return lastHighest
}

console.log(getLongestRepeatingOnes('0110111001011110000000011'))