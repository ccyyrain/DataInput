export const treeData = {
  parent: "string",
  components: {
    unit: {
      unitType: ["UNIT", "MISSILE", "STRUCTURE"],
    },
    unitStats: {
      radius: "number",

      invulnerable: "boolean",

      ground: "boolean",
    },
    stories: {
      chapters: {
        chapter1: "string",
        chapter2: {
          "chapter2-1": "string",
          "chapter2-2": "string",
        },
      },
    },
  },
};
