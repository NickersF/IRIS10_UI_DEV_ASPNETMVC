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
        width: "50vw",
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
    $("#TestGridReports").kendoGrid({
        dataSource: sampleReports,
        change: selectRowAction,
        selectable: "row",
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
                title: "Report Number"
            }],
    });

    // Configure grid CSS styles
    $("#TestGridReports .k-grid-header").css('display', 'none');    // Remove header
    $("#TestGridReports tr.k-alt").removeClass("k-alt");            // Remove alternate row colors

    // Row selection event method
    function selectRowAction(e) {

        // Get row data for selected row
        var rows = e.sender.select();

        rows.each(function (e) {

            // Store row data in local
            var grid = $("#TestGridReports").data("kendoGrid");
            var dataItem = grid.dataItem(this);

            // Set report details card text
            $("#ReportDetailsName").text(dataItem.ReportName);
            $("#ReportDetailsId").text(dataItem.ReportId);

            // Logging
            console.log(dataItem);
            console.log(dataItem.ReportName);
            console.log(dataItem.ReportId);
        })

        // Set visibility of report list off and turn on details
        $("#ReportListCol").removeClass('col-12').addClass('col-6');
        $("#ReportDetailsCol").fadeIn(500).removeClass('d-none');
    }

    // Close report description event
    $("#HideDetailsBtn").click(() => {
        $("#ReportListCol").removeClass('col-6').addClass('col-12');
        $("#ReportDetailsCol").fadeOut(500).addClass('d-none'); // fadeout not working
    });

});