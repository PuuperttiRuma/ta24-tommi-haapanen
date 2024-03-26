{
    const reverseWords = (sentence: string) => {
        let words = sentence.split(" ");
        console.log(words);
        
    }
    const sentence = "this is a short sentence";
    const reversed = reverseWords(sentence);
    console.log(reversed); // prints "siht si a trohs ecnetnes"
}