class Foo<T> {
    bar: T
}

let FooNumber = Foo as {new(): Foo<number>}

let f = new FooNumber();
f.bar = 3;
console.log(f.bar);