const isPalindrome = (str: string) => {  
  const strArray = str.toLowerCase().split("");
  const invertedStringArray = [];
  for (const i of strArray) {
    invertedStringArray.unshift(i);
  }
  //console.log(strArray, invertedStringArray);
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] !== invertedStringArray[i]) { return false; }    
  }
  return true;
};

let testword = "word";
console.log(`It is ${isPalindrome(testword)} that word '${testword}' is a palindrome`);
testword = "Anna";
console.log(`It is ${isPalindrome(testword)} that word '${testword}' is a palindrome`);
testword = "SaippuaKIVIkauppias";
console.log(`It is ${isPalindrome(testword)} that word '${testword}' is a palindrome`);
testword = "Atte kumiorava varo imuketta";
console.log(`It is ${isPalindrome(testword)} that word '${testword}' is a palindrome`);
testword = "Attekumioravavaroimuketta";
console.log(`It is ${isPalindrome(testword)} that word '${testword}' is a palindrome`);

// isPalindrome('saippuakauppias')
// isPalindrome('saippuakäpykauppias')