function numIdenticalPairs(nums: number[]): number {
  const n = nums.length;
  let ans: number = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j] && i < j) {
        ans++;
      }
    }
  }
  return ans;
}

export default numIdenticalPairs;
