export const camelToHuman = (string: String) =>
  string.replace(/([A-Z])/g, " $1").replace(/^./, (str) => {
    return str.toUpperCase();
  });
