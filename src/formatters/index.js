import formatStylish from "./stylish.js";
import formatPlain from "./plain.js";
import formatJson from "./json.js"; // Импортируем новый форматер

const format = (tree, formatName) => {
  switch (formatName) {
    case "stylish":
      return formatStylish(tree);
    case "plain":
      return formatPlain(tree);
    case "json":
      return formatJson(tree); // Добавляем поддержку json
    default:
      throw new Error(`Unknown format name: '${formatName}'`);
  }
};

export default format;
