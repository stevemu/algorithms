// const promise = new Promise((resolve, reject) => {
//   // resolve(134);
//   reject('err')
// })

// promise.then((val) => {
//   console.log(val);
// })

// promise.catch((err) => {
//   console.log(err);
// })

// const a = Promise.resolve(123);
// console.log(a);

// function test() {
//   Promise.resolve('123');
// }

// test().then(v => {
//   console.log(v);
// })

// Promise.resolve(123)
// .then((v: number) => {
//   console.log(v);
//   return 3;
// })
// .then((v: number) => {
//   console.log(v);
//   return Promise.reject(new Error('error here'))
//   // throw new Error('erro here');
// })
// .catch((e: Error) => {
//   console.log(e.message);
//   // console.log(e);
//   return 'new'
// })
// .then(v => {
//   console.log(v);
// })

// console.log(new Promise(() => {}));
// console.log(Promise.reject(000));

// function returnPromiseAfter1Second(): Promise<string> {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('hello');
//     }, 1000)
//   })

// }

// returnPromiseAfter1Second().then(v => {
//   console.log(v);
// })

// Promise.resolve(1000)
// .then(n => {
//   console.log(n);
//   return returnPromiseAfter1Second();
// })
// .then(s => {
//   console.log(s);
// })

// import * as fs from 'fs';

// function readFileAsync(filename: string): Promise<any> {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     })
//   })
// }

// readFileAsync('tsconfig.json')
// .then(v => {
//   console.log(v);
// })
// .catch(e => {
//   console.warn(e);
// })

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// delay(1000).then(() => {
//   console.log('hello');
// })

// import * as fs from 'fs';
// import * as util from 'util';

// const readFile = util.promisify(fs.readFile);

// readFile('tsconfig.json1')
// .then((r) => {
//   console.log(r);
// })
// .catch(e => {
//   console.log(e);
// })


// async function t(): Promise<number> {
//   return 3;
// }

// t()
// .then(v => {
//   console.log(v);
// })

// function loadJSONAsync(filename: string): Promise<any> {
//   return readFileAsync(filename)
//   .then(f => {
//     return JSON.parse(f);
//   })
// }

// loadJSONAsync('my_json.json')
// .then(o => {
//   console.log(o);
// })
// .then(() => {
//   return loadJSONAsync('non_exit');
// })
// .then(() => {
//   console.log('non exit');
// })
// .catch((err) => {
//   console.log(err);
// })
// .then(() => {
//   return loadJSONAsync('typescript.ts');
// })
// .catch(err => {
//   console.log(err.message);
//   console.log('after');
// })

// function getItem(id: number): Promise<{id: number}> {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({id});
//     }, 1000);
//   })
// }

// getItem(1)
// .then(res => {
//   console.log(res);
//   return getItem(2)
// })
// .then(res => {
//   console.log(res);
// })

// Promise.all([getItem(1), getItem(2)])
// .then(res => {
//   console.log(res);
// })

// const task1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
// const task2 = new Promise(resolve => setTimeout(() => resolve(2), 3000));

// Promise.race([task1, task2])
// .then(res => {
//   console.log(res);
// })

