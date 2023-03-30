import { DSObject } from "./DSObject"
export class DSIterableIterator<T>
  extends DSObject
  implements IterableIterator<T>
{
  _origin: T[]
  _index = 0
  constructor(origin: IterableIterator<T> | Array<T>) {
    super({ __DS__TYPE: "DSIterableIterator" })
    if (Array.isArray(origin)) {
      this._origin = origin
    }
    this._origin = Array.from(origin)
  }
  [Symbol.iterator](): IterableIterator<T> {
    return this
  }
  next(): IteratorResult<T, any> {
    const result: IteratorResult<T, any> = {
      value: this._origin[this._index],
      done: this._index === this._origin.length - 1
    }
    this._index++
    return result
  }
  return(value?: T): IteratorResult<T, any> {
    if (arguments.length === 0) {
      return {
        value: this._origin[this._index],
        done: true
      }
    }
    const exists = this._origin.findIndex((v) => v === value)
    if (exists >= 0) {
      return {
        value: this._origin[this._index],
        done: true
      }
    } else {
      return {
        value: null,
        done: true
      }
    }
  }
  throw(e?: Error): IteratorResult<T, any> {
    return {
      value: e || new Error("Error in DSIterableIterator"),
      done: true
    }
  }
}
