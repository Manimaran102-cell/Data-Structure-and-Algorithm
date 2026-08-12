/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    const rotate = new Array(n);

    for(let i = 0; i < n; i++){
        rotate[(i + k) % n] = nums[i]
    }
    for(let i = 0 ; i < n; i++){
     nums[i] = rotate[i]
    }
};