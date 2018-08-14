/*
   Implement function verify(text) which verifies
   whether parentheses within text are
   correctly nested. You need to consider three
   kinds: (), [], <> and only these kinds.
*/

export const verify = string => {
  // const rgx = /\(.*?\)|\<.*?\>|\[.*?\]/g;
  if (!string) {
    return 1;
  }

  const following = {
    "[": "]",
    "{": "}",
    "(": ")",
    "<": ">"
  };

  const stackArr = [];

  let stringStack = '';

  for(const character of string) {
    if ('{[(<>)]}'.includes(character)) {
      stringStack += character
    }
  }

  for (const character of stringStack) {
    if ('{[(<'.includes(character)) {
      stackArr.push(following[character]);
    } else {
      if (stackArr.pop() !== character) {
        return 0;
      }
    }
  }
  return 1;
};

// verify('(  [  <>  ()  ]  <>  )'); // return 1
// verify('before ( middle []) after '); // return 1
// verify('   (   ])'); // return 0
// verify('<(   >)'); // return 0
// verify('---(++++)----'); // return 1
// verify(""); // return 1
// verify(") ("); // return 0