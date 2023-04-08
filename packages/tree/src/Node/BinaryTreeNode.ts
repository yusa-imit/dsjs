import { DSObject } from "base"
import { DSObjectProps } from "base/src/DSObject"

import crypto from "crypto"

export class BinaryTreeNode<V = any, K = string> extends DSObject {
  key: K
  value: V
  _parent: null | this
  _left: null | this
  _right: null | this
  constructor(
    value: V,
    key?: K,
    parent: BinaryTreeNode<V, K> | null = null,
    left: BinaryTreeNode<V, K> | null = null,
    right: BinaryTreeNode<V, K> | null = null,
    option: DSObjectProps = { __DS__TYPE: "BinaryTreeNode" }
  ) {
    super(option)
    this.value = value
    this.key = key ?? (crypto.randomUUID() as K)
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
