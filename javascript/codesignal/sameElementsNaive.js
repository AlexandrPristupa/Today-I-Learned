export const sameElementsNaive = (a, b) => {
  let sameElementsCounts = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        sameElementsCounts += 1;
      }
    }
  }

  return sameElementsCounts;
}
