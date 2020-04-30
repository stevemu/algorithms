function Mammal() {
    this.bloodTemp = "warm";
}

function Carnivore() {

}

function Lion(name) {
    Mammal.call(this);
    this.name = name;
}

Mammal.prototype.growHair = function() {
    console.log('my hair is growing');
}

console.log(Carnivore.prototype);

Carnivore.prototype = Object.create(Mammal.prototype);
console.log(Carnivore.prototype);

Carnivore.prototype.eatMeat = function() {
    console.log("Mmm.Meat");
}

Lion.prototype = Object.create(Carnivore.prototype);

Lion.prototype.pride = function() {
    console.log('I am king of the jungle');
}

// let charlie = new Lion('charlie');
// charlie.growHair()
// charlie.eatMeat()
// charlie.pride()
// console.log(charlie.bloodTemp);
