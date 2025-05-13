/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let p=k%nums.length
   
   function reverse(i,j){
     while(i<j){
    let temp=nums[i]
    nums[i]=nums[j]
    nums[j]=temp
    i++;
    j--
     }
   }
       reverse(0,nums.length-1)
    reverse(0,p-1)
    reverse(p,nums.length-1)
}