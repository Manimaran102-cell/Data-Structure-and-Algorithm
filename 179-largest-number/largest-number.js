/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let strNum = nums.map(String);

    strNum.sort((a, b) => (b + b).localeCompare(a + b));

    if(strNum[0] === '0'){
        return '0'
    }
    return strNum.join('')
};