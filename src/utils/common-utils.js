export const convertObjToState = (obj) => {
  for (const ele of Object.keys(obj)) {
    if (isObject(obj[ele])) convertObjToState(obj[ele]);
    else obj[ele] = "";
  }
  return obj;
};

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

export const setAttributeFromPath = (path, obj, value) => {
  const final = path.pop();
  path.reduce((a, b) => a && a[b], obj)[final] = value;
};
