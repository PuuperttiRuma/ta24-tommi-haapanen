function checkSentenceVowels(sentence: string) {
  // Check how many different vowels we have in the sentence

  const countChars = (sentence: string, char: string) => {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence.charAt(i).toLowerCase() === char) {
        count++;
      }
    }
    return count;
  };

  const countOfAs = countChars(sentence, "a");
  const countOfEs = countChars(sentence, "e");
  const countOfIs = countChars(sentence, "i");
  const countOfOs = countChars(sentence, "o");
  const countOfUs = countChars(sentence, "u");
  const countOfYs = countChars(sentence, "y");

  console.log("A letter count: " + countOfAs);
  console.log("E letter count: " + countOfEs);
  console.log("I letter count: " + countOfIs);
  console.log("O letter count: " + countOfOs);
  console.log("U letter count: " + countOfUs);
  console.log("Y letter count: " + countOfYs);

  const totalCount =
    countOfAs + countOfEs + countOfIs + countOfOs + countOfUs + countOfYs;

  console.log("Total vowel count: " + totalCount);
}

checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");
