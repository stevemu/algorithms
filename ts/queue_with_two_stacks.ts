// https://www.youtube.com/watch?v=7ArHz8jPglw&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=2

class Queue<T> {
    newestOnTop: T[] = []
    oldestOnTop: T[] = []

    push(val: T) {
        this.newestOnTop.push(val);
    }

    pop(): T {
        this.shiftStacks();
        return this.oldestOnTop.pop();
    }

    shiftStacks() {
        if (this.oldestOnTop.length == 0) {
            while (this.newestOnTop.length !== 0) {
                this.oldestOnTop.push(this.newestOnTop.pop());
            }
        }
    }
}

const q = new Queue<number>();

q.push(1);
q.push(2);
q.push(3);
q.push(4);

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());