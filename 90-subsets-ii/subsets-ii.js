/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    nums.sort((a, b) => a -b)

    function backtrack(startind, cursubset){
        result.push([...cursubset]);

        for(let i = startind; i < nums.length; i++){
            if(i > startind && nums[i] === nums[i - 1]){
                continue;
            }

            cursubset.push(nums[i]);

            backtrack(i + 1, cursubset);

            cursubset.pop()
        }
    }
    backtrack(0, []);
    return result;
};