import { DSObjectProps } from "base/src/DSObject"
import { BinaryTreeNode } from "./BinaryTreeNode"

export class RedBlackNode<V = any, K = string> extends BinaryTreeNode<V, K> {
  _color: "red" | "black" = "red"
  constructor(
    value: V,
    key?: K,
    parent: RedBlackNode<V, K> | null = null,
    left: RedBlackNode<V, K> | null = null,
    right: RedBlackNode<V, K> | null = null,
    option: DSObjectProps = { __DS__TYPE: "RedBlackNode" }
  ) {
    super(value, key, parent, left, right, option)
  }
  get color() {
    return this._color
  }
  set color(color: "red" | "black") {
    if (color !== "red" && color !== "black")
      throw new Error(
        `Red Black Tree node's color cannot be initialized as ${color}`
      )
    this._color = color
  }
  toggleColor() {
    if (this.color === "black") this.color = "red"
    else this.color = "black"
  }
}
