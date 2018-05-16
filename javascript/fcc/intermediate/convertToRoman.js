function convertToRoman(num) {
    const valueArr = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    const romanArr = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    let romanNum = '';

    for(let i = 0; i < valueArr.length; i++) {
        while (valueArr[i] <= num) {
            romanNum += romanArr[i];
            num -= valueArr[i];
        }
    }

    return romanNum;

}

console.log(convertToRoman(3));
