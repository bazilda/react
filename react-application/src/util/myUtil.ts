
export function getEmptyAr(rows:number,columns:number) : number[][] {
    let array: number[][] = new Array(rows);

    for (let i = 0; i < rows; i++) {
        array[i] = new Array(columns);
        for (let j = 0; j < columns; j++) {
            array[i][j] = 0;
        }
    }

    return array;
}