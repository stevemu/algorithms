function Student(name) {
    this.name = name;
}
Student.prototype.jump = function() {
    console.log('I am really jumping');
}

Student.prototype.say = function () {
    console.log(`I am ${this.name}`);
}

Object.prototype.jump = function() {
    console.log('I am jumping');
}

Object.prototype.ownFunction = function() {
    
}


let steve = new Student("Steve");
let jing = new Student("Jing");

steve.say();
steve.jump();
