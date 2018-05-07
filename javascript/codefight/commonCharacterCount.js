export const commonCharacterCount = (s1, s2) => {
    let s1Arr = s1.split('');
    let s2Arr = s2.split('');
    let count = 0;
    
    for (let i = 0; i < s1Arr.length; i++) {
        if(s2Arr.indexOf(s1Arr[i]) >= 0){
            count++;
            s2Arr.splice(s2Arr.indexOf(s1Arr[i]), 1);
        }
    }
    
    return count;
};
