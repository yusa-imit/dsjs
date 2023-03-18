import { BaseObject } from "base"

export default class Dequeue<T>
  extends BaseObject
  implements IterableIterator<T>
{
  private head: T[] = []
  private tail: T[] = []
  length: number = 0
  constructor(values: T[]) {
    super("Deque")
  }
  private _updateLength() {
    this.length = this.head.length + this.tail.length
  }
  shift() {}
  unshift() {}
  push() {}
  pop() {}
  [Symbol.iterator](): IterableIterator<T> {
    throw new Error("Method not implemented.")
  }
  next(...args: [] | [undefined]): IteratorResult<T, any> {
    throw new Error("Method not implemented.")
  }
  return?(value?: any): IteratorResult<T, any> {
    throw new Error("Method not implemented.")
  }
  throw?(e?: any): IteratorResult<T, any> {
    throw new Error("Method not implemented.")
  }
}
