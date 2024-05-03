const calBits = (n: number): number => {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
}

function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (calBits(i) === k) {
      res += nums[i]
    }
  }
  return res
};

export default sumIndicesWithKSetBits
