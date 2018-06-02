/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const rotate = function(nums, k) {

  const outPutArr = [];
  
  for(let i = nums.length - 1; i > k; i--) {
    outPutArr.push(nums[i]);
  }

  for(let i = 0; i < nums.length - k; i++) {
    outPutArr.push(nums[i]);
  }

  return outPutArr;

};
