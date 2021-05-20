export const chunkArrayInGroups = (arr: any[], size: number) => {
  const newArr: any[] = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};
