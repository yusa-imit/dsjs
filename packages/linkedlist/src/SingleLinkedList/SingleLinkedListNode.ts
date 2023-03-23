import { BaseNode, BaseObject } from "base"
import { BaseNodeConstructorOptions } from "base/src/BaseNode"

export class SingleLinkedListNode<T> extends BaseNode<T> {
  protected _nextNode: this | null
  constructor(
    value: T,
    nextNode: SingleLinkedListNode<T> | null = null,
    options: BaseNodeConstructorOptions = { __DS__TYPE: "SingleLinkedListNode" }
  ) {
    super(value, nextNode, options)
  }
  set nextNode(node: this | null) {
    if (node !== null && !(node instanceof SingleLinkedListNode)) {
      throw new Error("Invalid parameters.")
    }
    this._nextNode = node
  }
}
