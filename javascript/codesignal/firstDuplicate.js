export const firstDuplicate = (a) => {

    let object = {};

    for(let i = 0; i < a.length; i++) {
        if(object.hasOwnProperty(a[i])) {
            return a[i];
        } else {
            object[a[i]] = "exist";
        }
    }

    return -1;
};

