import fs from "fs";
import path from "path";
import _ from "lodash";

const genDiff = (filePath1, filePath2) => {
  // Получаем абсолютные пути и парсим файлы
  const absolutePath1 = path.resolve(process.cwd(), filePath1);
  const absolutePath2 = path.resolve(process.cwd(), filePath2);

  const obj1 = JSON.parse(fs.readFileSync(absolutePath1, "utf-8"));
  const obj2 = JSON.parse(fs.readFileSync(absolutePath2, "utf-8"));

  // Получаем упорядоченный массив всех уникальных ключей из обоих объектов
  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

  // Формируем строки для каждого ключа
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

  // Собираем итоговую строку
  return `{\n${lines.join("\n")}\n}`;
};

export default genDiff;
