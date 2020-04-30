// function max(a, ...rest) {
//     console.log(a);
// }

// max(1,2,3,4,5)

// let arr = [1,2,3];
// let arr2 = [...arr, 4];
// console.log(arr2);

let steve = {
    name: "Steve",
    age: 99,
    gender: 1
}

//1: man
//2: woman
//3: transgender

let steveWithHeight = {
    ...steve,
    height: 33
}

console.log(steveWithHeight);