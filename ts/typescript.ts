
// class MyNumbers implements IterableIterator<number> {
//   private pointer = 0;
//   constructor(private arr: number[]) {

//   }

//   public next(): IteratorResult<number> {
//     if (this.pointer < this.arr.length) {
//       return {
//         value: this.arr[this.pointer++],
//         done: false
//       }
//     } else {
//       return {
//         value: null,
//         done: true
//       }
//     }

//   }

//   [Symbol.iterator](): IterableIterator<number> {
//     return this;
//   }

// }

// let n = new MyNumbers([1, 2, 3, 4]);
// console.log(n.next());
// console.log(n.next());
// console.log(n.next());
// console.log(n.next());
// console.log(n.next());


// const lyrics = `I will nver gonna give you up
// forever
// `
// console.log(lyrics);


// let fn = 'qi';
// let msg = addGreeting `${fn}this is Roger's snow removal`;

// function addGreeting(literal: TemplateStringsArray, ...placeholders: (string | number)[]) {
//   console.log(literal);
//   // console.log(placeholders);

//   let ph = placeholders[0];
//   let template = literal[1];
//   if (ph === '') {
//     return template;
//   } else {
//     return `hi ${ph}. ${template}`;
//   }


// }

// console.log(msg);


