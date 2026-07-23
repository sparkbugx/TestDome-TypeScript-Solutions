function canTravelTo(gameMatrix: boolean[][], fromRow: number, fromColumn: number, toRow: number, toColumn: number): boolean {
    if(
        toRow < 0 || toRow >= gameMatrix.length ||
        toColumn < 0 || toColumn >= gameMatrix[0].length
    ){
        return false;
    }

    //2. Destination Check: Is the final destination land?
    if(gameMatrix[toRow][toColumn] === false){
        return false;
    }
    return false;
}

const gameMatrix = [
    [false, true,  true,  false, false, false],
    [true,  true,  true,  false, false, false],
    [true,  true,  true,  true,  true,  true],
    [false, true,  true,  false, true,  true],
    [false, true,  true,  true,  false, true],
    [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds