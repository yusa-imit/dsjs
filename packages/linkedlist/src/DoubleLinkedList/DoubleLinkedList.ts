import { LinkedListType } from "../type/LinkedListType"
import { DoubleLinkedListNode } from "./DoubleLinkedListNode"
export class DoubleLinkedList<T> extends LinkedListType<
  T,
  DoubleLinkedListNode<T>
> {
  public length: number = 0
  constructor(arr: DoubleLinkedListNode<T>[])
  constructor(arr: T[])
  constructor(node: DoubleLinkedListNode<T>)
  constructor(value: T)
  constructor(...values: T[] | DoubleLinkedListNode<T>[])
  constructor() {
    super({ __DS__TYPE: "DoubleLinkedList" })
    this.pushBack(...arguments)
  }
  checkNode(node: DoubleLinkedListNode<T>): boolean {
    if (node.__DS__TYPE && node.__DS__TYPE === "DoubleLinkedListNode") {
      return true
    }
    return false
  }
  protected _pushFront(node: DoubleLinkedListNode<T>): void {
    if (!this.checkNode(node)) throw new Error("Invalid parameter")
    const prevHead = this.head
    this.head = node
    if (prevHead === null) {
      return
    }
    this.head.nextNode = prevHead
    this.head.prevNode = null
    prevHead.prevNode = this.head
    this.length++
  }
  pushFront(arr: DoubleLinkedListNode<T>[]): void
  pushFront(arr: T[]): void
  pushFront(value: T): void
  pushFront(node: DoubleLinkedListNode<T>): void
  pushFront(...values: T[] | DoubleLinkedListNode<T>[]): void
  pushFront(): void {
    if (arguments.length === 1) {
      if (this.checkNode(arguments[0])) {
        this._pushFront(arguments[0])
      } else if (Array.isArray(arguments[0])) {
        if (arguments[0].length === 0) throw new Error("Invalid parameter")
        arguments[0].reverse().forEach((v) => {
          if (v instanceof DoubleLinkedListNode) this._pushFront(v)
          else this._pushFront(new DoubleLinkedListNode(v))
        })
      }
    } else {
      for (var i = arguments.length - 1; i >= 0; i--) {
        if (arguments[i] instanceof DoubleLinkedListNode)
          this._pushFront(arguments[i])
        else this._pushFront(new DoubleLinkedListNode(arguments[i]))
      }
    }
  }
  protected _pushBack(node: DoubleLinkedListNode<T>): void {
    if (!this.checkNode(node)) throw new Error("Invalid parameter")
    const prevTail = this.tail
    this.tail = node
    if (prevTail === null) return
    this.tail.nextNode = null
    this.tail.prevNode = prevTail
    prevTail.nextNode = this.tail
    this.length++
  }
  pushBack(arr: DoubleLinkedListNode<T>[]): void
  pushBack(arr: T[]): void
  pushBack(value: T): void
  pushBack(node: DoubleLinkedListNode<T>): void
  pushBack(...values: T[] | DoubleLinkedListNode<T>[]): void
  pushBack(): void {
    if (arguments.length === 1) {
      if (this.checkNode(arguments[0])) {
        this._pushBack(arguments[0])
      } else if (Array.isArray(arguments[0])) {
        if (arguments[0].length === 0) throw new Error("Invalid parameter")
        arguments[0].forEach((v) => {
          if (v instanceof DoubleLinkedListNode) this._pushBack(v)
          else this._pushBack(new DoubleLinkedListNode(v))
        })
      }
    } else {
      for (var i = arguments.length - 1; i >= 0; i--) {
        if (arguments[i] instanceof DoubleLinkedListNode)
          this._pushBack(arguments[i])
        else this._pushBack(new DoubleLinkedListNode(arguments[i]))
      }
    }
  }
  popBack(): DoubleLinkedListNode<T> | null {
    const prevTail = this.tail
    this.tail = prevTail ? prevTail.prevNode : prevTail
    if (this.tail !== null) {
      this.tail.nextNode = null
    }
    if (prevTail !== null) {
      prevTail.detach()
    }
    this.length--
    return prevTail
  }
  popFront(): DoubleLinkedListNode<T> | null {
    const prevHead = this.head
    this.head = prevHead ? prevHead.nextNode : prevHead
    if (this.head !== null) {
      this.head.prevNode = null
    }
    if (prevHead !== null) {
      prevHead.detach()
    }
    this.length--
    return prevHead
  }
  insert(): void {
    throw new Error("Method not implemented.")
  }
}
