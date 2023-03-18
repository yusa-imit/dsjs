import { SingleLinkedListNode } from "./../../src/SingleLinkedList/SingleLinkedListNode"

describe("SingleLinkedListNode test", () => {
  const Node1 = new SingleLinkedListNode("node1")
  const Node2 = new SingleLinkedListNode("node2")
  Node1.nextNode = Node2
  test("Base Object", () => {
    expect(Node1.__DS__TYPE).toEqual("SingleLinkedList")
  })
  test("Have Proper Value", () => {
    expect(Node1.value).toEqual("node1")
  })
  test("Head Node Have Proper Node", () => {
    expect(Node1.nextNode).toEqual(Node2)
  })
  test("Tail Node Have Null", () => {
    expect(Node2.nextNode).toEqual(null)
  })
})
