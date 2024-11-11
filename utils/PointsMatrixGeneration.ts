// Generates a matrix of points that represent the hexagon grid

export const generateGridPointsMatrix = (gridWidth: number, gridHeight: number) => {
    const gridMatrix = [];
    for (let i = 0; i < gridHeight; i++) {
        const xOffset = i%2 === 0 ? 0.5 : 0;
        gridMatrix.push(new Array(gridWidth).fill(null));
        if (i%2 === 0) {
          let currWidth = -1.5; 
          for (let j = 0; j < gridWidth; j++) {
            currWidth += j%2 === 1 ? 1 : 2;
            gridMatrix[i][j] = {x: currWidth, y: i*Math.sin(Math.PI/3)};
          }
        } else {
          let currWidth = -1; 
          for (let j = 0; j < gridWidth; j++) {
            currWidth += j%2 === 1 ? 2 : 1;
            gridMatrix[i][j] = {x: currWidth, y: i*Math.sin(Math.PI/3)};
          }
        }
        
    } 
    return gridMatrix;
}