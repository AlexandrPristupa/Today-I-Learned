/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let outPutNum = 0;
    let arr = [];
    let num = 0;

    for(let i = 0; i < nums.length; i++) {

        if(i === 0) {
            num = nums[i];
            arr.push(nums[i]);
        } else {
            if(nums[i] !== num) {
                num = nums[i];
                arr.push(nums[i]);
            } 
        }
    }

    return arr;

};
