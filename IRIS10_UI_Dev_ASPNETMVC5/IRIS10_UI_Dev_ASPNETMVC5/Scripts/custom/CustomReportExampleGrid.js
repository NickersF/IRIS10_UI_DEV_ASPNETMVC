// Example grid instance for custom reports
$("#CustomReportExampleGrid").kendoGrid({
    columns: [{
        field: "FirstName",
        title: "First Name"
    },
    {
        field: "LastName",
        title: "Last Name"
    }],
    dataSource: {
        data: [{
            FirstName: "Joe",
            LastName: "Smith"
        },
        {
            FirstName: "Jane",
            LastName: "Smith"
        }]
    }
});