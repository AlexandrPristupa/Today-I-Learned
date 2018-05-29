function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {

    let outPutMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let d = 0; d < rowsToDelete.length; d++) {

            if (i !== rowsToDelete[d]) {
                outPutMatrix[i] = [];
                for (let j = 0; j < matrix[i].length; j++) {

                    for (let a = 0; a < columnsToDelete.length; a++) {

                        if (j === columnsToDelete[a]) {
                            console.log(matrix[i][j]);
                        }
                    }
                }
            }

        }
    }

    return outPutMatrix;

}

constructSubmatrix([[1,0,0,2], [0,5,0,1], [0,0,3,5]], [1], [0, 2]);