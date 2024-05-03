const nums1 = [1, 2];
const nums2 = [3, 4];

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = arr.length;
  if (arr.length % 2 !== 0) {
    return arr[parseInt(len / 2)];
  }
  console.log(len);
  return len;
}

console.log(findMedianSortedArrays(nums1, nums2));
