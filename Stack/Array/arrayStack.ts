class Stack<Type> {
  nodes = new Array<Type>()
  length = 0;
  size = 10
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

  push(data: Type): number|void {
    if (this.isFull()){
      console.log("stack full!!!")
      return ;
    }
    this.top++;
    this.length++;
    this.nodes[this.top] = data;
    this.verbose()
    return this.length;
  }

  pop(): Type|void  {
    const popped = this.peek()
    this.length--;
    this.top--;
    this.nodes.length =  this.length;
    this.verbose()
    return popped;
  }

  peek(): Type |void {
    if(this.isEmpty()){
      console.log("stack empty!!!")
      return;
    }
    const peeked = this.nodes[this.top];
    this.verbose()
    return peeked;
  }

  verbose() {
    // console.log(this.nodes)
  }

}

export default Stack
