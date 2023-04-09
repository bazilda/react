import { CellType } from "../model/CellType";
import GameRowSimpleColors from "./GameRowSimpleColors";

export default class GameRowSwapColors extends GameRowSimpleColors{
    counter:number=0;
    prevIndex:number=-1; // firstIndex
    isOver(): boolean {
        return (this.counter >= this.row.length/2 ) ;
    }
    move(id: number): string | CellType[] {
        if (this.isOver()) {
            return "game is over";
        } else {
            
            const resAr = this.row.map(cell => ({ ...cell })) as CellType[];
 
            if (this.prevIndex ==-1){
                this.prevIndex=id
            }
            else{
                [ resAr[id].cellColor, resAr[this.prevIndex].cellColor]=[ resAr[this.prevIndex].cellColor,resAr[id].cellColor];
                this.prevIndex=-1;
                this.counter++;
                this.row = resAr;
            }
            return resAr;
        }
    }
}