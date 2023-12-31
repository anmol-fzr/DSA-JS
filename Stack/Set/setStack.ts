class Stack<Type> {
  nodes = new Set<Type>();
  length = 0;
  size = 10;
  

  constructor(size?:number){
    this.size = size || 10;  
  }
  
  isEmpty():boolean {
    return this.nodes.size=== 0
  }

  isFull():boolean {
    return this.length === this.size;
  }
  
  push(data: Type):number | void {
    if (this.isFull()){
      console.log("Stack Full!!!")
      return ;
    }
    this.length++; 
    this.nodes.add(data)
    this.verbose()
    return this.length
  }

  pop(): Type | void {
    if (this.isEmpty()){
      console.log("Stack Empty!!!")
      return ;
    }
    let popped;

    for (const value of this.nodes) {
      popped = value;
    }
    this.length--;  
    this.nodes.delete(popped)
    this.verbose()
    return popped
  }


  peek():Type| void {
    if (this.isEmpty()){
      console.log("Stack Empty")
    }
    return this.#array()[this.nodes.size - 1]
  }

  #array(): Type[] {
    return Array.from(this.nodes)
  }
  verbose() {
    // console.log(this.#array())
  }
}

export default Stack
