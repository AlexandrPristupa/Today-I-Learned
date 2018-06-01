/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {

  const outPutArr = [];
  
  for(let i = nums.length - 1; i > k; i--) {
    outPutArr.push(nums[i]);
  }

  for(let i = 0; i < nums.length - k; i++) {
    outPutArr.push(nums[i]);
  }

  return outPutArr;

};

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
rotate([99, 3, -1, 5], 2); // [-1, 5, 99, 3]
