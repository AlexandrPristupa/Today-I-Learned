function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    
     var srcKeys = Object.keys(source);
  
    return collection.filter((obj) => {
        return srcKeys.every((key) => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
    
    // Only change code above this line
}
 
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
  