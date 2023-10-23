export const excerpt = (str, count) => {
  if (str.length > count) {
    str = str.substring(0, count) + "...";
  } else {
    return str;
  }
};
