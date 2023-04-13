import { RowModel } from "./RowModel";

export class TableModel{
    Rows: Array<RowModel>;

    constructor(rows: Array<RowModel> ) {
        this.Rows = rows;
    }
}
