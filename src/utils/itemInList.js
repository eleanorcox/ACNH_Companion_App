export const itemInList = (item, list) => {
  let inList = false;
  for (let i = 0; i < list.length; i++) {
    if (item.name === list[i].name) {
      inList = true;
      break;
    }
  }
  return inList;
};
