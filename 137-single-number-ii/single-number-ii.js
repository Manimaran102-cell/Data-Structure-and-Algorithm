/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0;
    let two = 0;

    for(let num of nums){
    ones = (ones ^ num) & ~two;

    two = (two ^ num) & ~ones;
    }
    return ones;
};