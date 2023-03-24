import { DSObject, DSObjectProps } from "./DSObject"

export class BaseNode<T = any> extends DSObject {
  protected _value: T
  protected _nextNode: this | null
  constructor(value: T, nextNode: any | null, options: DSObjectProps) {
    super(options || { __DS__TYPE: "BaseNode" })
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
