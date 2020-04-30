// function identify() {
//     return this.name.toUpperCase();
// }

// function speak() {
//     var greeting = "hello, I'm " + identify.call(this);
//     console.log(greeting);
// }

// var me = {
//     name: "Kyle"
// }

// var you = {
//     name: "Reader"
// }

// identify.call(me);
// identify.call(you);

// speak.call(me)
// speak.call(you)

// function identify(context) {
//     return context.name.toUpperCase();
// }

// function speak(context) {
//     var greeting = "Hello, I'm " + identify(context);
//     console.log(greeting);
// }

// identify(you);
// speak(me);

// function foo(num) {
//     console.log("foo: " + num);
//     this.count++;
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }

// // console.log(foo.count);
// console.log(count);

// function foo(num) {
//     console.log("foo: " + num);
//     data.count++;
// }

// var data = {
//     count: 0
// }

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }

// function foo() {
//     foo.count = 4;
//     foo.count++;
//     foo.count++;
//     // foo();

//     console.log(foo.count);
// }

// foo();
// foo();

// // console.log(foo());

// setTimeout(function() {

// }, 10);

// function foo(num) {
//     console.log("foo: " + num);
//     this.count++;
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo.call(foo, i);
//     }
// }

// console.log(foo.count);

// function test(age) {
//     console.log(`hi my name is ${this.name} and I am ${age}`);
// }

// let obj = {
//     name: "Qi"
// }

// // test.call(obj)
// test.apply(obj, [3])
// test.call(obj, 3)

// function foo() {
//     var a = 2;
//     this.bar();
// }

// function bar() {
//     console.log(this.a);
// }

// foo();

// function baz() {
//     console.log('baz');
//     bar();
// }

// function bar() {
//     console.log('bar');
//     foo();
// }

// function foo() {
//     debugger;
//     console.log('foo');
// }

// baz();

// function foo() {
//     console.log(this.a);
// }

// var a = 2;

// foo();
var tScope = function() {
  this.x = 33;
  this.foo = function() {
    console.log(this.x);
  };
};

let t1 = new tScope();

tScope.prototype.a = 99;
//  = {
//   a: 99,
//   bFunc: function() {
//     console.log("b");
//   }
// };

console.log(t1.a);
