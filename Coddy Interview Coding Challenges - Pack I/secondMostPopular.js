/* Second Most Popular

Challenge  (Hard):
Write a function named secondMost that gets a list of integers as an input, and returns the second most recurring integer.
For example,

Input:

[98, 72, 93, 72, 83, 98, 72, 44, 25, 53, 43, 98, 81, 98]

Expected output:

72

Explanation - 72 is included 3 times in the list, right after 98, which is included 4 times. therefore 72 is the second most popular number. */

function secondMost(a) {
    // Write code here

    const numbers = new Map();
    const setUnique = new Set(a); // Not Used
    let newArr = []

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

const inPut = [5, 5, 4, 3, 5, 4, 1]

console.log(
    secondMost(inPut),
);

// const v = [5, 6, 7, 8, 9].forEach(i => { return i === 5})
