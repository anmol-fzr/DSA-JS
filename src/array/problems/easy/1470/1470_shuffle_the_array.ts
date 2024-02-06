function shuffle(nums: number[], n: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i], nums[i + n]);
  }
  return arr;
}

export default shuffle;
