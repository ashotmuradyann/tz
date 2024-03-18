import * as uft from "un-flatten-tree";

export function listToTree(flatList, childrenName) {
  return uft.unflatten(
    flatList,
    (node, parentNode) =>
      (node["parent"] && node["parent"].toString()) ===
      parentNode["id"].toString(),
    (node, parentNode) => parentNode[childrenName].push(node),
    (node) => Object.assign({}, node, { [childrenName]: [] }),
  );
}
