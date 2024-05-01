"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud.js");
var row = {
    firstname: 'Guillame',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
row.age = 23;
var updatedRow = row;
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
