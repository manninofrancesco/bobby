import { RowModel } from '../models/RowModel.js'
import { TableModel } from '../models/TableModel.js'

class StandupService {
  getStandupTable = async () => {
    const firstTableRow: string[] = ["Date, Standup Devs", "Standup Content", "Standup PM"];
    const titleColumns = new RowModel(firstTableRow);
    const rows: RowModel[] = [titleColumns];
    const table = new TableModel(rows);

    return table;
  }
}

export { StandupService }