let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 5];
/* 
    Challenge: 
    find the Duplicate
    bring the Expected Output: 2, 5 
*/


for (let i=0; i < arr.length; i++) {
    // console.log(arr[i]);
    console.log();

    for (let x=0; x < arr.length; x++) {

        if (i !== x      &&         x > i - 1        &&     arr[i] === arr[x]) {
            console.log(`i = ${i} Value: ${arr[i]},           j = ${x} Value: ${arr[x]}`);
        }
    }
}


/*
    Challenge:
    reverse the variable value h
*/
const h = `Hello World!`;

// With Built-in method
const splitH = h.split("");
const reverse = splitH.reverse();
console.log(`With Built-in method:`,reverse.join(""));


// WithOut Built-in method
let reverseHere = [];

const n = h.length - 1;
for (let i=n; i >= 0; i--) {
    reverseHere.push(h[i]);
} 
console.log(`With-Out using .split`, reverse);
console.log(`WithOut Built-in method:`, reverseHere.join(''));
