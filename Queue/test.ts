import { default as ArrayQueue } from "./Array/arrayQueue"
import IQueue from "./IQueue"

function tester(name:string, tests:number,Queue: IQueue,random?:boolean){
  const queue = new Queue<number>(tests)
  
  console.time(name)

  for (let i =0;i< tests;i++){
    if (random){
      const val = Math.round( i+Math.random()*tests-1)
      queue.enqueue(val)
    }
    else {
      queue.enqueue(i+1)
    }
  }

  for (let i =0;i< tests;i++){
    queue.dequeue()
  }
  console.timeEnd(name)
}

const tests = [
  {
    iteration: 10000,
    test:{
      name:"Non Random",
      vals: [
        {
          name:"array",
          ds:ArrayQueue,
          random: false
        }
      ]
    }
  }
]


tests.map(({iteration,test})=>{
  console.log(test.name)
  test.vals.map(({name,ds,random})=>{
    tester(name,iteration,ds,random)
  })
})

