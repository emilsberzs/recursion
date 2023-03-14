//Fibbonacci function using iteration (return n numbers of fibonacci sequence)
function Fibonacci(n) {
    //initialize array so loop has starting values
    const arr = [0, 1]
    for (let i = 2; i < n; i++) {
        //each subsequent fibbonacci number is sum of previous number, and number before that-hence the 2 item array to start with
        arr[i] = arr[i - 2] + arr[i - 1]
    }
    return arr
}
console.log(Fibonacci(10))

//Now create same function, but using recursion


const fibRecursive = (n, a = [0, 1]) => {
    if (a.length >= n) return a;
    return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
};

console.log(fibRecursive(8));

//aw lawd