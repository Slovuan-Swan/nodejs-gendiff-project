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

test("gendiff flat comparison", () => {
  const expected = readFile("expected_flat.txt");

  // Тест для JSON
  expect(
    genDiff(getFixturePath("file1.json"), getFixturePath("file2.json")).trim(),
  ).toEqual(expected);

  // Тест для YAML (.yml и .yaml)
  expect(
    genDiff(getFixturePath("file1.yml"), getFixturePath("file2.yaml")).trim(),
  ).toEqual(expected);
});
