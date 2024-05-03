function smallerNumbersThanCurrent(nums: number[]): number[] {
  const len = nums.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    let s = 0;
    for (let j = 0; j < len; j++) if (nums[j] < nums[i]) s++;
    res[i] = s;
  }
  return res;
}

export default smallerNumbersThanCurrent;
