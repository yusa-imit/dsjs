import { DSObject } from "base"

interface SkipListNodeLayerInfo<T> {
  nextNode: null | SkipListNode<T>
  prevNode: null | SkipListNode<T>
}
export class SkipListNode<T> extends DSObject {
  protected _value: T
  protected _nodes: Map<number, SkipListNodeLayerInfo<T>> = new Map()
  constructor(value: T)
  constructor(value: T, nodeInfo: SkipListNodeLayerInfo<T>)
  constructor(value: T, nodeLayerInfo: Map<number, SkipListNodeLayerInfo<T>>)
  constructor() {
    super({ __DS__TYPE: "SkipListNode" })
    this.value = arguments[0]
    if (arguments.length === 1) {
      this._nodes.set(0, { nextNode: null, prevNode: null })
    } else {
      if (arguments[1] instanceof Map) {
        this._nodes = arguments[1]
      } else {
        this._nodes.set(0, arguments[1])
      }
    }
  }
  get value() {
    return this._value
  }
  set value(value: T) {
    this._value = value
  }
  get Node() {
    return this._nodes
  }
  get length() {
    return this._nodes.size
  }
  getNodeLayerInfo(layer: number) {
    return this._nodes.get(layer) ?? null
  }
  setNodeLayerInfo(layer: number, nodeInfo: SkipListNodeLayerInfo<T>) {
    this._nodes.set(layer, nodeInfo)
  }
  detach() {
    this._nodes = new Map()
    this._nodes.set(0, { nextNode: null, prevNode: null })
  }
}
