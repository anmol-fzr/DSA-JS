Array is an Ordered collections of values, accessed by integer-based indices starting from 0. An Array is just a sequence of elements in a fixed order, But in JavaScript Arrays are also an object and are dynamic in size


Array in JavaScript

```typescript
const arr = ["i","am","anmol"];
```

Actuall Array implementation under the hood

```typescript
const arr = {
    0:"i",
    1:"am",
    2:"anmol",
}
```

# Space & Time Complexity of JS Array Methods

|  method  |  Space Complexity | Time Complexity (Best) |   Time Complexity (Average) |  Time Complexity (Worst) |
|----------|-------------------|----------------------- |-----------------------------|--------------------------|
| push	   |       O(1)	       |          O(1)	        |            O(1)	          |    O(n) (reallocation)   |
| pop      |       O(1)	       |          O(1)	        |            O(1)	          |    O(n) (reallocation)   |
| shift    |       O(1)	       |          O(1)	        |            O(n)	          |    O(n)                  |
| unshift  |       O(1)	       |          O(1)	        |            O(n)	          |    O(n)                  |
| concat   |       O(n+m)      |          O(n+m)        |            O(n+m)	          |    O(n+m)                |
| slice    |       O(n)        |          O(n)          |            O(n)	          |    O(n)                  |
| splice   |       O(n)        |          O(n)          |            O(n^2)	          |    O(n^2)                |
| join     |       O(n)        |          O(n)          |            O(n)	          |    O(n)                  |
| forEach  |       O(1)	       |          O(n)	        |            O(n)	          |    O(n)                  |
| map      |       O(n)        |          O(n)          |            O(n)	          |    O(n)                  |
| filter   |       O(n)        |          O(n)          |            O(n)	          |    O(n)                  |
| reduce   |       O(1)        |          O(n)          |            O(n)	          |    O(n)                  |
| sort     |       O(1)        |          O(n log n)    |            O(n log n)	      |    O(n^2)                |


## Finding Largest Element in an array of numbers

- Small Arrays (Up to 1000 elements):
    - Math.max and for loop are usually comparable in speed.
    - reduce might be slightly slower but offers cleaner syntax.
    - Sorting is generally the slowest due to overhead.

- Medium Arrays (1000 - 100,000 elements):
    - reduce typically excels due to its efficient iteration strategy.
    - Math.max and for loop might see performance drop-off.
    - Sorting remains slow and is rarely the best choice.

- Large Arrays (Over 100,000 elements):
    - reduce remains efficient and scales well.
    - Math.max and for loop become significantly slower.
    - Sorting might be considered in specific cases with optimized algorithms, but generally not recommended.
