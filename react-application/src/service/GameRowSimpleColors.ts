import { CellType } from "../model/CellType";
import { getColors } from "../util/colors";
import { getRandomElement } from "../util/random";
import GameRow from "./GameRow";

export default class GameRowSimpleColors implements GameRow {
    row: CellType[];
    constructor(nCells: number) {
        this.row = Array.from({ length: nCells })
            .map((__, index) => (      // create initial cells
                {
                    cellColor: getRandomElement(getColors()) as string,
                    borderColor: "black",
                    cellContent: '',
                    id: index
                }));
    }

    getInitialRow(): CellType[] {
        return this.row;
    }

    move(id: number): string | CellType[] {
        if (this.isOver()) {
            return "game is over";
        } else {
            // res = JSON.parse(JSON.stringify(this.row));
            // const resAr = res as CellType[];
            const resAr = this.row.map(cell => ({ ...cell })) as CellType[];
            resAr[id].cellColor = "black";
            this.row = resAr;
            return resAr;
        }
    }

    isOver(): boolean {
        return this.row.every(cell => cell.cellColor == 'black') // return true if all cells are black
    }

}