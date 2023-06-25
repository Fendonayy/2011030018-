// 矩阵转置
function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

// 两个矩阵相加
function addMatrices(matrix1, matrix2) {
    const rows = matrix1.length;
    const cols = matrix1[0].length;
    const result = [];
    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(newRow);
    }
    return result;
}
