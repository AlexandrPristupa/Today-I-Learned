export const removeKFromList = (l, k) => {

    if (l === null) {
        return [];
    }
    
    if(!l.length) {
       return [];
    }

    let output = [];
    
    for (let i = 0; i < l.length; i++) {
      if (l[i] !== k) {
        output.push(l[i]);
      }
    }
  
    return output;
  }

