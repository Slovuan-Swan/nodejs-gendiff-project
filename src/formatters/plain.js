import _ from "lodash";

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return "[complex value]";
  }
  if (typeof value === "string") {
    return `'${value}'`;
  }
  return String(value);
};

const formatPlain = (tree) => {
  const iter = (nodes, keys) => {
    const lines = nodes
      .map((node) => {
        const propertyName = [...keys, node.key].join(".");

        switch (node.type) {
          case "nested":
            return iter(node.children, [...keys, node.key]);
          case "added":
            return `Property '${propertyName}' was added with value: ${stringify(node.value)}`;
          case "deleted":
            return `Property '${propertyName}' was removed`;
          case "changed":
            return `Property '${propertyName}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`;
          case "unchanged":
            return null;
          default:
            throw new Error(`Unknown type: ${node.type}`);
        }
      })
      .filter((line) => line !== null);

    return lines.join("\n");
  };

  return iter(tree, []);
};

export default formatPlain;
