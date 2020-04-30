function Student(name) {
    this.name = name;
}

let bob = new Student('bob');

Student.prototype.fly = () => {
    console.log('flying');
}

Student.prototype.detect = () => {
    console.log('I found a mouse');
}

Object.prototype.test = () => {
    console.log('test');
}

// bob.fly()
// console.log(bob.fly());

// let p = Object.getPrototypeOf(Object.getPrototypeOf(bob));
let p = Object.getPrototypeOf(bob);
console.log(p);