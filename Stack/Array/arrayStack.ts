class Stack<Type> {
  nodes :any = [];
  length = 0;
  top = -1;

  constructor(size?: number)  {
    this.size = size || 10
  }

  isFull(): boolean {
    return this.length === this.size;
  }

  isEmpty(): boolean {
    return this.top === -1;
  }

  push(data: Type): number {
    this.top++;
    this.length++;
    this.nodes[this.top] = data;
    this.verbose()
    return this.length;
  }

  pop(): Type{
    const poped = this.nodes[this.top];
    this.length--;
    this.top--;
    this.nodes.length =  this.length;
    this.verbose()
    return this.length;
  }

  peek(): Type {
    const peeked = this.nodes[this.top];
    this.verbose()
    return peeked;
  }

  verbose() {
    console.log(this.nodes)
  }

}



const stack = new Stack(10)
console.log("isFull: ",stack.isFull())
console.log("isEmpty: ",stack.isEmpty())
console.log("push",stack.push(2))
console.log(stack.push(4))
console.log(stack.push(5))
console.log(stack.push(9))
console.log(stack.push(3))
console.log("peek",stack.peek())
console.log("pop",stack.pop())
console.log(stack.pop())
console.log("isFull",stack.isFull())
console.log("push",stack.push(12))
console.log("peek",stack.peek()
