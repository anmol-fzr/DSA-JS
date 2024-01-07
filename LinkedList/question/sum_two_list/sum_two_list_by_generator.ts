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
  console.time("add_two_list_by_generator")
  if (l1.length !== l2.length) {
    console.log("LinkedLists are not of Same Size")
    return null 
  }

  const l1It = makeLLIterator(l1)
  const l2It = makeLLIterator(l2)

  const newLl = new LinkedList()

  for (let i = 0;i < l1.length; i++) {
    newLl.append( l1It.next().value +l2It.next().value) 
  } 
    // let temp = l1.head for (let i = 0;i < l1.length; i++) { console.log(temp.data) temp = temp.next; } // const numbers:number[] = [];

  // let i = 0
  // for (let temp = l1.head; temp!==null; temp = temp?.next) {
  //   numbers[i] = temp.data
  //   i++
  // }
  //
  //   let count = 0
  // for (let temp = l2.head; temp!==null; temp = temp?.next) {
  //   numbers[count] += temp.data
  //   count++;
  // }

  // numbers.map((num)=> newLl.append(num))
  console.timeEnd("add_two_list_by_generator")
  return newLl
}

const ll = addLists(l1,l2)

ll.traverse()







function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}



function makeLLIterator(linkedList: LinkedList) {
  let nextIndex = 0;
  let iterationCount = 0;
  let temp = linkedList.head;

  const rangeIterator = {
    next() {
      let result;
      if (temp !== null ) {
        result = { value: temp.data, done: false };
        nextIndex += 1;
        temp = temp.next
        iterationCount++;
        return result;
      }
      return { done: true };
    },
  };
  return rangeIterator;
}

