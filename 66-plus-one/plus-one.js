/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length - 1;
   
   while(n >=0){
    if(digits[n] < 9){
        digits[n]++; 
        return digits;
    }
    digits[n] = 0;
    n--;
   }
   digits.unshift(1);
    return digits;
};