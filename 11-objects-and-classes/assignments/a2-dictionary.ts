const dictionary: Record<string, string> = {
  hello: "hei",
  world: "maailma",
  bit: "bitti",
  byte: "tavu",
  integer: "kokonaisluku",
  boolean: "totuusarvo",
  string: "merkkijono",
  network: "verkko",
};

const printTranslatableWords = () => console.log(Object.keys(dictionary));

const translate = (word: string) => {
  const translation = dictionary[word];
  if (translation === undefined){
    console.log(`No translation exists for word ${word}.`);
    return null;
  }
  return translation;
};

printTranslatableWords();
console.log(translate("network"));
console.log(translate("rauta"));
