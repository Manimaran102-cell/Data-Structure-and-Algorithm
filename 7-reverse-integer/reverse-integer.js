/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let reversed = 0;
   let num = Math.abs(x);
   
   while(num > 0){
    let lastDigit = num % 10;
    reversed = (reversed * 10) + lastDigit;
    num =  Math.floor(num / 10);
   }
   const limit = Math.pow(2, 31);
   if(reversed < -limit || reversed > limit - 1){
    return 0;
   }
   return x < 0 ? -reversed : reversed;
};