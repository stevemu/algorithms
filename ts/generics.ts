// function reverse<T>(arr: T[]): T[] {
//   let toreturn: T[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     toreturn.push(arr[i]);
//   }

//   return toreturn;
// }

// const arr1: number[] = [1,2,3];
// const arr2 = reverse(arr1);
// console.log(arr2);

// function format(command: string[]|string) {
//   if (typeof command === 'string') {
//     console.log('a string');
//   } else {
//     console.log('string array');
//   }
// }

// format('a');
// format(['a','b']);

// interface Person {
//   name: string;
//   age: number;
// }

// interface Adult {
//   salary: number;
// }

// type Employee = Person & Adult;

// let qi: Employee = {
//   name: '1',
//   age: 22,
//   salary: 55
// }

// console.log(qi);

// function extend<T, U>(a: T, b: U): T & U {
//   return {...a, ...b};
// }

// const r = extend({a: 3}, {b: 4});
// console.log(r);

// let me: [string, number] = ['qi', 22];
// console.log(me);

// interface Process extend process {
//   existWithLogging(): void;
// }

// var process: Process;
// process.existWithLogging = function() {
//   console.log('exiting');
//   process.exit.apply(process, arguments)
// }

// const f: (s: string) => number = (s: string) => {
//   return parseInt(s);
// }

// interface Foo {
//   foo: string;
// }

// interface Bar {
//   bar: string;
// }

// function isFoo(arg: any): arg is Foo {
//   return arg.foo !== undefined;
// }

// console.log(isFoo({bar: 'a'}));

// function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
//   return o.reduce((res, key) => {
//     res[key] = key;
//     return res;
//   }, Object.create(null));
// }

// const Direction = strEnum(['north', 'south']);
// console.log(Direction);


// interface Foo {
//   foo: string;
// }

// interface Bar {
//   foo: string;
//   bar: string;
// }

// const bar: Bar = {foo: 'a', bar: 'b'};

// function test<T extends number>(arr: T[]): {[K in T]: string} {
//   let obj: {[K in T]: string} = Object.create(null);
//   for (let item of arr) {
//     obj[item] = 'a';
//   }
//   return obj;
// }

// console.log(test([1,2,34]));

// let obj = {
//   "a": 3,
//   "b": 5
// }

// type Direction1 = keyof typeof obj;

// let sample: Direction1

// sample = Direction.north;
// sample = 'north';
// sample = 'south';


// type Contract = {
//   id: number;
//   name: string;
// }

// type ReadOnlyContract = Readonly<Contract>;

// let c: ReadOnlyContract = {
//   id: 2,
//   name: 'a'
// }

// c.id = 3;

// class Queue<T> {
//   private data: T[] = [];
//   public push(num: T) {
//     this.data.push(num);
//   }
//   public pop(): T {
//     return this.data.pop();
//   }
// }

// let q = new Queue<number>();
// q.push(342);

// console.log(q);


// function reverse<T>(arr: T[]): T[] {
//   let r: T[] = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     r.push(arr[i]);
//   }
//   return r;
// }

// console.log(reverse<number>([2, 1]));


// function test(fn: (err: Error, data: any) => void) {
//   fn(new Error('he'), 'abc');
// }

// test((err) => {

// });

// class Person {
//   name: string;
// }

// class Employee extends Person {
//   id: number;
// }

// interface E extends Employee {

// }

// let e: E = {};

// let qp
// let qi: Employee = {
//   id: 1,
//   name: 'qi'
// }

// qp = qi;


// interface A {
//   a: string;
// }

// interface B {
//   a: string;
// }

// let a: A
// let b: B

// a = b
// b = a


// interface Person<T, V> {
//   id: T;
//   birth: V;
// }

// let qi: Person<string, number> = {
//   id: '1',
//   birth: 2342
// }


// class List<T> {
//   push(val: T) {

//   }
// }

// class Person {
//   name: string
// }

// class Employee extends Person {
//   id: number
// }

// const list = new List<Employee>();

// // const p = new Person();
// // const e = new Employee();

// list.push(new Person())
// list.push(new Employee())


// function a(): never {
//   throw new Error();
// }

// a()

// function foo(bar: string | number | 'abc'): boolean {
//   if (typeof bar === 'string') {
//     return true;
//   } else if (typeof bar === 'number') {
//     return false;
//   }  
// }


// interface Person {
//   [year: number]: string;
//   [name: string]: string;
// }

// let p: Person = {
//   2011: 'good',
//   'qi': 'very good'
// }

// console.log(p);

// interface Bar {
//   x: number;
//   y: string;
// }

// type T = {
//   a: number,
//   b: number
// }

// type MyType<K extends T> = {[k in K]: number};

// let a: MyType<string> = {
//   23: 33
// }

// console.log(a);

// interface Arr {
//   [key: string]: string | number;
//   [n: number]: number;
// }

// let a: Arr = {
//   '2': 2,
//   3: 3
// }

// const foo = 'hello';
// let bar: typeof foo = 'hello1';

// const color = {
//   blue: 'blue1',
//   red: 'red1'
// }

// type Color = keyof typeof color;


// const foo = <T extends {}>(t: T): T => {
//   return t;
// }

// let r = foo<string>('a');
// console.log(r);