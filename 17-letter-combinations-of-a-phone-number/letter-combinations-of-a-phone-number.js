/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map= {
        '2': 'abc', '3': 'def',  '4': 'ghi',
        '5': 'jkl', '6': 'mno',  '7': 'pqrs',
        '8': 'tuv', '9': 'wxyz'
    }
    let result = [];

  function backTrack(index, curcombi){
    if(index === digits.length){
        result.push(curcombi);
       return;   
    }

    const letter = map[digits[index]];
    for(let char of letter){
        backTrack(index + 1, curcombi + char);
    }
  }  
  backTrack(0, "")
  return result; 
};