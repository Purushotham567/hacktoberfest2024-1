function mergeSort(arr) {
    // Base case: Arrays with 1 or 0 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    return merge(mergeSort(left), mergeSort(right));
}

// Function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements of left and right arrays and push the smaller one into the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concat the remaining elements if any (either in the left or right array)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test the mergeSort function
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);

console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
