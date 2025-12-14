interface ImportObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const I18nUtils = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mapModulesToStructuredObject(modules: Record<string, any>): ImportObject {
    const result: ImportObject = {};

    Object.entries(modules).forEach(([path, imported]) => {
      const pathParts = path
        .split('/')
        .filter((part) => part !== '.' && part !== '..');

      let currentMappedTranslation: ImportObject = result;

      const objectName = pathParts.pop()?.replace('.json', '') || '';

      pathParts.forEach((part, index) => {
        if (!currentMappedTranslation[part]) {
          currentMappedTranslation[part] = {};
        }

        currentMappedTranslation = currentMappedTranslation[part];

        if (index === pathParts.length - 1) {
          currentMappedTranslation[objectName] = imported.default;
        }
      });
    });

    return result;
  },
};
