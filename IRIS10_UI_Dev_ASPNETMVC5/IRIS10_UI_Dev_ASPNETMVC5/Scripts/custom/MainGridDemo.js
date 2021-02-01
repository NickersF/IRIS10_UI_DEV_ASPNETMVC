// Reports test grid
$("#TestGridReports").kendoGrid({
    dataSource: sampleReports,
    change: onChange,
    columns: [
        {
            selectable: true,
            width: "4em"
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
    dataSource: sampleUsers,
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