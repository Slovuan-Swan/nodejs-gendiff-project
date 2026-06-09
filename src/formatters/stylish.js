import _ from "lodash";

const indent = (depth, spacesCount = 4) => " ".repeat(depth * spacesCount - 2);
const outdent = (depth, spacesCount = 4) => " ".repeat(depth * spacesCount);

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value);
  }
  const lines = Object.entries(value).map(
    ([key, val]) => `${outdent(depth + 1)}${key}: ${stringify(val, depth + 1)}`,
  );
  return `{\n${lines.join("\n")}\n${outdent(depth)}}`;
};

const formatStylish = (tree) => {
  const iter = (nodes, depth) => {
    const lines = nodes.map((node) => {
      switch (node.type) {
        case "nested":
          return `${indent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1)}\n${outdent(depth)}}`;
        case "added":
          return `${indent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
        case "deleted":
          return `${indent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
        case "changed":
          return `${indent(depth)}- ${node.key}: ${stringify(node.oldValue, depth)}\n${indent(depth)}+ ${node.key}: ${stringify(node.newValue, depth)}`;
        case "unchanged":
          return `${indent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
        default:
          throw new Error(`Unknown type: ${node.type}`);
      }
    });
    return lines.join("\n");
  };

  return `{\n${iter(tree, 1)}\n}`;
};

export default formatStylish;
