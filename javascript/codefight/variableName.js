export const variableName = (name) => {
    
    if (name.length === 1) {
        return true;
    }
    
    return /^[a-z_]\w*$/i.test(name);
}
