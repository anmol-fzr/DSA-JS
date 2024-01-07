interface IListNode {
  data: number;
  next: IListNode | null;
}

class ListNode  {
  data: number ;
  next: IListNode | null;

  constructor(data: number, next?: IListNode) {
    this.data = data;
    this.next = next || null;
  }
}

interface ILinkedList {
  head: ILinkedList | null;
  length: number;

  append(data: number): number;
  traverse(): void;
}

class LinkedList {
  head:IListNode | null = null;
  length = 0;

  append(data: number) {
    let temp = this.head;
    if (temp === null) {
      this.head = new ListNode(data);
      this.length++;
      return this.length;
    }
    while (temp !== null) {
      if (temp.next === null) {
        temp.next = new ListNode(data);
        break;
      }
      temp = temp.next;
    }
    this.length++;
    return this.length;
  }

  traverse() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log("\n");
  }
}
export type { IListNode, ILinkedList }
export default LinkedList
