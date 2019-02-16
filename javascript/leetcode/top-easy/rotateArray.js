/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const rotate = (nums, k) => {
  for (let i = 0; i < k; i++) {
      let item = nums.pop();
      nums.unshift(item);
  }
  
  return nums;
};
