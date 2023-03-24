import { BaseNode, DSObject } from "base"
import { DSObjectProps } from "base/src/DSObject"

export class SingleLinkedListNode<T> extends BaseNode<T> {
  protected _nextNode: this | null
  constructor(
    value: T,
    nextNode: SingleLinkedListNode<T> | null = null,
    options: DSObjectProps = { __DS__TYPE: "SingleLinkedListNode" }
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
