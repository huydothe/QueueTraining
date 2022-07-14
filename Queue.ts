export interface IQueue<T> {
    enqueue(item:T);
    dequeue();
    size():number
}