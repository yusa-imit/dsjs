import { DSObject } from "base"
import { DSObjectProps } from "../../../base/src/DSObject"

export abstract class DSTree<K, V, N> extends DSObject {
  root: N | null = null
  length: number
  height: number
  constructor(props: DSObjectProps = { __DS__TYPE: "DSTree" }) {
    super(props)
  }
  abstract insert(...key_values: [K, V][]): void
  abstract insert(key_value: [K, V]): void
  abstract insert(...nodes: N[]): void
  abstract insert(node: N): void

  abstract delete(...key_values: [K, V][]): void
  abstract delete(key_value: [K, V]): void

  abstract get(key: K): N | null

  abstract min(): K
  abstract max(): K

  abstract deleteMin(): K
  abstract deleteMax(): K

  abstract keys(): IterableIterator<K>
  abstract values(): IterableIterator<V>
  abstract nodes(): IterableIterator<N>

  abstract detachTree(key: K): this
}
