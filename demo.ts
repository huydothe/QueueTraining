import {IQueue} from "./Queue";

class Queue<T> implements IQueue<T>{
    container:T[]=[];

    Container(){
        return this.container;
    }
    dequeue() {
        return this.container.shift();
    }

    enqueue(item: T) {
        this.container.push(item);
    }

    size(): number {
        return this.container.length;
    }
}

let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.size());
queue.dequeue();
console.log(queue.Container());
queue.enqueue(12123);
console.log(queue.Container());
