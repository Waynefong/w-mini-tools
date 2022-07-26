const fs = require("fs");
const packagesPath = "./packages/README.md";
const exist = fs.existsSync(packagesPath);
if (exist) {
  fs.readFile(packagesPath, "utf-8", (err, data) => {
    fs.writeFile("./README.md", data, (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("sync README.md finished!");
      }
    });
  });
}
