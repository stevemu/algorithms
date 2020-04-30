// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7));


function func() {
    console.log('a');
    setTimeout(() => {
        console.log('b');
    }, 0);
    console.log('c');
}

func();