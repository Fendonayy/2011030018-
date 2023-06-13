function Chessboard(n) {
  this.n = n;
  this.board = new Array(n);
  for (let i = 0; i < n; i++) {
    this.board[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      this.board[i][j] = 0;
    }
  }
}

Chessboard.prototype.getSuccessors = function (x, y) {
  const successors = [];
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  for (let i = 0; i < moves.length; i++) {
    const dx = moves[i][0];
    const dy = moves[i][1];
    const nx = x + dx;
    const ny = y + dy;
    if (
      nx >= 0 &&
      nx < this.n &&
      ny >= 0 &&
      ny < this.n &&
      this.board[nx][ny] === 0
    ) {
      successors.push([nx, ny]);
    }
  }
  return successors;
};

function search(board, x, y, count) {
  if (count === board.n * board.n) {
    // 找到了一种解法
    console.log("找到了一种解法：");
    console.log(board.board);
    return 1;
  }
  const successors = board.getSuccessors(x, y);
  let total = 0;
  for (let i = 0; i < successors.length; i++) {
    const nx = successors[i][0];
    const ny = successors[i][1];
    board.board[nx][ny] = count + 1;
    total += search(board, nx, ny, count + 1);
    board.board[nx][ny] = 0;
  }
  return total;
}

function solve(n) {
  const board = new Chessboard(n);
  let count = 0;
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board.board[i][j] = 1;
      total += search(board, i, j, count + 1);
      board.board[i][j] = 0;
    }
  }
  console.log(`横盘规模为${n}的中国象棋跳马问题共有${total}种解法。`);
}

// 示例：解决横盘规模为5的中国象棋跳马问题
solve(5);
