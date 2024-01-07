import { default as ArrayStack } from "./Array/arrayStack"
import { default as SetStack } from "./Set/setStack"


function tester(name:string, tests:number,Stack: any,random?:boolean){
  const stack = new Stack<number>(tests)
  
  console.time(name)

  for (let i =0;i< tests;i++){
    if (random){
      const val = Math.round( i+Math.random()*tests-1)
      stack.push(val)
    }
    else {
      stack.push(i+1)
    }
  }

  for (let i =0;i< tests;i++){
    stack.pop()
  }

  console.timeEnd(name)

  
}
const tests = 2**16-1 
console.log("Non Random")
tester("array",tests,ArrayStack)
// tester("set",tests,SetStack)

// console.log("Random")
// tester("array",tests,ArrayStack,true)
// tester("set",tests,SetStack,true)

