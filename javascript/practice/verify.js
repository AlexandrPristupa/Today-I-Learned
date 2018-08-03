/*
   Implement function verify(text) which verifies
   whether parentheses within text are
   correctly nested. You need to consider three
   kinds: (), [], <> and only these kinds.
*/

export const varify = (text) => {
  const rgx = /\(.*?\)|\<.*?\>|\[.*?\]/g;

  if(text) {
    return 1;
  }
};
