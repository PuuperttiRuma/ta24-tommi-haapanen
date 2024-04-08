import fs from "fs";

const readStream = fs.createReadStream("./textFile.txt", "utf-8");
const writeStream = fs.createWriteStream("./outputText.txt");

const modifyText = (text: string | Buffer): string => {
  const words = text.toString().split(" ");
  const newWords = words.map((word) => {
    // IFFIT RETURNEIKSI!
    if (word === "joulu") {
      return "kinkku";
    }
    if (word === "lapsilla") {
      return "poroilla";
    }
    return word;
    console.log(word);
  });
  return newWords.join(" ");
};

const writeToFile = (text: string, stream: fs.WriteStream) => {
  stream.write(text, (err) => {
    if (err) console.log(err);
    else console.log("txt written");
  });
};

readStream.on("data", (text) => {
  const newText = modifyText(text);
  writeToFile(newText, writeStream);
});
