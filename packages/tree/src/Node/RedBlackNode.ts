import { DSObjectProps } from "base/src/DSObject"
import { BinaryTreeNode } from "./BinaryTreeNode"

export class RedBlackNode<K = string, V = any> extends BinaryTreeNode<K, V> {
  _color: "red" | "black" = "red"
  constructor(
    key: K,
    value: V,
    parent: RedBlackNode<K, V> | null = null,
    left: RedBlackNode<K, V> | null = null,
    right: RedBlackNode<K, V> | null = null,
    option: DSObjectProps = { __DS__TYPE: "RedBlackNode" }
  ) {
    super(key, value, parent, left, right, option)
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
