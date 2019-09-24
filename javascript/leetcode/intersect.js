export const intersect = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const short = len1 > len2 ? nums2 : nums1;
    const long = len1 > len2 ? nums1 : nums2;
  
    const count = {}; // count occurrence

    for (let n of long) {
        count[n] = count[n] + 1 || 1;
    }
  
    const intersection = [];
    for (let n of short) {
      if (count[n] > 0) {
        count[n]--;
        intersection.push(n);
      }
    }
    return intersection;
};
