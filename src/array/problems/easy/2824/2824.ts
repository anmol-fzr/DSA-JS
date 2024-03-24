function countPairs(nums: number[], target: number): number {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = 0; j < i; j++) {
      if (num + nums[j] < target) c++;
    }
  }
  return c;
}
export default countPairs;
