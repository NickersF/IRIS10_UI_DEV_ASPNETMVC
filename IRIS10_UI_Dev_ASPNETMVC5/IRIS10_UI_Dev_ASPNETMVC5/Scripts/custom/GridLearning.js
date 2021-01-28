"use strict";
// Code for working with the Kendo UI for JQuery grid widget
Object.defineProperty(exports, "__esModule", { value: true });
var SampleData_1 = require("./SampleData");
var SampleData_2 = require("./SampleData");
// Reports test grid
$("#TestGridReports").kendoGrid({
    dataSource: SampleData_1.sampleReports,
    columns: [
        {
            selectable: true,
            width: "4rem"
        },
        {
            field: "ReportName",
            title: "Report Name"
        },
        {
            field: "ReportId",
            title: "Report ID"
        }
    ],
    selectable: "row"
});
// Users test grid
$("#TestGridUsers").kendoGrid({
    dataSource: SampleData_2.sampleUsers,
    columns: [
        {
            selectable: true,
            width: "4rem"
        },
        {
            field: "FirstName",
            title: "First Name"
        },
        {
            field: "LastName",
            title: "Last Name"
        },
        {
            field: "Email",
            title: "Email"
        }
    ],
    selectable: "row"
});
// Removes the alternate row coloring on the grid.
$("#TestGridReports tr.k-alt").removeClass("k-alt");
$("#TestGridUsers tr.k-alt").removeClass("k-alt");
//# sourceMappingURL=GridLearning.js.map