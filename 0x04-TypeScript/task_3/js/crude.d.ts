import { RowID, RowElement } from "./interface";


// Type declarations for CRUD functions
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): undefined;
declare function updateRow(rowId: RowID, row: RowElement): RowID;