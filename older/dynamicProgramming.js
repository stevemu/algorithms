// function addTo80(n) {
//     return n + 80;
// }

// let cache = {};

// function memoizedAddTo80(n) {
//     if (n in cache) {
//         return cache[n];
//     } else {
//         console.log('long time');
//         cache[n] = n + 80;
//         return cache[n];
//     }
// }

// console.log('1', memoizedAddTo80(5));
// console.log('2', memoizedAddTo80(5));

// console.log(addTo80(5));

let cache = {};

function memoizedMultiple(a, b) {
    let key = [a, b];
    if (key in cache) {
        return cache[key];
    } else {
        console.log('long time');
        cache[key] = a * b;
        // console.log(JSON.stringify(key));
        return cache[key];
    }
}

function memoizedMultipleWithClosure() {
    let cache = {};

    return function (a, b) {
        let key = [a, b];
        if (key in cache) {
            return cache[key];
        } else {
            console.log('long time');
            cache[key] = a * b;
            return cache[key];
        }
    }
}

// let multiple = memoizedMultipleWithClosure();

// console.log(multiple(2,2));
// console.log(multiple(2,2));

// console.log(memoizedMultiple(3, 5));
// console.log(memoizedMultiple(3, 5));

// let key = [1,2];
// let test = {
//     key: 55
// };

// console.log(test);
// console.log();

function memoize(func) {
    let cache = {};

    return function (...args) {
        // console.log(args);
        let key = args;
        if (key in cache) {
            return cache[key];
        } else {
            console.log('long time');
            let result = func.call(this, ...args);
            cache[key] = result;
            return cache[key];
        }
    }
}

// let multipleWithMemoize = memoize((a, b) => {
//     return a * b;
// });

// console.log(multipleWithMemoize(2, 4));
// console.log(multipleWithMemoize(2, 4));

// let calculations = 0;
// function fibonacci(n) {
//     calculations++;
//     if (n <= 1) {
//         return 1;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// console.log(fibonacci(3));
// console.log(calculations);

// let memoizedFib = memoize(fibonacci);
// console.log(memoizedFib(3)); 
// let calculations = 0;
// function fibMaster() {
//     let cache = {};

//     return function fib(n) {
//         calculations++;
//         if (n in cache) {
//             return cache[n];
//         } else {
//             if (n <= 1) {
//                 cache[n] = 1;
//                 return cache[n];
//             }
//             let result = fib(n-1) + fib(n-2);
//             cache[n] = result;
//             return cache[n];
//         }
//     }
// }

// let fib = fibMaster();

// console.log(fib(50));
// console.log(calculations);

function fibMaster2(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i-1] + answer[i-2]);
    }

    return answer.pop();
}

console.log(fibMaster2(10));