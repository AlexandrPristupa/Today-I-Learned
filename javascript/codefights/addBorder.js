export const addBorder = (picture) => {
    const outPut = [];
    const firstEl = picture[0].length;
    let border = '';
    
    for (let i = 0; i < firstEl; i++) {
        border += '*';
    }
    
    outPut.push(`*${ border }*`);
    
    for (let item of picture) {
        outPut.push(`*${ item }*`);
    }
    
    outPut.push(`*${ border }*`);
    
    return outPut;
};
