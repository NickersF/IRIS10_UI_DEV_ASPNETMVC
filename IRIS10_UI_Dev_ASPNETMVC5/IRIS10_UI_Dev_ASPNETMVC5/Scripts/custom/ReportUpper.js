// Manages UI state and events for the upper report page

$(document).ready(function () {

    // Support window options
    var SupportWindowOptions = {
        actions: ["Maximize", "Close"],
        title: "Support Tickets",
        modal: true,
        draggable: false,
        width: "75vw",
        height: "10vh",
        visible: false
    }

    // User window options
    var UserWindowOptions = {
        actions: ["Maximize", "Close"],
        title: "Manage Users",
        modal: true,
        draggable: false,
        width: "75vw",
        height: "10vh",
        visible: false
    }

    // Custom report window options
    var CustomReportWindowOptions = {
        actions: ["Maximize", "Close"],
        title: "Custom Reports",
        modal: true,
        draggable: false,
        width: "75vw",
        height: "10vh",
        visible: false
    }

    $("#SupportWindow").kendoWindow(SupportWindowOptions);              // Set the options and initialize support window
    $("#UserWindow").kendoWindow(UserWindowOptions);                    // Set the options and initialize user window
    $("#CustomReportWindow").kendoWindow(CustomReportWindowOptions);    // Set the options and initialize custom reports window

    // Drives down into the overflow buttons of the ToolBar items and sets events
    $.ajax({
        global: false,
        type: "GET",
        url: "/ReportScreens/ReportUpper",
        data: {}
    }).done(() => {
        $("#SupportBtn_overflow").click(() => {
            $("#SupportWindow").data("kendoWindow").center().open();
        });
        $("#UserBtn_overflow").click(() => {
            $("#UserWindow").data("kendoWindow").center().open();
        });
        $("#CustomReportBtn").click(() => {
            $("#CustomReportWindow").data("kendoWindow").center().open();
        });
    });

    // Example grid
    $("#ExampleGrid").kendoGrid({
        columns: [
            { selectable: true },
            {
                field: "ReportName",
                title: "Report Name"
            },
        {
            field: "ReportNumber",
            title: "Report Number"
        }],
        dataSource: {
            data: [{
                ReportName: "Accounts Payable Order",
                ReportNumber: "APS1017"
            },
            {
                ReportName: "Contract Balance Summary Report",
                ReportNumber: "APS1007"
            }]
        }
    });

    // Hide grid header
    $("#ExampleGrid .k-grid-header").css('display', 'none');

    // Change column sizes of report list on click from full width to sharing half width with description column
    $("#ShowDetailsBtn").click(() => {
        $("#ReportListCol").removeClass('col-12').addClass('col-6');
        $("#ReportDetailsCol").removeClass('d-none').fadeIn(1000);

    });
});