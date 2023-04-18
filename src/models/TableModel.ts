import { RowModel } from "./RowModel.js";

export class TableModel{
    Rows: Array<RowModel>;

    constructor(rows: Array<RowModel> ) {
        this.Rows = rows;
    }
}
