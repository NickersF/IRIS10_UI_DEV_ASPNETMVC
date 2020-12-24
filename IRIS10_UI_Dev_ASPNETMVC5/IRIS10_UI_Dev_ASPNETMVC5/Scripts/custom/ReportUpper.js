// Manages UI state and events for the upper report page

$(document).ready(function () {

    // Basic configuration of the window instance
    var WindowOptions = {
        actions: ["Maximize", "Close"],
        modal: true,
        draggable: false,
        width: "512px",
        height: "256px",
        visible: false
    }

    $("#SupportWindow").kendoWindow(WindowOptions);         // Set the options and initialize support window
    $("#UserWindow").kendoWindow(WindowOptions);            // Set the options and initialize user window
    $("#CustomReportWindow").kendoWindow(WindowOptions);    // Set the options and initialize custom reports window

    // Drives down into the overflow buttons of the ToolBar items and sets events
    $.ajax({
        global: false,
        type: "GET",
        url: "/ReportScreens/ReportUpper",
        data: {}
    }).done(() => {
        $("#SupportBtn_overflow").click( () => {
            $("#SupportWindow").data("kendoWindow").center().open();
        });
        $("#UserBtn_overflow").click( () => {
            $("#UserWindow").data("kendoWindow").center().open();
        });
        $("#CustomReportBtn").click(() => {
            $("#CustomReportWindow").data("kendoWindow").center().open();
        });
    });
});