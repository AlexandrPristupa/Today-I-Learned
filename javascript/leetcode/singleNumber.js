/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = function(nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]]) {
          obj[nums[i]] += 1;
      } else {
          obj[nums[i]] = 1;
      }
  }

  const arr = Object.keys(obj);

  for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]] === 1) {
          return arr[i];
      }
  }
};
