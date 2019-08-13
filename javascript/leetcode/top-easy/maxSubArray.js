/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function(nums) {
  let result = nums[0];
  let num = nums[0];

  for (let i = 1; i < nums.length; i++) {
    num = Math.max(nums[i], nums[i] + num);
    result = Math.max(num, result);
  }

  return result;
};
