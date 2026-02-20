/*  Almost Palindrome

A palindrome is a string that reads the same backward or forward.

For example:

"racecar", "mom", "madam" are all palindromes, while "father" isn't.


An almost palindrome is a string that is either a palindrome, or can be turned into a palindrome by changing at most 1 character in it.


For example:

"racecar", "mom", "madam" are all almost palindromes because they are also palindromes.

"racebar" is also an almost palindrome, because it can turn into a palindrome by changing the 'b' character to a 'c' character (or the opposite, changing the 'c' to 'b').

"abcdcab" is not almost a palindrome, because in order to turn into a palindrome, it needs changing in at least 2 characters.


Challenge  (Medium):
Write a function named isAlmostPalindrome that gets a string as an input, returns true if the string is almost a palindrome, and returns false elsewise.

*/


function isAlmostPalindrome(s) {
    // Write code here

    const word = s.split('')
    let reverseString = s.split('').reverse().join('')
    let charChange = 0
    
    // console.log(word)
    // console.log(reverseString)
    
    for (let i = 0; i < word.length; i++) {
    
        if (word[i] !== reverseString[i]) {
            word[i] = reverseString[i]
            charChange++
        }
        
        // console.log(s[i], " opposite ", reverseString[i],  `   =   `, s[i] === reverseString[i])
    }
    
    // console.log('New Arr:',word)
    // console.log('IsAlmostPali? ',reverseString === word.join('') && charChange === 2)
    // console.log('Character Change att:', charChange)
    return reverseString === word.join('') && charChange <= 2
    
}

console.log(isAlmostPalindrome('racecar'))

