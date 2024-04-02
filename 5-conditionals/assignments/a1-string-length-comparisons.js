let word1 = "productivity";
let word2 = "assignment";

const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

if (word1.length > word2.length){
  console.log(`${capitalize(word1)} is a longer word than ${word2}.`);
} else {
  console.log(`${word2} is a longer word than ${word1}.`);
}

word1 = "lol";

if (word1.length > word2.length){
  console.log(`${capitalize(word1)} is a longer word than ${word2}.`);
} else {
  console.log(`${word2} is a longer word than ${word1}.`);
}