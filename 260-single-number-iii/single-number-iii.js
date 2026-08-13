/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
     let xorSum = 0;
     for(let num of nums){
        xorSum ^= num;
     }
     const diff = xorSum & -xorSum;

let num1 = 0, num2 =0;

for(const num of nums){
    if((diff & num) === 0){
        num1 ^= num;
    } else{
        num2 ^= num;
    }
}
return [num1, num2];
};