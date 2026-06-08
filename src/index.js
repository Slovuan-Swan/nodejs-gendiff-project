import fs from "fs";
import path from "path";
import _ from "lodash";
import parse from "./parsers.js";

const getDataAndFormat = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const data = fs.readFileSync(absolutePath, "utf-8");
  // path.extname возвращает расширение с точкой (например, '.json'), убираем её через slice(1)
  const format = path.extname(filePath).slice(1);
  return { data, format };
};

const genDiff = (filePath1, filePath2) => {
  const file1 = getDataAndFormat(filePath1);
  const file2 = getDataAndFormat(filePath2);

  const obj1 = parse(file1.data, file1.format);
  const obj2 = parse(file2.data, file2.format);

  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

  const lines = keys.map((key) => {
    if (!_.has(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    if (!_.has(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
    }
    return `    ${key}: ${obj1[key]}`;
  });

  return `{\n${lines.join("\n")}\n}`;
};

export default genDiff;
