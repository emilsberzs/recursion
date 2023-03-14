// For something simple to start with – let’s write a function pow(x, n) 
// that raises x to a natural power of n. In other words, multiplies x by itself n times

//ITERATIVE
function pow(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
console.log(pow(2, 3)); // 8

//RECURSIVE
function recursive_pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * recursive_pow(x, n - 1);
    }
}

console.log(recursive_pow(2, 3)); // 8

//EVEN SHORTER RECURSIVE
function recursive_ternary_pow(x, n) {
    return (n == 1) ? x : (x * recursive_ternary_pow(x, n - 1));
}

console.log(recursive_ternary_pow(2, 3))

//ITERATIVE COUNTDOWN
function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i)
    }
    console.log('Done')
}
countDown(10)

//RECURSIVE COUNTDOWN
function recursiveCountDown(n) {
    if (n <= 0) {
        console.log('Done')
        return
    }
    console.log(n)
    recursiveCountDown(n - 1)
}
recursiveCountDown(10)

//ITERATIVE SUM RANGE
function sumRange(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        console.log(total)
        total += i;
    }
    console.log(total)
    return total
}

sumRange(10)

//RECURSIVE SUM RANGE
function recursiveSumRange(n, total = 0) {
    if (n <= 0) {
        return total;
    }
    return recursiveSumRange(n - 1, total + n)
}
console.log(recursiveSumRange(10))

//RECURSIVE TERNARY SUM RANGE
function ternaryRecursiveSumRange(n, total = 0) {
    return (n <= 0) ? total : ternaryRecursiveSumRange(n - 1, total + n);
}

console.log(ternaryRecursiveSumRange(10))

console.log('colatz gap')

//COLATZ CONJECTURE
function colatz(n) {
    //base case
    if (n == 1) {
        return 0
        //evens
    } else if (n % 2 == 0) {
        return 1 + colatz(n / 2)
        //odds
    } else {
        return 1 + colatz(3 * n + 1)
    }
}

console.log(colatz(50))