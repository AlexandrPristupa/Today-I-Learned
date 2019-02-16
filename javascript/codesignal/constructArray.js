export const constructArray = (size) => {
  const outPut = [];
  let num = size;
  let index = 1;

  for (let i = 1; i <= size; i++) {
    if(i % 2 === 0) {
      outPut.push(num);
      num = num - 1;
    } else {
      if (i === 1) {
        outPut.push(index);
      } else {
        index = index + 1;
        outPut.push(index);
      }
    }
  }

   return outPut;
};
