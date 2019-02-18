export const repeatStringNumTimes = (str, num) => {
  let output = '';
  let i = 0;

  while(i < num) {
    i++
    output += str;
  }

  return output;
}
