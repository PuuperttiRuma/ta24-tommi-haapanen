{
  const reverseWords = (sentence: string) => {
    let wordArray = sentence.split(" ");
    let reversedWordArray: string[] = [];
    wordArray.forEach((word) => {
      reversedWordArray.push(reverseString(word));
    });
    return reversedWordArray.join(" ");
  };

  const reverseString = (string: string) => {
    let charArray = string.split("");
    const reversedStringArray: string[] = [];
    charArray.forEach(char => {
        reversedStringArray.unshift(char);
    })
    return reversedStringArray.join("");
  };

  const sentence = "this is a short sentence";
  const reversed = reverseWords(sentence);
  console.log(reversed); // prints "siht si a trohs ecnetnes"
}
