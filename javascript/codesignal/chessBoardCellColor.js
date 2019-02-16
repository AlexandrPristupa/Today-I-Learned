export const chessBoardCellColor = (cell1, cell2) => {
    const board = { 'A': 1, 
                    'B': 2, 
                    'C': 3,
                    'D': 4,
                    'E': 5,
                    'F': 6,
                    'G': 7,
                    'H': 8
                  };
   
  console.log(cell1[0]);
  console.log(cell2[0]);
  let c1 = board[cell1[0]] + parseInt(cell1[1]);
  let c2 = board[cell2[0]] + parseInt(cell2[1]);
   
  return c1 % 2 === c2 % 2;
   
};
