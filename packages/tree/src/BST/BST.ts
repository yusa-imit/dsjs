import { DSIterableIterator } from "base/src/DSIterableIterator"
import { DSTree } from "../base/DSTree"
import { BinaryTreeNode } from "../Node/BinaryTreeNode"

export class BST<K = string, V = any> extends DSTree<
  K,
  V,
  BinaryTreeNode<K, V>
> {
  private _nodeMap = new Map<K, BinaryTreeNode<K, V>>()
  constructor() {
    super({ __DS__TYPE: "BST" })
  }
  insert(...key_values: [K, V][]): void
  insert(key_value: [K, V]): void
  insert(...nodes: BinaryTreeNode<K, V>[]): void
  insert(node: BinaryTreeNode<K, V>): void
  insert(): void {
    throw new Error("Method not implemented.")
  }
  delete(...key_values: [K, V][]): void
  delete(key_value: [K, V]): void
  delete(): void {
    throw new Error("Method not implemented.")
  }
  get(key: K): BinaryTreeNode<K, V> | null {
    throw new Error("Method not implemented.")
  }
  min(): K {
    throw new Error("Method not implemented.")
  }
  max(): K {
    throw new Error("Method not implemented.")
  }
  deleteMin(): K {
    throw new Error("Method not implemented.")
  }
  deleteMax(): K {
    throw new Error("Method not implemented.")
  }
  keys() {
    return this._nodeMap.keys()
  }
  values() {
    return new DSIterableIterator(
      Array.from(this._nodeMap.values(), (v) => {
        return v.value
      })
    )
  }
  nodes() {
    return this._nodeMap.values()
  }
  detachTree(key: K): this {
    throw new Error("Method not implemented.")
  }
}
