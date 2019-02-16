export const findLongestSubarrayBySum = (s, arr) => {
  let currentSum = arr[0];
  let start = 0;
  let end = 0;
  let results = [];
  for ( let i = 1; i <= arr.length; i++ ) {
    while ( currentSum > s && start < i - 1 ) {
      currentSum -= arr[start];
      start++;
    }
    if ( currentSum === s ) {
      if ( results.length === 0 || ( end - start > results[1] - results[0] ) ) {
        results = [start + 1, end + 1];
      }
    }

    if ( i < arr.length ) {
      currentSum += arr[i];
      end++;
    }
  }
  return ( results.length === 0 ) ? [-1] : results;
};
