"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.Container = function () {
        return this.container;
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.enqueue = function (item) {
        this.container.push(item);
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.size());
queue.dequeue();
console.log(queue.Container());
queue.enqueue(12123);
console.log(queue.Container());
