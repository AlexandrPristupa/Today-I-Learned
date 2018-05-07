export const matrixElementsSum = (matrix) => {
    let price = 0;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++){
            if(i === 0) {
                price += matrix[i][j];
            } else {
                if(matrix[i - 1][j] === 0) {
                    matrix[i][j] = 0;
                }
                price += matrix[i][j];
            }
        }
    }

    return price;

};
