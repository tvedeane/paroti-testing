export const getData = (lang, file, sidebar) => {
  const dataModule = require(`../data/${lang}/${file}.js`);
  if (sidebar === undefined) {
    return dataModule.default;
  } else {
    return dataModule[sidebar];
  }
};
