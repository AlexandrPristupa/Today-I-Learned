const whatIsInAName = (collection, source) => {
    // Only change code below this line
    
    const srcKeys = Object.keys(source);
  
    return collection.filter((obj) => {
        return srcKeys.every((key) => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
    
    // Only change code above this line
};
 
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
  