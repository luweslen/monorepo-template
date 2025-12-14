// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllKeys = (object: any, keys: string[] = [], scope: string[] = []) => {
  const keepObjectKeys = true;
  const skipArray = true;

  if (Array.isArray(object)) {
    if (!skipArray) scope.push(`[${object.length}]`);

    object.forEach((currentObject) => getAllKeys(currentObject, keys, scope), keys);
  }

  if (typeof object === 'object') {
    Object.keys(object).forEach((key) => {
      if ((!Array.isArray(object[key]) && !(typeof object === 'object')) || keepObjectKeys) {
        const path = scope.concat(key).join('.').replace(/\.\[/g, '[');
        if (!keys.includes(path)) keys.push(path);
      }

      getAllKeys(object[key], keys, scope.concat(key));
    }, keys);
  }

  return keys.sort();
};

export const ObjectUtils = {
  getAllKeys,
};
