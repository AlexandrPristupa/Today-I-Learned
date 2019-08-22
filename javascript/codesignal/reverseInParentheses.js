export const reverseInParentheses = (inputString) => {
  let result = inputString;
  
  while(/\(([^()]*)\)/.test(result)) {
      result = result.replace(/\(([^()]*)\)/, function(args) {
          return [...args.split(/[()]/)[1]].reverse().join('')
      }
  )}
  
  return result
}
