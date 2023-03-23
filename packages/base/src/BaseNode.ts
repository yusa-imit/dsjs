import { BaseObject } from "./BaseObject"

export interface BaseNodeConstructorOptions {
  __DS__TYPE?: string
}

export class BaseNode<T = any> extends BaseObject {
  protected _value: T
  protected _nextNode: this | null
  constructor(
    value: T,
    nextNode: any | null,
    options: BaseNodeConstructorOptions
  ) {
    super(options.__DS__TYPE ?? "BaseNode")
    this.value = value
    this.nextNode = nextNode
  }
  get nextNode() {
    return this._nextNode
  }
  set nextNode(node) {
    this._nextNode = node
  }
  get value() {
    return this._value
  }
  set value(value: T) {
    this._value = value
  }
}
