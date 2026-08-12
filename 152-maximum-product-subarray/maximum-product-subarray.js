/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0];
    let curmax = nums[0];
    let curmin = nums[0];

    for(let i = 1; i < nums.length; i++){

        let num = nums[i]
        if(num < 0){
            let temp = curmax;
            curmax = curmin;
            curmin = temp;
        }

        curmax = Math.max(num, curmax * num);
        curmin = Math.min(num, curmin * num);

        res = Math.max(res, curmax);

    }
    return res;
};