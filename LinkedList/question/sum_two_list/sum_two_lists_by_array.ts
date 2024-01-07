import LinkedList from "../../ll"

const l1 = new LinkedList()
l1.append(2)
l1.append(3)
l1.append(4)
l1.append(5)
l1.append(2)
l1.append(3)
l1.append(4)
l1.append(5)

const l2 = new LinkedList()
l2.append(3)
l2.append(4)
l2.append(5)
l2.append(6)
l2.append(3)
l2.append(4)
l2.append(5)
l2.append(6)


function addLists(l1: LinkedList, l2: LinkedList): LinkedList | null {
  console.time("add_two_list_by_array")
  if (l1.length !== l2.length) {
    console.log("LinkedLists are not of Same Size")
    return null 
  }

  const numbers: any[] = Array.from({length:l1.length}).fill(0)

  loopList(l1,numbers)
  loopList(l2,numbers)


  const newLl = new LinkedList()
  numbers.map((num)=> newLl.append(num))
  console.timeEnd("add_two_list_by_array")
  return newLl
}

const ll = addLists(l1,l2)

ll?.traverse()

function loopList(list: LinkedList, numbers: number[]){  
  let i = 0;
  for (let temp = list.head; temp!==null; temp = temp?.next) {
    numbers[i] += temp.data;
    i++;
  }
}
