import LifeMatrix from "./service/LifeMatrix";
import { getEmptyAr } from "./util/myUtil";

const matrix1:number[][]=[
    [0,1,0],
    [0,1,0],
    [0,1,0],
];
const matrix2:number[][]=[
    [0,0,0],
    [0,1,0],
    [0,1,0],
];
const matrix3:number[][]=[
    [0,0,0],
    [0,1,0],
    [0,0,0],
];
const matrix4:number[][]=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
const matrix5:number[][]=[
    [0,0,0],
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [0,0,0],
];
const matrix6:number[][]=[
    [0,0,0],
    [0,0,0],
    [1,1,1],
    [0,0,0],
    [0,0,0],
];
const matrix7:number[][]=[
    [1,0,0],
    [0,0,1],
    [0,1,0],
];
const matrix8:number[][]=[
    [0,0,0],
    [0,1,0],
    [0,0,0],
];
const matrix9:number[][]=[
    [1,1,1],
    [0,1,1],
    [0,0,0],
];
const matrix10:number[][]=[
    [1,0,1],
    [1,0,1],
    [0,0,0],
];
 test('Test function for sum near the cell', ()=>{
    const lifeMatrix = new LifeMatrix(matrix1);
    expect(lifeMatrix.sums(1,1)).toEqual(2);
});

test('Test function for sum near the cell', ()=>{   
    const lifeMatrix = new LifeMatrix(matrix1);
    expect(lifeMatrix.sums(0,0)).toEqual(1);
});

test('Test function for sum near the cell', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix1);
    expect(lifeMatrix.sums(2,2)).toEqual(2);
});

test('Test function for sum near the cell', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix1);
    expect(lifeMatrix.sums(3,3)).toEqual(undefined);
});

//////////////

test('Test function for the next step', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix3);
    expect(lifeMatrix.nextStep()).toEqual(matrix4);
});

test('Test function for the next step', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix5);
    expect(lifeMatrix.nextStep()).toEqual(matrix6);
});

test('Test function for the next step(0=>1)', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix7);
    expect(lifeMatrix.nextStep()).toEqual(matrix8);
});

test('Test function for the next step(1=>0)', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix8);
    expect(lifeMatrix.nextStep()).toEqual(matrix4);
});

test('Test function for the next step(all)', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix8);
    expect(lifeMatrix.nextStep()).toEqual(matrix10);
});

///////////////

test('Test function for a new cells state 0 or 1 (0=>1) ', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix8);
    expect(lifeMatrix.examination(0,3)).toEqual(1);
});

test('Test function for a new cells state 0 or 1 (1=>1) ', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix8);
    expect(lifeMatrix.examination(1,3)).toEqual(1);
});

test('Test function for a new cells state 0 or 1 (1=>0) ', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix8);
    expect(lifeMatrix.examination(1,4)).toEqual(0);
});

test('Test function for a new cells state 0 or 1 (1=>0) ', ()=>{    
    const lifeMatrix = new LifeMatrix(matrix8);
    expect(lifeMatrix.examination(1,1)).toEqual(0);
});

////////////


test("Test for empty matrix",()=>{
    const matrix:number[][]=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ];
    expect(getEmptyAr(2,3)).toEqual(matrix);
});

test("Test for empty matrix",()=>{
    
    expect(getEmptyAr(2,2)).toEqual(matrix4);
});

test("Test for empty matrix ( with error )",()=>{
    
    expect(getEmptyAr(2,2)).toEqual(matrix5);
});





