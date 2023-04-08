import { DSIterableIterator } from "base/src/DSIterableIterator"
import { DSTree } from "../base/DSTree"
import { BinaryTreeNode } from "../Node/BinaryTreeNode"
import { DEFAULT_COMPARE_FUNCTION } from "../utils/compareFunctions"

interface BSTOptions<K> {
  deepCompareObjectOnDefaultCompareFunction?: boolean
  compareFunction?: (a: K, b: K) => number
}

export class BST<K = string, V = any>
  extends DSTree<K, V, BinaryTreeNode<K, V>>
  implements Iterable<BinaryTreeNode<K, V>>
{
  [Symbol.iterator]() {
    return new DSIterableIterator(this.nodes())
  }
  private _nodeMap = new Map<K, BinaryTreeNode<K, V>>()
  protected _compareFunc: (a: K, b: K) => number
  constructor(
    options: BSTOptions<K> = { deepCompareObjectOnDefaultCompareFunction: true }
  ) {
    super({ __DS__TYPE: "BST" })
    if (options?.compareFunction) this._compareFunc = options.compareFunction
    else {
      if (
        !options?.compareFunction &&
        options?.deepCompareObjectOnDefaultCompareFunction
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
    let current = this.root
    if (current === null) {
      this.root = node
      return
    } else {
      while (true) {
        let compared = this._compareFunc(current.key, node.key)
        // prev will always be BinaryTreeNode unless root is null
        // But if root is null, loop will not be operated
        if (compared < 0) {
          if (current.left === null) {
            current.left = node
            break
          }
          current = current.left
        } else {
          if (current.right === null) {
            current.right = node
            break
          }
          current = current.right
        }
      }
      node.parent = current
    }
    this._setNodeMap(node)
    this.length++
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
  private _findSubMin(node: BinaryTreeNode<K, V>): BinaryTreeNode<K, V> {
    let cur = node
    while (true) {
      if (cur.left === null) break
      else cur = cur.left
    }
    return cur
  }
  private _findSubMax(node: BinaryTreeNode<K, V>): BinaryTreeNode<K, V> {
    let cur = node
    while (true) {
      if (cur.right === null) break
      else cur = cur.right
    }
    return cur
  }
  private _replace(node: BinaryTreeNode<K, V>) {
    const left = node.left
    const right = node.right
    const parent = node.parent
    const direction =
      parent === null ? "root" : parent.left === node ? "left" : "right"
    // Have no child
    if (left === null && right === null) {
      // parameter node is root then root=null
      if (parent === null) {
        this.root = null
      } else if (direction === "left") parent.left = null
      else parent.right = null
    }
    // Have one child
    else if (left === null || right === null) {
      // Find min value in right sub tree
      if (left === null) {
        const target = this._findSubMin(right as BinaryTreeNode<K, V>)
        // Target's parents will be node because node is not root
        ;(target.parent as BinaryTreeNode<K, V>).left = null
        target.parent = parent
        target.right = right
      }
      // Find max value in left sub tree
      else {
        const target = this._findSubMax(left)
        ;(target.parent as BinaryTreeNode<K, V>).right = null
        target.parent = parent
        target.left = left
      }
    }
    // Have Two child
    else {
      const target = this._findSubMax(left)
      ;(target.parent as BinaryTreeNode<K, V>).right = null
      target.parent = parent
      target.left = left
    }
  }
  private _delete(key: K): void {
    const node = this.get(key)
    if (node === null) return
    this._replace(node)
    this.length--
  }
  delete(...keys: K[]): void
  delete(keys: K[]): void
  delete(key: K): void
  delete(): void {
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
      arguments[0].forEach((v) => this._delete(v))
    } else {
      for (let i = 0; i < arguments.length; i++) {
        this._delete(arguments[0])
      }
    }
  }
  get(key: K): BinaryTreeNode<K, V> | null {
    const node = this._nodeMap.get(key)
    return node || null
  }
  min(): K | null {
    if (this.root === null) return null
    return this._findSubMin(this.root).key
  }
  max(): K | null {
    if (this.root === null) return null
    return this._findSubMax(this.root).key
  }
  deleteMin(): K | null {
    const key = this.min()
    if (key !== null) {
      this.delete(this.get(key) as K)
    }
    return key
  }
  deleteMax(): K | null {
    const key = this.max()
    if (key !== null) {
      this.delete(this.get(key) as K)
    }
    return key
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
