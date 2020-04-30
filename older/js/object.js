//   var myObj = new Object();
//   myObj.name = "Qi";
//   console.log(myObj.name);

// var strPrimitive = "I am a string";
// console.log(typeof strPrimitive);
// console.log(strPrimitive instanceof String);

// var strObject = new String("I am a string");
// console.log(typeof strObject);
// console.log(strObject instanceof String);

// Object.prototype.toString.call(strObject);

// console.log(Object.prototype.toString.call(strObject));

// var strPrimitive = "I am a string";
// console.log(strPrimitive.length);
// console.log(strPrimitive.charAt(3));

// console.log(42.3423.toFixed(2));

// throw "aaa"

// var wantA = true;
// var myObject = {
//     a: 2
// }

// var idx;

// if (wantA) {
//     idx = "a"
// }

// console.log(myObject[idx]);

// var myObject = {};

// myObject[true] = "foo";
// myObject[3] = "bar";
// myObject[myObject] = "baz";

// console.log(myObject["true"]);
// console.log(myObject["3"]);
// console.log(myObject["[object Object]"]);

// var prefix = "foo";
// var myObject = {
//     [prefix + "bar"]: "hello",
//     [prefix + "baz"]: "world"
// };

// console.log(myObject["foobar"]);
// console.log(myObject["foobaz"]);

// var myObject = {
//     [Symbol.something]: "hello world"
// }

// console.log(myObject);

// function foo() {
//     console.log("foo");
// }

// var someFoo = foo;

// var myObject = {
//     someFoo: foo
// }

// console.log(foo);
// console.log(someFoo);
// console.log(myObject.someFoo);

// var myObject = {
//     foo: function foo() {
//         console.log("foo");
//     }
// }

// var someFoo = myObject.foo;

// console.log(someFoo);
// console.log(myObject.foo);

// var myArr = ["foo", 42, "bar"];
// console.log(myArr.length);
// myArr[0];
// myArr[2];

// var myArr = ["foo", 42, "bar"];
// myArr["5"] = "baz";
// console.log(myArr.length);
// console.log(myArr[5]);

// function anotherFunction() {
//     console.log('another');
// }

// var anotherObject = {
//     c: true
// }

// var anotherArray = [];

// var myObject = {
//     a: 2,
//     b: anotherObject,
//     c: anotherArray,
//     d: anotherFunction
// };

// anotherArray.push(anotherObject, myObject)

// var newObj = Object.assign({}, myObject);

// console.log(newObj.a);
// console.log(newObj.b === anotherObject);
// console.log(newObj.c === anotherArray);
// console.log(newObj.d === anotherFunction);

// console.log(anotherArray);

// let obj = {
//     a: 22,
//     b: [1,2,3]
// }
// let obj2 = Object.assign({}, obj);
// console.log(obj2);

// obj.b.push(4);
// console.log(obj2);

// var myObject = {
//     a: 2
// }

// console.log(Object.getOwnPropertyDescriptor(myObject, "a"));

// "use strict"
// var myObject = {};

// Object.defineProperty(myObject, "a", {
//     value: 2,
//     writable: false,
//     configurable: true,
//     enumerable: true
// })

// myObject.a = 3;

// console.log(myObject);

// var myObject = {
//     a: 2
// }
// myObject.a = 3;
// console.log(myObject.a);

// Object.defineProperty(myObject, "a", {
//     value: 4,
//     writable: true,
//     configurable: false,
//     enumerable: true
// });

// console.log(myObject.a);
// myObject.a = 5;
// console.log(myObject.a);

// Object.defineProperty(myObject, "a", {
//     value: 6,
//     writable: true,
//     configurable: true,
//     enumerable: true
// });

// var myObject = {
//     a: 2
// }

// console.log(myObject.a);
// delete myObject.a;
// console.log(myObject.a);

// Object.defineProperty(myObject, "a", {
//     configurable: false,
//     writable: true,
//     enumerable: true,
//     value: 3
// });

// delete myObject.a;
// console.log(myObject);

// 'use strict'
// var myObject = {};

// Object.defineProperty(myObject, "FAV_NUM", {
//     writable: true,
//     configurable: true,
//     value: 33,
//     enumerable: true
// })

// Object.preventExtensions(myObject);

// myObject.FAV_NUM = 3;
// myObject.a = 44;

// console.log(myObject);

// var foo = 100;
// var myObject = {
//     get a() {
//         return foo;
//     }
// }

// Object.defineProperty(
//     myObject,
//     "b",
//     {
//         get: function() {
//             return this.a * 2
//         },
//         enumerable: true
//     }
// );

// console.log(myObject.a);
// console.log(myObject.b);

// var util = {
//     get PI() {
//         return 3.14;
//     }
// }

// util.PI = 5;
// console.log(util.PI);

// var myObject = {
//     get a() {
//         return this._a_ + 1;
//     },
//     set a(val) {
//         this._a_ = val * 2;
//     }
// };

// myObject.a = 2;
// myObject._a_ = 100;
// console.log(myObject._a_);

// var myObject = {
//   a: 2
// };

// console.log(("a" in myObject));
// console.log(("b" in myObject));

// console.log(myObject.hasOwnProperty("a"));
// console.log(myObject.hasOwnProperty("b"));

// console.log(Object.prototype.hasOwnProperty.call(myObject, "a"));

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

// let obj = {
//   a: 3
// };

// var myArray = [1,2,3];
// var it = myArray[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// var myObject = {
//   a: 2,
//   b: 3
// };

// Object.defineProperty(myObject, Symbol.iterator, {
//   enumerable: false,
//   writable: false,
//   configurable: true,
//   value: function() {
//     var o = this;
//     var idx = 0;
//     var ks = Object.keys(o);
//     return {
//       next: function() {
//         return {
//           value: o[ks[idx++]],
//           done: (idx > ks.length)
//         }
//       }
//     }
//   }
// })

// var it = myObject[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (let v of myObject) {
//   console.log(v);
// }

// var randoms = {
//   [Symbol.iterator]: function() {
//     return {
//       next: function() {
//         return {value: Math.random()}
//       }
//     }
//   }
// }

// let it = randoms[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (let o of randoms) {
//   console.log(o);
// }

// function mixin(sourceObj, targetObj) {
//   for (var key in sourceObj) {
//     if (!(key in targetObj)) {
//       targetObj[key] = sourceObj[key];
//     }
//   }
//   return targetObj;
// }

// var Vehicle = {
//   engines: 1,
//   ignition: function() {
//     console.log("turning on my engine");
//   },
//   drive: function() {
//     this.ignition();
//     console.log("Steering and moving forward");
//   }
// }

// var Car = mixin(Vehicle, {
//   wheels: 4,
//   drive: function() {
//     Vehicle.drive.call(this);
//     console.log(`Rolling on all ${this.wheels} wheels`);
//   }
// })

// function foo() {
//   console.log(this);

//   var b = {
//     aaa: 333
//   };
// }

// let o = new foo();
// console.log(o);

// var x = 0;
// function foo() {
//   // console.log('here');
//   x++;
//   // console.log(this);
//   this.x = x;
//   // console.log(this.x);
//   // console.log(foo);
//   return foo;
// }

// var bar = new new foo;
// console.log(bar.x);
// let a = new foo;
// console.log(new foo);

// console.log('1' - - '1');

// function Vehicle() {
//   this.engines = 1;
// }

// Vehicle.prototype.ignition = function() {
//   console.log("Turning on my engines");
// }

// Vehicle.prototype.drive = function() {
//   this.ignition();
//   console.log("Steering and moving forward");
// }

// function Car() {
//   var car = new Vehicle();
//   car.wheels = 4;
//   var vehDrive = car.drive;
//   car.drive = function() {
//     vehDrive.call(this);
//     console.log(`Rolling on all ${this.wheels} wheels`);
//   }
//   return car;
// }

// var myCar = new Car();
// myCar.drive();

// function foo() {
//   return {a :5};
// }

// let bar = new foo();
// console.log(bar);

// var Something = {
//   cool: function() {
//     this.greeting = "Hello World";
//     this.count = this.count ? this.count + 1 : 1;
//   }
// }

// Something.cool();
// Something.greeting;
// Something.count;

// var Another = {
//   cool: function() {
//     Something.cool.call(this);
//   }
// };

// Another.cool();
// Another.greeting;
// Another.count;

// var anotherObject = {
//   a: 2
// };

// var myObject = Object.create(anotherObject);

// for (var k in myObject) {
//   console.log(k);
// }

// console.log("a" in myObject);

// console.log(Object);

// var o1 = {
//   a: 2
// };

// var o2 = Object.create(o1);

// o2.a++;

// console.log(o1.a);
// console.log(o2.a);

// console.log(anotherObject.a);
// console.log(myObject.a);

// console.log(anotherObject.hasOwnProperty("a"));
// console.log(myObject.hasOwnProperty("a"));

// anotherObject.a++;

// console.log(anotherObject.a);
// console.log(myObject.a);

// function Foo() {

// }

// Foo.prototype.drive = function() {
//   console.log('I am driving');
// }

// var a = new Foo();
// a[[[Prototype]]]

// let a = {
//   b: 3
// }

// let aa = Object.create(a);

// console.log(a.prototype);

// function Foo() {

// }

// console.log(Foo.prototype.constructor === Foo);

// var a = new Foo();
// console.log(Foo.prototype.constructor);
// console.log(a.constructor === Foo);

// function NothingSpecial() {
//   console.log("don't mind me");
// }

// var a = new NothingSpecial();

// console.log(a.constructor);
// console.log(Object.getPrototypeOf(a));
// console.log(a);

// function Foo(name) {
//   this.name = name;
// }

// Foo.prototype.myName = function() {
//   return this.name;
// }

// var a = new Foo("a");
// var b = new Foo("b");

// console.log(a.myName());
// console.log(b.myName());

// function Foo() {

// }

// Foo.prototype = {
//   c: 3
// }

// Object.defineProperty(Foo.prototype, "constructor", {
//   value: Foo,
//   enumerable: false,
//   configurable: true,
//   writable: true
// })

// Object.defineProperty(Foo.prototype, "constructor2", {
//   value: Foo,
//   enumerable: false,
//   configurable: true,
//   writable: true
// })

// var a1 = new Foo();

// console.log(a1.__proto__);

// function Foo(name) {
//   this.name = name;
// }

// Foo.prototype.myName = function() {
//   return this.name;
// }

// function Bar(name, label) {
//   Foo.call(this, name);
//   this.label = label;
// }

// Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.myLabel = function() {
//   return this.label;
// }

// var a = new Bar("a", "obj a");
// console.log(a.myName());
// console.log(a.myLabel());

// function Foo() {

// }

// function Bar() {

// }

// Object.setPrototypeOf(Bar.prototype, Foo.prototype);

// console.log(Bar.prototype);

// function Foo() {

// }

// let Bar = Foo.bind({a: 3});
// console.log(Bar.prototype);

// Foo.prototype.blah = "sss";

// var a = new Foo();

// console.log(a instanceof Foo);

// function isRelatedTo(o1, o2) {
//   function F() {}
//   F.prototype = o2;
//   return o1 instanceof F;
// }

// var a = {};
// var b = Object.create(a);

// console.log(isRelatedTo(b, a));

// function Vehicle() {

// }

// Vehicle.prototype.print = function() {
//   console.log("I am vehicle");
//   console.log(`my age is ${this.age}`);
// }

// function GroundVehicle() {

// }

// Object.setPrototypeOf(GroundVehicle.prototype, Vehicle.prototype);
// console.log(Object.getPrototypeOf(GroundVehicle.prototype));

// // Object.setPrototypeOf(GroundVehicle.prototype, Vehicle.prototype);
// GroundVehicle.prototype.__proto__ = Vehicle.prototype;

// function Car() {

// }

// // Object.setPrototypeOf(Car.prototype, GroundVehicle.prototype);
// Car.prototype.__proto__ = GroundVehicle.prototype;

// let car1 = {
//   age: 10
// }

// car1.__proto__ = Car.prototype;
// car1.print();

// Object.prototype.run = function() {
//   console.log(`${this.name} is running`);

// }

// let q = {
//   name: "Steve"
// };

// q.run();

// let foo = {
//   name: "Steve",
//   jump: function() {
//     console.log(`${this.name} is jumping!`);
//   }
// }

// let bar = Object.create(foo);
// bar.name = "Qi";

// bar.jump();
// console.log(bar.__proto__);
// console.log(Object.getPrototypeOf(bar));

// var foo = {
//   something: function() {
//     console.log("Tell me something good...");
//   }
// }

// var bar = Object.create(foo);

// bar.something();

// let Post = {
//   getPostHtml: function() {
//     return `
//       <p>
//       ${this.text}
//       </p>
//     `
//   }
// }

// let post = Object.create(Post);
// post.text = "I am here";

// console.log(post.getPostHtml());

// var anotherObject = {
//   cool: function() {
//     console.log('cool!');
//   }
// }

// var myObject = Object.create(anotherObject);

// myObject.doCool = function() {
//   this.cool();
// }

// myObject.doCool();

// let obj = Object.create({});
// console.log(obj.__proto__);
// let obj2 = {};
// console.log(obj2.__proto__);

// function Foo() {

// }

// Foo.prototype.showOff = function() {
//   console.log(`${this.name} is showing off`);
// }

// let a = new Foo();
// a.name = "Steve";
// a.showOff();
// console.log(a.__proto__);

// function Foo() {

// }

// var a = new Foo();

// a.changeNameUpChain = function(name) {
//   a.__proto__.name = name;
// }

// a.changeNameUpChain("Authright");

// var b = new Foo();

// console.log(b.name);

// let Foo = {
//   changeNameUpChain: function(name) {
//     this.__proto__.name = name;
//   }
// }

// let a = Object.create(Foo);
// a.changeNameUpChain("au");
// console.log(a.name);

// let b = Object.create(Foo);
// console.log(b.name);

// var Task = {
//   setID: function(ID) {
//     this.id = ID;
//   },
//   outputID: function() {
//     console.log(this.id);
//   }
// }

// var XYZ = Object.create(Task);

// XYZ.prepareTask = function(ID, Label) {
//   this.setID(ID);
//   this.label = Label;
// }

// XYZ.outputTaskDetails = function() {
//   this.outputID();
//   console.log(this.label);
// }

// var Person = {
//   setID: function(ID) {
//     this.ID = ID;
//   },
//   outputID: function() {
//     console.log(this.ID);
//   }
// }

// let steve = Object.create(Person);

// steve.preparePerson = function(id, name) {
//   this.setID(id);
//   this.name = name;
// }

// steve.output = function() {
//   this.outputID();
//   console.log(this.name);
// }

// steve.preparePerson(1, 'steve');
// steve.output();

// var Foo = {};
// var a1 = Object.create(Foo);
// console.log(a1);

// Object.defineProperty(Foo, "constructor", {
//   enumerable: false,
//   value: function Gotcha() {}
// })

// console.log(a1);

// function Foo(who) {
//   this.me = who;
// }

// Foo.prototype.identify = function() {
//   return "I am " + this.me;
// }

// function Bar(who) {
//   Foo.call(this, who);
// }
// Bar.prototype = Object.create(Foo.prototype);

// Bar.prototype.speak = function() {
//   alert("Hello, " + this.identify() + ".");
// }

// var b1 = new Bar("b1");
// var b2 = new Bar("b2");

// b1.speak();
// b2.speak();

// var Person = function(name) {
//   this.name = name;
// }

// Person.prototype.getName = function() {
//   return this.name;
// }

// var Worker = function(name, ssn) {
//   Person.call(this, name);
//   this.ssn = ssn;
// }

// Worker.prototype.printWorker = function() {
//   console.log(this.name);
//   console.log(this.ssn);
// }

// let steve = new Worker('steve', 123);
// steve.printWorker();

// var Person = {
//   initPerson: function(name) {
//     this.name = name;
//   },
//   printName: function() {
//     console.log(`hi I am ${this.name}`);
//   }
// }

// var Worker = Object.create(Person);
// Worker.initWorker = function(salary) {
//   this.salary = salary;
// }
// Worker.printSalary = function() {
//   console.log(`my salary is ${this.salary}`);
// }

// var steve = Object.create(Worker);
// steve.initPerson("chandler");
// steve.initWorker(10000);
// steve.printName();
// steve.printSalary();

// function Foo(who) {
//   this.me = who;
// }
// Foo.prototype.identify = function() {
//   return "I am " + this.me;
// };

// function Bar(who) {
//   Foo.call( this, who );
// }
// Bar.prototype = Object.create( Foo.prototype );

// Bar.prototype.speak = function() {
//   alert( "Hello, " + this.identify() + "." );
// };

// var b1 = new Bar( "b1" );
// var b2 = new Bar( "b2" );

// b1.speak();
// b2.speak();

// console.log(Object);

// console.log(Bar.prototype.__proto__.constructor);
// console.log(Function.prototype.__proto__);

// var foo = {};
// var Bar = function() {

// }

// console.log(Bar.__proto__);

// var Foo = {
//   init: function(who) {
//     this.me = who;
//   },
//   identify: function() {
//     return "I am " + this.me;
//   }
// }

// var Bar = Object.create(Foo);

// Bar.speak = function() {
//   console.log(`this is ${this.identify()}`);
// }

// var b1 = Object.create(Bar);
// b1.init("b1");
// var b2 = Object.create(Bar);
// b2.init("b2");

// b1.speak();
// b2.speak();

// function Widget(width, height) {
//   this.width = width || 50;
//   this.height = height || 50;
//   this.$elem = null;
// }

// Widget.prototype.render = function($where) {
//   if (this.$elem) {
//     this.$elem.css({
//       width: this.width + "px",
//       height: this.height + "px"
//     }).appendTo($where);
//   }
// }

// function Button(width, height, label) {
//   Widget.call(this, width, height);
//   this.label = label || "Default";
//   this.$elem = $("<button>").text(this.label);
// }

// Button.prototype = Object.create(Widget.prototype);

// Button.prototype.render = function($where) {
//   Widget.prototype.render.call(this, $where);
//   this.$elem.click(this.onClick.bind(this));
// }

// Button.prototype.onClick = function(evt) {
//   console.log("Button " + this.label + " clicked!");
// }

// $(document).ready(function() {
//   var $body = $(document.body);
//   var btn1 = new Button(125, 30, "hello");
//   var btn2 = new Button(150, 40, "world");
//   btn1.render($body);
//   btn2.render($body);
// })

// class Widget {
//   constructor(width, height) {
//     this.width = width || 50;
//     this.height = height || 50;
//     this.$elem = null;
//   }
//   render($where) {
//     if (this.$elem) {
//       this.$elem.css({
//         width: this.width + "px",
//         height: this.height + "px"
//       }).appendTo($where);
//     }
//   }
// }

// class Button extends Widget {
//   constructor(width, height, label) {
//     super(width, height);
//     this.label = label || "default";
//     this.$elem = $("<button>").text(this.label);
//   }
//   render($where) {
//     super.render($where);
//     this.$elem.click(this.onClick.bind(this));
//   }
//   onClick(evt) {
//     console.log("button " + this.label + " clicked!");
    
//   }
// }

// $(document).ready(function() {
//   var $body = $(document.body);
//   var btn1 = new Button(125, 30, "hello");
//   var btn2 = new Button(150, 40, "world");
//   btn1.render($body);
//   btn2.render($body);
// })

// var Widget = {
//   init: function(width, height) {
//     this.width = width || 50;
//     this.height = height || 50;
//     this.$elem = null;
//   },
//   insert: function($where) {
//     if (this.$elem) {
//       this.$elem.css({
//         width: this.width + "px",
//         height: this.height + "px"
//       }).appendTo($where);
//     }
//   }
// }

// var Button = Object.create(Widget);

// Button.setup = function(width, height, label) {
//   this.init(width, height);
//   this.label = label || "Default";
//   this.$elem = $("<button>").text(this.label);
// }
// Button.build = function($where) {
//   this.insert($where);
//   this.$elem.click(this.onClick.bind(this));
// }
// Button.onClick = function(evt) {
//   console.log(this.label + ' clicked');
// }

// $(document).ready(function() {
//   var $body = $(document.body);

//   var btn1 = Object.create(Button);
//   btn1.setup(125,30, 'hello');

//   var btn2 = Object.create(Button);
//   btn2.setup(150,40,'world');

//   btn1.build($body);
//   btn2.build($body);
// })

// let a = {
//   name: "a"
// }

// let b = {
//   name: 'b'
// }
// Object.setPrototypeOf(b, a);
// console.log(b);

// var Foo = {
//   baz: function (x) {
//     if (x < 10) {
//       return baz(x * 2);
//     }
//     return x;
//   }
// }

// console.log(Foo.baz(2));

// function Foo() {

// }
// Foo.prototype.something = function() {
//   console.log('some');
// }

// var a1 = new Foo();

// if (a1 instanceof Foo) {
//   a1.something();
// }