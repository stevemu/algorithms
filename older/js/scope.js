// function foo(str, a) {
//     "use strict";
//     eval(str);
//     console.log(a);
// }


// foo("var a = 2;");

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// obj.a = 2;
// obj.b = 3;
// obj.c = 4;

// with (obj) {
//     a = 3;
//     b = 4;
//     c = 5;
// }

// console.log(obj);

// function foo(obj) {
//     with (obj) {
//         a = 2;
//     }
// }

// var o1 = {
//     a: 3
// };

// var o2 = {
//     b: 3
// }

// foo(o1);
// console.log(o1.a);
// console.log('here');
// foo(o2);
// console.log(o2.a);
// console.log(a);

// function doSomething(a) {
//     b = a + doSomethingElse(a * 2);
//     console.log(b * 3);
// }

// function doSomethingElse(a) {
//     return a - 1;
// }

// var b;

// doSomething(2);

// function doSomething(a) {
//     function doSomethingElse(a) {
//         return a - 1;
//     }

//     var b;

//     b = a + doSomethingElse(a * 2);

//     console.log(b * 3);
// }

// doSomething(2);

// function foo() {
//     function bar(a) { //8
//         var i = 3;
//         console.log(a + i); //8+3=11
//         // while (true) {

//         // }
//     }
//     for (var i = 0; i < 10; i++) { // i = 4
//         bar(i * 2);
//     }
// }

// foo();

// var MyReallyCoolLibrary = {
//     awesome: "stuff",
//     doSomething: function() {
//         console.log('do something');
//     },
//     doAnotherThing: function() {

//     }
// }

// MyReallyCoolLibrary.doSomething();

// var a = 2;

// function foo() {
//     var a = 3;
//     console.log(a);
// }
// foo();
// console.log(a);

// var a = 2;

// (function foo() {
//     var a = 3;
//     console.log(a);

// })();

// // {
// //     a = 4;
// // }

// console.log(a);

// setTimeout(function timeoutHandler() {
//     console.log("I waited 1 seconds");
// }, 1000);

// var a = 2;

// (function IIFE() {
//     var a = 3;
//     console.log(a);
// }());

// console.log(a);

// function process(data) {

// }

// {
//     var someReallyBigData = {};

//     process(someReallyBigData);
// }


// var btn = document.getElementById("my_button");

// btn.addEventListener('click', function click(evt) {
//     console.log('button clicked');
// })

// {
//     let j;
//     for (j = 0; j < 10; j++) {
//         let i = j;
//         console.log(i);
//     }
// }

// function test() {
//     var foo = true; baz = 10;

//     console.log(bar);

//     if (foo) {
//         var bar = 3;
//     }

//     if (baz > bar) {
//         console.log(baz);
//         // console.log(bar);
//     }
// }

// test();


// var foo = true;

// if (foo) {
//     var a = 2;
//     const b = 3;

//     a = 3;
//     // b = 4;
// }

// console.log(a);
// // console.log(b);


// a = 2;

// var a;

// console.log(a);

// console.log(a);
// var a = 2;

// var a;

// console.log(a);
// a = 2;


// function foo() {
//     console.log(a);
//     var a = 2;
// }

// foo();

// foo();

// var foo = function bar() {

// }

// foo();
// bar();

// var foo = function bar() {

// }

// var foo;

// foo();
// bar();

// foo = function() {
//     var bar = self;
// }

// foo();

// var foo;

// function foo() {
//     console.log(1);
// }

// foo = function() {
//     console.log(2);
// }


// foo();

// function foo() {
//     console.log(1);
// }

// var foo = function() {
//     console.log(2);
// }

// function foo() {
//     console.log(3);
// }

// foo();

// var a = true;

// if (a) {
//     function foo() {
//         console.log("a");
//     }
// } else {
//     function foo() {
//         console.log("b");
//     }
// }

// function foo() {
//     var a = 2;
//     function bar() {
//         console.log(a);
//     }
//     return bar;
// }

// var baz = foo();

// baz();


// function foo() {
//     var a = 2;
//     function baz() {
//         console.log(a);
//     }
//     bar(baz);
// }

// function bar(fn) {
//     fn();
// }

// var fn;

// function foo() {
//     var a = 2;
//     function baz() {
//         console.log(a);
//     }
//     fn = baz;
// }

// function bar() {
//     fn();
// }

// foo();

// bar();

// function wait(message) {
//     setTimeout(function timer() {
//         console.log(message);
//     }, 1000)
// }

// wait("Hello, closure!");

// function setupBot(name, selector) {
//     $(selector).click(function activator() {
//         console.log("activating: " + name);
//     });
// }

// setupBot("Closure Bot 1", "#bot_1");
// setupBot("Closure Bot 2", "#bot_2");

// var a = 2;

// (function IIFE() {
//     console.log(a);
// })();

// for (var i = 1; i <= 5; i++) {

    // (function () {
    //     var j = i;
    //     setTimeout(function timer() {
    //         console.log(j);
    //     }, j * 1000);
    // })();

    // (function(i) {
    //     setTimeout(function timer() {
    //         console.log(i);
    //     }, i * 1000);
    // })(i);

    // for (var i = 1; i <= 5; i++) {
    //     let j = i;
    //     setTimeout(function timer() {
    //         console.log(j);
    //     }, j * 1000);
    // }


// }


// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000)
// }

// function foo() {
//     var something = "cool";
//     var another = [1,2,3];

//     function doSomething() {
//         console.log(something);
//     }

//     function doAnother() {
//         console.log(another.join(" ! "));
//     }
// }

// function CoolModule() {
//     var something = "cool";
//     var another = [1,2,3];

//     function doSomething() {
//         console.log(something);
//     }

//     function doAnother() {
//         console.log(another.join(" ! "));
//     }

//     return {
//         doSomething,
//         doAnother
//     }
// }

// var foo = CoolModule();

// foo.doSomething();
// foo.doAnother();

// var foo = (function CoolModule() {
//     var something = "cool";
//     var another = [1,2,3];

//     function doSomething() {
//         console.log(something);
//     }

//     function doAnother() {
//         console.log(another.join(" ! "));
//     }

//     return {
//         doSomething,
//         doAnother
//     }
// })();

// console.log(foo.doAnother());

// function CoolModule(id) {
//     function identify() {
//         console.log(id);
//     }

//     return {
//         identify
//     }
// }

// var foo1 = CoolModule("foo 1");
// var foo2 = CoolModule("foo 2");

// foo1.identify();
// foo2.identify();

// var foo = (function CoolModule(id) {
//     function change() {
//         publicAPI.identify = identify2;
//     }

//     function identify1() {
//         console.log(id);
//     }

//     function identify2() {
//         console.log(id.toUpperCase());
//     }

//     var publicAPI = {
//         change,
//         identify: identify1
//     }

//     return publicAPI;

// })("foo module");

// foo.identify();
// foo.change();
// foo.identify();


// var foo = (function CoolModule(id) {
//     let publicAPI = {
//         change,
//         identify: identify1
//     };

//     function change() {
//         publicAPI.identify = identify2;
//     }

//     function identify1() {
//         console.log(id);
//     }

//     function identify2() {
//         console.log(id.toUpperCase());
//     }


//     return publicAPI;

// })("foo module");

// foo.identify();
// foo.change();
// foo.identify();

var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    }
})();

MyModules.define("bar", [], function() {
    function hello(who) {
        return "let me introduce: " + who;
    }

    return {
        hello: hello
    }
});

MyModules.define("foo", ["bar"], function(bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    }
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(bar);
console.log(foo);

console.log(bar.hello("hippo"));

foo.awesome();