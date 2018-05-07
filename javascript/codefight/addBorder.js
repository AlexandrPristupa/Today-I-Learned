export const addBorder = (picture) => {
    let outPut = [];
    let firstEl = picture[0].length;
    let border = '';
    
    for (let i = 0; i < firstEl; i++) {
        border += '*';
    }
    
    outPut.push(`*${ border }*`);
    
    
    for (let i = 0; i < picture.length; i++) {
        outPut.push(`*${ picture[i] }*`);
    }
    
    outPut.push(`*${ border }*`);
    
    return outPut;
};
