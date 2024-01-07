import IQueue from "../IQueue"

class Queue<Type> implements IQueue<Type>{
  #q :Type[] = [] 
  length:number = 0;
  #size: number = 10;

  constructor(size?: number){
    this.#size = size || 10
  }

  isEmpty():boolean {
    return this.#q.length  === 0;
  }

  isFull():boolean {
    return this.#q.length === this.#size;
  }

  enqueue(data: Type): number | void {
    if (this.isFull()){
      console.log("Queue Full !!!");
      return;
    }
    this.verbose()
    return this.#q.push(data)
  }
  
  dequeue(): Type | void {
    if (this.isEmpty()){
      console.log("Queue Empty !!!")
      return;
    }
    this.verbose()
    return this.#q.shift()
  }

  verbose(){
    // console.log(this.#q)
  }
}

export default Queue;
