// import {create as createBlogPost} from './blogpost.js';

// var forAgainstLet = createBlogPost(
//     'for and ',
//     'key',
//     'oc2',
//     'thss:/sdfsdf'
// );

// forAgainstLet.print();

// const bar = () => {
//     // throw new DOMException()
//     console.log('bar');
// }

// const baz = () => console.log('baz');

// const foo = () => {
//     console.log('foo');
//     bar()
//     baz()
// }

// foo()


// let q = [];
// q.push(function run1() {
//     console.log('1');
// })
// q.push(function run2() {
//     console.log('2');
// })
// q.push(function run3() {
//     console.log('3');
// })

// let interval = setInterval(() => {
//     if (q.length == 0) {
//         clearInterval(interval);
//         return;
//     }
    
//     let f = q.pop();
//     f();
// }, 1000);


// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   setTimeout(bar, 0)
//   baz()
// }
 
// foo()

// console.log(Function.prototype);

// var obj = {
//     // valueOf: function() {
//     //     console.log('vo here');
//     // }
//     o: 'obj'
// }

// var obj2 = Object.create(obj);

// console.log(obj2.o);

// console.log(Object.prototype == obj.__proto__);
// console.log(obj.valueOf('a'));

// function Foo() {

// }

// var bar = new Foo();

// console.log(bar.prototype);

// console.log(Object.create(bar).prototype);

// console.log(bar.__proto__ == Foo.__proto__);

// console.log(Foo.__proto__ == Function.prototype);
// console.log(Foo.prototype.__proto__);

// function Vehicle(make) {
//     this.make = make;
// }

// Vehicle.prototype.drive = function() {
//     console.log('I am driving');
//     console.log(`I am driving a ${this.make}`);
// }

// let vehicle1 = new Vehicle('honda');

// vehicle1.drive()

// class Vehicle {
//     constructor(make) {
//         this.make = make;
//     }

//     drive() {
//         console.log('I am driving');
//         console.log(`I am driving a ${this.make}`);
//     }
// }

// let vehicle1 = new Vehicle('honda');

// vehicle1.drive()

// console.log(parseInt('123123aa'));

// console.log(Boolean(''));

// function foo() {
//     console.log(i);
//     for (var i = 0; i < 3; i++) {
//         console.log(i);
//     }
// }

// foo();

// console.log(Boolean(1));

// console.log('hello' instanceof Object);

// class Circle {}
// const circle = new Circle();

// function hey() {
//     var myName = 'Jack';
// };
// hey();

// console.log(myName);

// var a = 1;
// var b = 2;

// (function() {
//     var b = 3;
//     a += b;
// })();

// console.log(a);
// console.log(b);

// default

// function foo() {
//     console.log(this);
// }

// foo();

// implicit

// function foo() {
//     console.log(this);
// }

// var obj = {
//     fname: 'qi',
//     foo: function(num) {
//         console.log(this, num);
        
//     }
// }

// var foo = obj.foo;

// foo(); // this = global object
// obj.foo(); // this = obj

// let obj2 = {
//     fname: "steve"
// }

// foo.call(obj2) // this = obj
// let a = new foo() // this = {}

// higher order function
// const doFilter = query => user => user.includes(query);

// let users = ['apple', 'banaba', 'steve']

// console.log(users.filter(doFilter('ste')));

// var myObject = {};

// Object.defineProperty(
//   myObject,
//   "a",
//   {enumerable: true, value: 2}
// );

// Object.defineProperty(
//   myObject,
//   "b",
//   {enumerable: false, value: 3}
// );

// console.log(myObject.propertyIsEnumerable("a"));
// console.log(myObject.propertyIsEnumerable("b"));
// console.log(Object.keys(myObject));
// console.log(Object.getOwnPropertyNames(myObject));

//11
// function a() {
//   let b = () => {
//     this.c = 33;
//   }
//   b();
// }

// let foo = new a();
// console.log(foo.c);

// let a = []+'foo'.split('');
// console.log(a);
// console.log(typeof a);


// console.log(true + false); //1
// console.log((true + false) > 2); //false
// console.log((true + false) > 2 + true); //false

// function aaa() {
//   return {test: 1}
// }


// function foo() {

// }

// let b = new foo();

// foo.prototype = {
//   showOff: function() {
//     console.log(this);
//   }
// }

// console.log(b.constructor);

// function t(a, b) {
//   arguments[0] = 3;
//   console.log(a);
// }

// t(5, 2)

// don't jump into coding first, think how you're going to design it
// design pattern / api layer / folder organization by pages / reusable components 
// they want to know that you are doing the way doing are doing it
// show you know it and aware it although you may not do it that way

// function Foo() {

// }


// let a = new Foo();

// console.log(a.__proto__);

var a = {name: "hubert"}
a.f = function f() {
  console.log(this.name);
}
var b = Object.create(a);
b.name = "steve"
// b.f()
b.f.apply(a);