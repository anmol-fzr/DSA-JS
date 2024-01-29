function buildArray(nums: number[]): number[] {
    let arr = []
    nums.map((num)=>{
        arr.push(nums[num])
    })
    return arr;
};
export default buildArray
