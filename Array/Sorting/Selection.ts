
// Worst Case
const data = [10,9,8,7,6,5,4,3,2,1]

// console.time("math.min")
// console.log(Math.min(...data))
//
// console.timeEnd("math.min")

function swap(arr:number[],x:number,y:number){
  [ arr[x] , arr[y] ] = [ arr[y] , arr[x] ]
}


function selectionSort(arr:number[]){
  
}


// console.time("selection")
console.log(selectionSort(data))
// console.timeEnd("selection")
