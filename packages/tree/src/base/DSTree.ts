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
  abstract insert(key_values: [K, V][]): void
  abstract insert(key_value: [K, V]): void
  abstract insert(...nodes: N[]): void
  abstract insert(nodes: N[]): void
  abstract insert(node: N): void

  abstract delete(...keys: K[]): void
  abstract delete(keys: K[]): void
  abstract delete(key: K): void

  abstract get(key: K): N | null

  abstract min(): K | null
  abstract max(): K | null

  abstract deleteMin(): K | null
  abstract deleteMax(): K | null

  abstract keys(): IterableIterator<K>
  abstract keysAsArray(): K[]
  abstract values(): IterableIterator<V>
  abstract valuesAsArray(): V[]
  abstract nodes(): IterableIterator<N>
  abstract nodesAsArray(): N[]

  abstract detachTree(key: K): this
}
