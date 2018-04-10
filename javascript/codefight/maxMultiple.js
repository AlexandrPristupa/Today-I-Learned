export const maxMultiple = (divisor, bound) => {
   
    let num = bound % divisor;
    
    if (num > 0) {
        return bound - num;
    } else {
        return bound;
    }
 };
