/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 const stack = [];
 const map = {
    ')' :  '(',
    ']' : '[',
    '}' : '{'
 }

 for(let char of s){

    if(char in map){
        const topEle  = stack.length > 0 ? stack.pop() : '#';

     if(topEle !== map[char]){
        return false;
     }    
    } else{
        stack.push(char);
    }
 }
return stack.length === 0;
}
