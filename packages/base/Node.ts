export class BaseNode<T = any> {
  private value: T
  private next_node: null | BaseNode
  constructor(value: T, next_node: null | BaseNode = null) {
    this.value = value
    this.next_node = null
  }
  setNextNode(next_node: BaseNode) {
    this.next_node = next_node
  }
  getNextNode() {
    return this.next_node
  }
  getValue() {
    return this.value
  }
}
