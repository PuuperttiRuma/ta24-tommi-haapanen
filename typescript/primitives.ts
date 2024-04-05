// Write a function that takes in a string of arbitrary length
// and outputs info in form of an object with the length of the
// given string and the amount of words it contains. 
// Eg. { length: 32, words: 4 }. 

const stringProperties = (string: string) => {
  return {length: string.length, words: string.split(" ").length};
};

console.log(stringProperties("Lorem ipsum dolor sit amet, consectetur adipiscing elit"));
console.log(stringProperties("sed do eiusmod"));
console.log(stringProperties("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"));


