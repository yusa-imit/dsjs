import { DSObject } from "base"
export class BinaryTreeNode<K = string, V = any> extends DSObject {
  key: K
  value: V
  _left: null | this
  _right: null | this
  constructor(key: K, value: V, left: any = null, right: any = null) {
    super({ __DS__TYPE: "BinaryTreeNode" })
    this.key = key
    this.value = value
    this.left = left
    this.right = right
  }
  private checkNode(node: any) {
    if (node === null) return true
    if (node instanceof BinaryTreeNode) return true
    else
      throw new Error(
        "Invalid parameter. Do not try to assign Non-node type in node"
      )
  }
  get left(): null | this {
    return this._left
  }
  set left(node: null | this) {
    if (this.checkNode(node)) this._left = node
  }
  get right(): null | this {
    return this._right
  }
  set right(node: null | this) {
    if (this.checkNode(node)) this._right = node
  }
}
