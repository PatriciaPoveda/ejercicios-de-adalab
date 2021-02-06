const fs = require("fs");

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  console.log(fileContent);
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};

readFile("./input-file.txt", (fileContent) => {
  const object = {
    originalContent: fileContent,
    changedContent: fileContent.toUpperCase(),
    fileContentLenght: fileContent.length,
  };
  const textData = JSON.stringify(object);
  writeFile("./output-file.json", textData, () => {
    console.log("The file has been copied!");
  });
});
