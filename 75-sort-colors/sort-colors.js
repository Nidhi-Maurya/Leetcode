/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0; 
    let high = nums.length - 1; 
    let current = 0; 
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    while (current <= high) {
        if (nums[current] === 0) {        
            swap(nums, current, low);       
            low++;
            current++;
        } else if (nums[current] === 2) {        
            swap(nums, current, high);  
            high--; 
        } else {
            current++;
        }
    }
};