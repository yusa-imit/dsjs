import { BaseNode, BaseObject } from "base"

export class SingleLinkedListNode<T> extends BaseNode<T> {
  protected _nextNode: this | null
  constructor(value: T, nextNode: SingleLinkedListNode<T> | null = null) {
    super(value, nextNode, {})
  }
  set nextNode(node: this | null) {
    if (node !== null && !(node instanceof SingleLinkedListNode)) {
      throw new Error("Invalid parameters.")
    }
    this._nextNode = node
  }
}
