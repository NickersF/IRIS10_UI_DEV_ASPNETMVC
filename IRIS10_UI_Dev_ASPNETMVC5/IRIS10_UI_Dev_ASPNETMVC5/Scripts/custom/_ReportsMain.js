// Manages UI state and events for the _ReportsMain page

$(document).ready(function () {

    // Set up the windows:

    // Custom report window options
    var CustomReportWindowOptions = {
        actions: ["Maximize", "Close"],
        title: "Manage Custom Reports",
        modal: true,
        draggable: false,
        width: "75vw",
        visible: false
    }

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

    // Edit report window options
    var EditReportWindowOptions = {
        actions: ["Maximize", "Close"],
        title: "Edit Report",
        modal: true,
        draggable: false,
        width: "75vw",
        height: "10vh",
        visible: false
    }

    // Finish report window options
    var FinishReportWindowOptions = {
        actions: ["Maximize", "Close"],
        title: "Finish Report",
        modal: true,
        draggable: false,
        width: "75vw",
        height: "10vh",
        visible: false
    }

    // Initialize the windows:

    $("#SupportWindow").kendoWindow(SupportWindowOptions);              // Set the options and initialize support window
    $("#UserWindow").kendoWindow(UserWindowOptions);                    // Set the options and initialize user window
    $("#CustomReportWindow").kendoWindow(CustomReportWindowOptions);    // Set the options and initialize custom reports window
    $("#EditReportWindow").kendoWindow(EditReportWindowOptions);         // Set the options and initialize edit report window
    $("#FinishReportWindow").kendoWindow(FinishReportWindowOptions);     // Set the options and initialize finish report window

    // Event and state code for Kendo ToolBar buttons
    $.ajax({
        global: false,
        type: "GET",
        url: "/ReportScreens/_ReportsMain",
        data: {}
    }).done(() => {
        $("#CustomReportBtn").click(() => {
            $("#CustomReportWindow").data("kendoWindow").center().open();
        });
        $("#EditReportBtn").click(() => {
            $("#EditReportWindow").data("kendoWindow").center().open();
        });
        $("#FinishReportBtn").click(() => {
            $("#FinishReportWindow").data("kendoWindow").center().open();
        });
        $("#SupportBtn_overflow").click(() => {
            $("#SupportWindow").data("kendoWindow").center().open();
        });
        $("#UserBtn_overflow").click(() => {
            $("#UserWindow").data("kendoWindow").center().open();
        });
    });

    // Example grid instance master report list
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
            data: [
                {
                    ReportName: "Accounts Payable Order",
                    ReportNumber: "APS1017"
                },
                {
                    ReportName: "Contract Balance Summary Report",
                    ReportNumber: "APS1007"
                },
                {
                    ReportName: "Budget Balance Detail Report",
                    ReportNumber: "ARS1012"
                }
            ]
        }
    });

    // Hide grid header on load
    $("#ExampleGrid .k-grid-header").css('display', 'none');

    // Show report description event (this will be at the row level event eventually)
    $("#ShowDetailsBtn").click(() => {
        $("#ReportListCol").removeClass('col-12').addClass('col-6');
        $("#ReportDetailsCol").fadeIn(500).removeClass('d-none');
    });

    // Close report description event
    $("#HideDetailsBtn").click(() => {
        $("#ReportListCol").removeClass('col-6').addClass('col-12');
        $("#ReportDetailsCol").fadeOut(500).addClass('d-none'); // fadeout not working
    });

});