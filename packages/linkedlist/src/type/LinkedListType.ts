import { DSObject } from "base/src/DSObject"
import { DSObjectProps } from "../../../base/src/DSObject"
export abstract class LinkedListType<T, N> extends DSObject {
  private head: N | null
  private tail: N | null
  public length: number = 0
  constructor(objProps: DSObjectProps) {
    super(objProps)
  }
  front() {
    return this.head
  }
  back() {
    return this.tail
  }
  abstract checkNode(node: N): boolean
  protected abstract _pushFront(node: N): void
  abstract pushFront(arr: T[]): void
  abstract pushFront(value: T): void
  abstract pushFront(node: N): void
  abstract pushFront(...values: T[] | N[]): void
  protected abstract _pushBack(node: N): void
  abstract pushBack(arr: T[]): void
  abstract pushBack(value: T): void
  abstract pushBack(node: N): void
  abstract pushBack(...values: T[] | N[]): void
  abstract popBack(): N
  abstract popFront(): N
  abstract insert(): void
}
