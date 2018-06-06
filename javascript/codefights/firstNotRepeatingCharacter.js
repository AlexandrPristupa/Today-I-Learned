
/*
    Given a string s, find and return the first
    instance of a non-repeating character in it.
    If there is no such character, return '_'.
*/

/* First solution */

export const firstNotRepeatingCharacter1 = (s) => {
  const repeats = {};

  for(let i = 0; i < s.length; i++) {
    if(repeats.hasOwnProperty([s[i]])) {
      repeats[s[i]] += 1;
    } else {
      repeats[s[i]] = 1;
    }
  }

  for(let i in s) {
    if(repeats[s[i]] === 1) {
      return s[i];
    }
  }

  return "_";

};

/* Second solution */

export const firstNotRepeatingCharacter = (a) => {
  for (let i = 0; i < a.length; i++) {

    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
      return a[i];
    }
  }
  return '_';
};
