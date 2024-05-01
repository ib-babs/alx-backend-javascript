/// <reference path="./crude.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

let row: RowElement = {
    firstname: 'Guillame',
    lastName: 'Salva'
}
const newRowID: RowID = CRUD.insertRow(row)
row.age = 23
const updatedRow: RowElement = row
CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID)
