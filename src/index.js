import fs from "fs";
import path from "path";

const genDiff = (filePath1, filePath2) => {
  const absolutePath1 = path.resolve(process.cwd(), filePath1);
  const absolutePath2 = path.resolve(process.cwd(), filePath2);

  const data1 = fs.readFileSync(absolutePath1, "utf-8");
  const data2 = fs.readFileSync(absolutePath2, "utf-8");

  const obj1 = JSON.parse(data1);
  const obj2 = JSON.parse(data2);

  console.log("Parsed file 1:", obj1);
  console.log("Parsed file 2:", obj2);

  return "";
};

export default genDiff;
