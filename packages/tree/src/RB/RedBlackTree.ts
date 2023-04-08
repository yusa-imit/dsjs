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

  insert(...values: K[]): void
  insert(values: K[]): void
  insert(value: K): void
  insert(...nodes: RedBlackNode<K, V>[]): void
  insert(nodes: RedBlackNode<K, V>[]): void
  insert(node: RedBlackNode<K, V>): void
  insert(node?: unknown, ...rest: unknown[]): void {
    throw new Error("Method not implemented.")
  }
  delete(...keys: V[]): void
  delete(keys: V[]): void
  delete(key: V): void
  delete(key?: unknown, ...rest: unknown[]): void {
    throw new Error("Method not implemented.")
  }
  get(key: V): RedBlackNode<K, V> | null {
    throw new Error("Method not implemented.")
  }
  min(): V | null {
    throw new Error("Method not implemented.")
  }
  max(): V | null {
    throw new Error("Method not implemented.")
  }
  deleteMin(): V | null {
    throw new Error("Method not implemented.")
  }
  deleteMax(): V | null {
    throw new Error("Method not implemented.")
  }
  keys(): IterableIterator<V> {
    throw new Error("Method not implemented.")
  }
  keysAsArray(): V[] {
    throw new Error("Method not implemented.")
  }
  values(): IterableIterator<K> {
    throw new Error("Method not implemented.")
  }
  valuesAsArray(): K[] {
    throw new Error("Method not implemented.")
  }
  nodes(): IterableIterator<RedBlackNode<K, V>> {
    throw new Error("Method not implemented.")
  }
  nodesAsArray(): RedBlackNode<K, V>[] {
    throw new Error("Method not implemented.")
  }
  detachTree(key: V): this {
    throw new Error("Method not implemented.")
  }
}
