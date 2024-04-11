const wordArray = ["The", "quick", "silver", "wolf"];

const sentencify = (words: string[], index: number) => {
  // let sentence: string = words[index];
  if (index >= words.length - 1){
    return words[words.length - 1] + "!";
  }
  return words[index] + " " + sentencify(words, index + 1);
};

console.log(sentencify(wordArray, 0)); // prints "The quick silver wolf!"
console.log(sentencify(wordArray, 1)); // prints "quick silver wolf!"
