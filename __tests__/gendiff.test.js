import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import genDiff from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);
const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), "utf-8").trim();

test("gendiff comparisons", () => {
  const expectedStylish = readFile("expected_stylish.txt");
  const expectedPlain = readFile("expected_plain.txt");

  // Тесты для stylish (по умолчанию)
  expect(
    genDiff(getFixturePath("file1.json"), getFixturePath("file2.json")).trim(),
  ).toEqual(expectedStylish);
  expect(
    genDiff(getFixturePath("file1.yml"), getFixturePath("file2.yaml")).trim(),
  ).toEqual(expectedStylish);

  // Тесты для plain
  expect(
    genDiff(
      getFixturePath("file1.json"),
      getFixturePath("file2.json"),
      "plain",
    ).trim(),
  ).toEqual(expectedPlain);
  expect(
    genDiff(
      getFixturePath("file1.yml"),
      getFixturePath("file2.yaml"),
      "plain",
    ).trim(),
  ).toEqual(expectedPlain);

  // Тест для json
  const jsonResult = genDiff(
    getFixturePath("file1.json"),
    getFixturePath("file2.json"),
    "json",
  );
  // Проверяем, что результат является валидным JSON-объектом
  expect(() => JSON.parse(jsonResult)).not.toThrow();
});
