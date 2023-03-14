function merge(left, right) {
    let arr = [];
    //Break out of loop if any one of the arrays become empty
    while (left.length && right.length) {
        //Pick smaller among the smallest element of the let and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

function mergeSort(array) {
    const half = array.length / 2;

    //Base case
    if (array.length < 2) {
        return array
    }
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array))
}

arr = [4, 8, 7, 2, 11, 1, 3]

console.log(mergeSort(arr))