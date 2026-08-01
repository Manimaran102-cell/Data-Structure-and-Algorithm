/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
 let left = 0;
   let rigth = s.length - 1;

   while(left < rigth){
    let temp = s[left];
    s[left] = s[rigth];
    s[rigth]  = temp;

    left++;
    rigth--;
   }
   return s;
};