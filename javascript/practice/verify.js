/*
   Implement function verify(text) which verifies
   whether parentheses within text are
   correctly nested. You need to consider three
   kinds: (), [], <> and only these kinds.
*/

const varify = (string) => {
  // const rgx = /\(.*?\)|\<.*?\>|\[.*?\]/g;

  if(!string) {
    return 1;
  }

  let parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return 0;
      }
    }
  }

  return 1;
};

varify('(  [  <>  ()  ]  <>  )');
