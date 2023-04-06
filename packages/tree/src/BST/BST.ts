import { DSIterableIterator } from "base/src/DSIterableIterator"
import { DSTree } from "../base/DSTree"
import { BinaryTreeNode } from "../Node/BinaryTreeNode"
import { DEFAULT_COMPARE_FUNCTION } from "../utils/compareFunctions"

interface BSTOptions<K> {
  defaultCompareFunctionDeepCompareObject?: boolean
  compareFunction?: (a: K, b: K) => number
}

export class BST<K = string, V = any> extends DSTree<
  K,
  V,
  BinaryTreeNode<K, V>
> {
  private _nodeMap = new Map<K, BinaryTreeNode<K, V>>()
  protected _compareFunc: (a: K, b: K) => number
  constructor(
    options: BSTOptions<K> = { defaultCompareFunctionDeepCompareObject: true }
  ) {
    super({ __DS__TYPE: "BST" })
    if (options?.compareFunction) this._compareFunc = options.compareFunction
    else {
      if (
        !options?.compareFunction &&
        options?.defaultCompareFunctionDeepCompareObject
      ) {
        this._compareFunc = DEFAULT_COMPARE_FUNCTION
      } else this._compareFunc = (a, b) => DEFAULT_COMPARE_FUNCTION(a, b, false)
    }
  }
  private _setNodeMap(node: BinaryTreeNode<K, V>): void {
    this._nodeMap.set(node.key, node)
  }
  private _deleteNodeMap(key: K) {
    this._nodeMap.delete(key)
  }
  private _insert(node: BinaryTreeNode<K, V>): void {
    let prev: null | BinaryTreeNode<K, V> = null
    let current = this.root
    if (this.root === null) {
      this.root = node
    } else {
      let compared = this._compareFunc(this.root.key, node.key)
      while (current !== null) {
        // prev will always be BinaryTreeNode unless root is null
        // But if root is null, loop will not be operated
        prev = current
        if (compared < 0) {
          current = current.left
        } else {
          current = current.right
        }
      }
      if (compared < 0) {
        ;(prev as BinaryTreeNode<K, V>).left = node
      } else {
        ;(prev as BinaryTreeNode<K, V>).right = node
      }
    }
    this._setNodeMap(node)
  }
  insert(...key_values: [K, V][]): void
  insert(key_values: [K, V][]): void
  insert(key_value: [K, V]): void
  insert(...nodes: BinaryTreeNode<K, V>[]): void
  insert(nodes: BinaryTreeNode<K, V>[]): void
  insert(node: BinaryTreeNode<K, V>): void
  insert(): void {
    if (Array.isArray(arguments[0])) {
      const typeDef =
        arguments[0][0].__DS__TYPE &&
        arguments[0][0].__DS__TYPE === "BinaryTreeNode"
      for (let i = 0; i < arguments[0].length; i++) {
        this._insert(
          typeDef
            ? arguments[i]
            : new BinaryTreeNode(arguments[0][i][0], arguments[0][i][1])
        )
      }
    } else {
      const typeDef =
        arguments[0].__DS__TYPE && arguments[0].__DS__TYPE === "BinaryTreeNode"
      for (let i = 0; i < arguments.length; i++) {
        this._insert(
          typeDef
            ? arguments[i]
            : new BinaryTreeNode(arguments[i][0], arguments[i][1])
        )
      }
    }
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
  keysAsArray() {
    return Array.from(this.keys())
  }
  values() {
    const origin = Array.from(this._nodeMap.values(), (v) => v.value)
    return new DSIterableIterator(origin)
  }
  valuesAsArray() {
    return Array.from(this.values())
  }
  nodes() {
    return this._nodeMap.values()
  }
  nodesAsArray() {
    return Array.from(this.nodes())
  }
  detachTree(key: K): this {
    this._deleteNodeMap(key)
    throw new Error("Method not implemented.")
  }
}
