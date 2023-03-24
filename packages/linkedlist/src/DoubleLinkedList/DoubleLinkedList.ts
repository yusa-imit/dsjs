import { DSObject } from "base/src/DSObject"
import { SingleLinkedList } from "../SingleLinkedList/SingleLinkedList"
import { LinkedListType } from "../type/LinkedListType"
import { DoubleLinkedListNode } from "./DoubleLinkedListNode"
export class DoubleLinkedList<T> extends LinkedListType<
  T,
  DoubleLinkedListNode<T>
> {
  checkNode(node: DoubleLinkedListNode<T>): boolean {
    throw new Error("Method not implemented.")
  }
  protected _pushFront(node: DoubleLinkedListNode<T>): void {
    throw new Error("Method not implemented.")
  }
  pushFront(arr: T[]): void
  pushFront(value: T): void
  pushFront(node: DoubleLinkedListNode<T>): void
  pushFront(...values: T[] | DoubleLinkedListNode<T>[]): void
  pushFront(): void {
    throw new Error("Method not implemented.")
  }
  protected _pushBack(node: DoubleLinkedListNode<T>): void {
    throw new Error("Method not implemented.")
  }
  pushBack(): void {
    throw new Error("Method not implemented.")
  }
  popBack(): DoubleLinkedListNode<T> {
    throw new Error("Method not implemented.")
  }
  popFront(): DoubleLinkedListNode<T> {
    throw new Error("Method not implemented.")
  }
  insert(): void {
    throw new Error("Method not implemented.")
  }
  public length: number
  constructor() {
    super({ __DS__TYPE: "DoubleLinkedList" })
  }
}
