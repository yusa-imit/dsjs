import { DSObject } from "base"
import { DSObjectProps } from "base/src/DSObject"
export class BinaryTreeNode<K = string, V = any> extends DSObject {
  key: K
  value: V
  _parent: null | this
  _left: null | this
  _right: null | this
  constructor(
    key: K,
    value: V,
    parent: BinaryTreeNode<K, V> | null = null,
    left: BinaryTreeNode<K, V> | null = null,
    right: BinaryTreeNode<K, V> | null = null,
    option: DSObjectProps = { __DS__TYPE: "BinaryTreeNode" }
  ) {
    super(option)
    this.key = key
    this.value = value
    this.parent = parent as this
    this.left = left as this
    this.right = right as this
  }
  private checkNode(node: any) {
    if (node === null) return true
    if (node.__DS__TYPE && node.__DS__TYPE === this.__DS__TYPE) return true
    else
      throw new Error(
        "Invalid parameter. Do not try to assign Non-node type in node"
      )
  }
  get parent(): null | this {
    return this._parent
  }
  set parent(node: null | this) {
    if (this.checkNode(node)) this._parent = node
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
