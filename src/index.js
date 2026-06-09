import fs from "fs";
import path from "path";
import parse from "./parsers.js";
import buildTree from "./buildTree.js";
import formatStylish from "./formatters/stylish.js";

const getDataAndFormat = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const data = fs.readFileSync(absolutePath, "utf-8");
  const format = path.extname(filePath).slice(1);
  return { data, format };
};

const genDiff = (filePath1, filePath2) => {
  const file1 = getDataAndFormat(filePath1);
  const file2 = getDataAndFormat(filePath2);

  const obj1 = parse(file1.data, file1.format);
  const obj2 = parse(file2.data, file2.format);

  const tree = buildTree(obj1, obj2);

  return formatStylish(tree);
};

export default genDiff;
