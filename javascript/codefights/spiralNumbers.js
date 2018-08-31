const spiralNumbers = (n) => {
  const outPut = [];
  const maxNum = n * n;
  let num = 0;

  for (let i = 0; i < n; i++) {

    outPut.push([]);

    for (let j = 0; j < maxNum; j++) {

      if (i === 0) {
        outPut[i].push(j + 1);
      }

      if (outPut[i].length === n) {
        num = j;
        break;
      } else if (i > 0) {

        if (num) {
          j = num;
        }

        outPut[i].push(j + 1);

        num = 0;
      }

    }
  }

  console.log(outPut);
  console.log(maxNum);

};

spiralNumbers(3);
