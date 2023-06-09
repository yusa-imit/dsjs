import { DSObjectProps } from "base/src/DSObject"
import { SingleLinkedListNode } from "../SingleLinkedList/SingleLinkedListNode"
export class DoubleLinkedListNode<T> extends SingleLinkedListNode<T> {
  protected _prevNode: this | null
  constructor(
    value: T,
    prevNode = null,
    nextNode = null,
    options: DSObjectProps = { __DS__TYPE: "DoubleLinkedListNode" }
  ) {
    super(value, nextNode, options)
    this.prevNode = prevNode
  }
  get prevNode() {
    return this._prevNode
  }
  set prevNode(node: this | null) {
    this._prevNode = node
  }
  detach() {
    this.nextNode = null
    this.prevNode = null
  }
}
