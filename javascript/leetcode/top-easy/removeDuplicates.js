/**
 * @param {number[]} nums
 * @return {number}
 */

export const removeDuplicates = (nums) => {

  let j = 0;
  let i = 0;

  for (let l = nums.length; i < l; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
    }
  }

  return j + 1;

};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
