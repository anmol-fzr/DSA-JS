
let a = 1
let b = 1000

const set  = new Set<number>()

for (let index = 0; index <= 20; index++) {
  const val = Math.round( a+Math.random()*b-1)
  set.add(val)
  console.log(val)
}


console.log("size",set.size)
