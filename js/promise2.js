// promise

// function promiseTest() {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         //     resolve('steve');
//         // }, 3000);

//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send();

//     })
// }

// promiseTest().then((name) => {
//     console.log('finished promise ' + name);
// })

// callback

// function cbExample(successCb, errorCb) {
//     setTimeout(() => {
//         successCb('steve');
//     }, 2000);
// }

// cbExample((name) => {
//     console.log('success ' + name);
// }, () => {
//     console.log('error');
// })


const xhr = new XMLHttpRequest();
xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
xhr.onload = (data) => {
    console.log('finished loading');
    console.log(data);
}
xhr.onerror = () => {

}
xhr.send();