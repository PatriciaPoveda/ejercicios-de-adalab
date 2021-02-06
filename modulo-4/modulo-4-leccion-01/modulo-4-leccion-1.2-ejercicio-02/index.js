const fs = require("fs");

const text = "Lorem ipsum";
const object = {
  originalContent: text,
  changedContent: text.toUpperCase(),
  textLenght: text.length,
};
console.log(object);

const textData = JSON.stringify(object);
console.log(textData);

const handleWriteFile = (error) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("The file has been saved");
  }
};

fs.writeFile("./output.txt", textData, handleWriteFile);
