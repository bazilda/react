import { getEmptyAr } from "../util/myUtil";
import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    private _numbers : number[][];

    constructor(initialMatrix: number[][]){
        this._numbers = initialMatrix;
    }

    get numbers() {
        return this._numbers;
    }

    nextStep(): number[][] {
        // create new array
        let numbersNext = getEmptyAr(this._numbers.length, this._numbers[0].length);

        let rows = this._numbers.length;
        let cols = this._numbers[0].length;

        for (let i = 0; i < rows; i++ ){
            for(let j=0; j < cols; j++){
                let curVal = this._numbers[i][j];
                let sumNeighbors = this.sums(i, j);
                numbersNext[i][j] = this.examination(curVal, sumNeighbors);
            }
        }

        this._numbers = numbersNext;
        return this._numbers;
    }


    examination(curVal:number,  sumNeighbors:number) : number {
        if (curVal > 0) {
            if (sumNeighbors < 2 || sumNeighbors > 3)
                return 0;
            else
                return 1;
        }
        else{
            if (sumNeighbors == 3)
                return 1;
            else
                return 0;
        }
    }
    
    sums(i:number, j:number) : number{
        let rows = this._numbers.length;
        let cols = this._numbers[0].length;
        let sum  : number = 0;
        for (let m=i-1; m<=i+1; m++ ){
            for(let n=j-1; n<=j+1; n++){
                if (m>=0 && n>=0 && m<rows && n<cols){
                    sum=sum + this._numbers[m][n];
                }
            }
        }
        return sum-this._numbers[i][j];
    }
      
}