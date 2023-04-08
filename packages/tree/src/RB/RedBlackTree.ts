import { DSIterableIterator } from "base/src/DSIterableIterator"
import { RedBlackNode } from "../Node/RedBlackNode"
import { DSTree } from "../base/DSTree"
import { DEFAULT_COMPARE_FUNCTION } from "../utils/compareFunctions"

interface RedBlackTreeOptions<K> {
  deepCompareObjectOnDefaultCompareFunction?: boolean
  compareFunction?: (a: K, b: K) => number
}

export class RedBlackTree<K, V>
  extends DSTree<K, V, RedBlackNode<K, V>>
  implements Iterable<RedBlackNode<K, V>>
{
  private _nodeMap = new Map<K, RedBlackNode<K, V>>()
  protected _compareFunc: (a: K, b: K) => number
  constructor(
    options: RedBlackTreeOptions<K> = {
      deepCompareObjectOnDefaultCompareFunction: true
    }
  ) {
    super({ __DS__TYPE: "RedBlackTree" })
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
  [Symbol.iterator]() {
    return new DSIterableIterator(this.nodes())
  }
  insert(...key_values: [K, V][]): void
  insert(key_values: [K, V][]): void
  insert(key_value: [K, V]): void
  insert(...nodes: RedBlackNode<K, V>[]): void
  insert(nodes: RedBlackNode<K, V>[]): void
  insert(node: RedBlackNode<K, V>): void
  insert(): void {
    throw new Error("Method not implemented.")
  }
  delete(...keys: K[]): void
  delete(keys: K[]): void
  delete(key: K): void
  delete(): void {
    throw new Error("Method not implemented.")
  }
  get(key: K): RedBlackNode<K, V> | null {
    throw new Error("Method not implemented.")
  }
  min(): K | null {
    throw new Error("Method not implemented.")
  }
  max(): K | null {
    throw new Error("Method not implemented.")
  }
  deleteMin(): K | null {
    throw new Error("Method not implemented.")
  }
  deleteMax(): K | null {
    throw new Error("Method not implemented.")
  }
  keys(): IterableIterator<K> {
    throw new Error("Method not implemented.")
  }
  keysAsArray(): K[] {
    throw new Error("Method not implemented.")
  }
  values(): IterableIterator<V> {
    throw new Error("Method not implemented.")
  }
  valuesAsArray(): V[] {
    throw new Error("Method not implemented.")
  }
  nodes(): IterableIterator<RedBlackNode<K, V>> {
    throw new Error("Method not implemented.")
  }
  nodesAsArray(): RedBlackNode<K, V>[] {
    throw new Error("Method not implemented.")
  }
  detachTree(key: K): this {
    throw new Error("Method not implemented.")
  }
}
