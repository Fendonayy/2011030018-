function saddlePoint(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        // 查找第 i 行的最大值
        let maxInRow = matrix[i][0];
        let maxIndex = 0;
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] > maxInRow) {
                maxInRow = matrix[i][j];
                maxIndex = j;
            }
        }
        // 检查第 i 行的最大值是否在其所在列中是最小值
        let isSaddlePoint = true;
        for (let k = 0; k < rows; k++) {
            if (matrix[k][maxIndex] < maxInRow) {
                isSaddlePoint = false;
                break;
            }
        }
        if (isSaddlePoint) {
            return [i, maxIndex];
        }
    }
    return null;
}
