/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let can1 = null, can2 = null;
    let count1 = 0, count2 = 0;

    for(let num of nums){
        if(num === can1){
            count1++;
        }
        else if(num === can2){
            count2++;
        }
        else if(count1 === 0){
            can1 = num;
            count1 = 1;
        }
        else if(count2 === 0){
            can2 = num;
            count2 = 1;
        } else{
            count1--;
            count2--;
        }
    }
    let actualCount1 = 0, actualCount2 = 0;
    for(let num of nums){
        if(num === can1) actualCount1++;
        else if(num === can2) actualCount2++;
    }
    const result = []
    const threshold = Math.floor(nums.length / 3);

    if(actualCount1 > threshold) result.push(can1);
    if(actualCount2 > threshold) result.push(can2);

return result;
};