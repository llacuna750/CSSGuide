/* Second Most Popular

Challenge  (Hard):
Write a function named secondMost that gets a list of integers as an input, and returns the second most recurring integer.
For example,

Input:

[98, 72, 93, 72, 83, 98, 72, 44, 25, 53, 43, 98, 81, 98]

Expected output:

72

Explanation - 72 is included 3 times in the list, right after 98, which is included 4 times. therefore 72 is the second most popular number. */

function secondMost1(a) {
    // Write code here

    const numbers = new Map();
    const setUnique = new Set(a); // Not Used

    for (const v of a) {
        if (numbers.has(v)) {
            numbers.get(v).count += 1;
        } else {
            numbers.set(v, { count: 1 });
        }
    }

    // numbers.forEach((val, key) => console.log(`Key: ${key}    countVal: ${val.count}`))

    const maxCount = Math.max(
        ...Array.from(numbers.values()).map(v => v.count)
    );
    // console.log('maxCount', maxCount)

    return Array.from(numbers).find(sm => [...sm].find((t) => t.count < maxCount)

    ).shift();

}

/* Coddy creator's solution 

*/
function secondMost(a) {
    // Write code here

    const freq = new Map();
    for (const num of a) {
        freq.set(num, (freq.get(num) || 0) + 1);

        /*
        I learned that there's no need to find the val key it auto set with the specific key
        using .set of Map() or adding/modifying map
        use code reference Above! just inline code for Adding/modifying specific key Map
        */
    }

    let mostFreq = 0, secondMostFreq = 0;
    for (const [key, value] of freq.entries()) {
        // console.log('Key:',key, 'Val',value)


        if (value > (freq.get(mostFreq) || 0)) {
            secondMostFreq = mostFreq;
            mostFreq = key;
        } else if (value > (freq.get(secondMostFreq) || 0)) {
            secondMostFreq = key;
        }
    }

    return secondMostFreq;

}


const inPut = [5, 5, 4, 3, 5, 4, 1]

console.log(
    secondMost(inPut)
);

// const v = [5, 6, 7, 8, 9].forEach(i => { return i === 5})

const studentIT = new Map()

console.log('\nBefore: not yet add\n',studentIT)  // Output: Map(0) {}

studentIT.set('Gab', 100)
studentIT.set('Jud', 100)
studentIT.set('Lea', 500)

console.log('\nAfter:\n', studentIT)  // Output: Map(3) {}


console.log('\nUsing forEach() =>')
studentIT.forEach((val, key) => console.log('Key:',key, 'Val:',val))  // or

console.log('\nUsing forLoop using .entries() =>')
for (const [key, val] of studentIT.entries()) {
    console.log('Key:', key, 'Val:', val)
}



// console.log(Boolean(""))