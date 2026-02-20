/* Merge Sort

Challenge  (Easy):

Write a function named mergeSort that gets two sorted lists as input,
merges them into one sorted list, and returns it.

For Example,

Input:

[1, 4, 6, 8, 14, 23]

[2, 3, 5, 7, 11, 18, 19, 20]

Expected Output:

[1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 18, 19, 20, 23]
*/

function mergeSort(a1, a2) {
    // Write code here
    const mergeArr = [...a1, ...a2]

    return mergeArr.sort((a, b) => a - b)
}

console.log(mergeSort([1, 4, 6, 8, 14, 23],
    [2, 3, 5, 7, 11, 18, 19, 20]))