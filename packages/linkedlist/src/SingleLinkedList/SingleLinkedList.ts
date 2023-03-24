import { DSObject } from "base"
import { SingleLinkedListNode } from "./SingleLinkedListNode"

export class SingleLinkedList<T> extends DSObject {
  private head: SingleLinkedListNode<T> | null = null
  private tail: SingleLinkedListNode<T> | null = null
  public length = 0
  constructor(arr: Array<T>)
  constructor(node: SingleLinkedListNode<T>)
  constructor(value: T)
  constructor(...values: T[])
  constructor() {
    super({ __DS__TYPE: "SingleLinkedList" })
    this.pushBack(...arguments)
  }
  front() {
    return this.head
  }
  back() {
    return this.tail
  }
  private checkNode(node: SingleLinkedListNode<T>) {
    if (node.__DS__TYPE && node.__DS__TYPE === "SingleLinkedListNode") {
      return true
    }
    return false
  }
  private _pushFront(node: SingleLinkedListNode<T>) {
    if (!(node instanceof SingleLinkedListNode))
      throw new Error("Invalid parameter.")
    const prevHead = this.head
    this.head = node
    this.head.nextNode = prevHead
    this.length++
  }
  pushFront(arr: T[]): void
  pushFront(value: T): void
  pushFront(node: SingleLinkedListNode<T>): void
  pushFront(...values: T[] | SingleLinkedListNode<T>[]): void
  pushFront() {
    if (arguments.length === 1) {
      if (
        (arguments[0] as SingleLinkedListNode<T>).__DS__TYPE ===
        "SingleLinkedListNode"
      ) {
        this._pushFront(arguments[0])
      } else if (Array.isArray(arguments[0])) {
        if (arguments[0].length === 0) throw new Error("Invalid parameter")
        arguments[0].reverse().forEach((v) => {
          this._pushFront(new SingleLinkedListNode(v))
        })
      } else {
        this._pushFront(new SingleLinkedListNode(arguments[0]))
      }
    } else {
      for (var i = arguments.length - 1; i >= 0; i--) {
        if (arguments[i] instanceof SingleLinkedListNode)
          this._pushFront(arguments[i])
        else this._pushFront(new SingleLinkedListNode(arguments[i]))
      }
    }
  }
  private _pushBack(node: SingleLinkedListNode<T>) {
    if (!this.checkNode(node)) throw new Error("Invalid parameter.")
    if (this.tail === null) {
      if (this.head === null) {
        this.head = node
      }
      this.tail = this.head
    }
    this.tail.nextNode = node
    this.tail = this.tail.nextNode
    this.length++
  }
  pushBack(arr: T[]): void
  pushBack(value: T): void
  pushBack(node: SingleLinkedListNode<T>): void
  pushBack(...values: T[] | SingleLinkedListNode<T>[]): void
  pushBack() {
    if (arguments.length === 1) {
      if (this.checkNode(arguments[0] as SingleLinkedListNode<T>)) {
        this._pushBack(arguments[0])
      } else if (Array.isArray(arguments[0])) {
        if (arguments[0].length === 0) throw new Error("Invalid parameter")
        arguments[0].forEach((v) => {
          this._pushBack(new SingleLinkedListNode(v))
        })
      } else {
        this._pushBack(new SingleLinkedListNode(arguments[0]))
      }
    } else {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof SingleLinkedListNode)
          this._pushBack(arguments[i])
        else this._pushBack(new SingleLinkedListNode(arguments[i]))
      }
    }
  }
  popBack() {
    if (this.head === null || this.tail === null) return null
    const prevTail = this.tail
    if (this.length === 1) {
      this.length--
      this.head = null
      this.tail = null
      return prevTail
    }
    let prev = this.head
    for (var i = 0; i < this.length - 1; i++) {
      prev = prev.nextNode as SingleLinkedListNode<T>
    }
    prev.nextNode = null
    this.tail = prev
    this.length--
    return prevTail
  }
  popFront() {
    if (this.head === null) return null
    const currentHead = this.head
    this.head = currentHead.nextNode
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    this.length--
    return currentHead
  }
  insert() {}
}
