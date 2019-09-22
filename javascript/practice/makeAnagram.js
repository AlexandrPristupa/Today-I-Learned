export const makeAnagram = (a, b) => {
  const obj = {};

  for (let i = 0; i < a.length; i++) {
      obj[a[i]] = (obj[a[i]] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
      obj[b[i]] = (obj[b[i]] || 0) - 1;
  }

  return Object.keys(obj).reduce((sum, key) => sum + Math.abs(obj[key]), 0);
}
