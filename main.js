//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


const test1 = [1,3];
const test2 = [2,7];
const test3 = [1,3,5];
const test4 = [2,7];
///// first attempt //////
const findMedianSortedArrays = (nums1, nums2) => {
    const allNums = [...nums1, ...nums2];
    const total = allNums.reduce((acc, cV) => {
        return acc + cV;
    });
    const answer = total / allNums.length;
    return answer;
};

console.log(findMedianSortedArrays(test1, test2))
console.log(findMedianSortedArrays(test3, test4))


/////// apparently I misunderstood the assignment here so my initial 
/////// first attempt failed on test case 2057 which is test1 and test2
/////// they want the median of the median values if it's an even length
/////// total. I don't love the wording here but it was still a cool challenge
/////// not sure it should be listed as "hard" though. I'm a noob and solved 
/////// this in less than 5 minutes.

///// second-first attempt ///////
const findMiddleMedianSortedArrays = (arr1, arr2) => {
  const combinedAndSorted = [...arr1, ...arr2].sort((a, b) => a - b);
  const targetIndex = Math.ceil((combinedAndSorted.length / 2) - 1);
  let result;
  if (combinedAndSorted.length % 2 === 0) {
    result = (combinedAndSorted[targetIndex] + combinedAndSorted[targetIndex + 1]) / 2; /////solved.
  }
  if (combinedAndSorted.length % 2 === 1) {
    result = combinedAndSorted[targetIndex];
  }
  return result;
}

console.log(findMiddleMedianSortedArrays(test1, test2))
console.log(findMiddleMedianSortedArrays(test3, test4))