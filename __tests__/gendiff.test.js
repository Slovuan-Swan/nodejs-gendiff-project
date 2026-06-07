import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import genDiff from "../src/index.js";

// Эмуляция __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для получения абсолютного пути к фикстурам
const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

test("gendiff flat JSON comparison", () => {
  const filePath1 = getFixturePath("file1.json");
  const filePath2 = getFixturePath("file2.json");

  const expected = fs
    .readFileSync(getFixturePath("expected_flat.txt"), "utf-8")
    .trim();
  const result = genDiff(filePath1, filePath2).trim();

  expect(result).toEqual(expected);
});
