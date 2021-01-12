// Manages UI state and events for the _SupportWindow page

$(document).ready(function () {
    var NewSupportTicketWinOptions = {
        actions: ["Maximize", "Close"],
        title: "Manage Custom Reports",
        modal: true,
        draggable: false,
        width: "75vw",
        visible: false
    }

    $("#NewSupportTicketWindow").kendoWindow(NewSupportTicketWinOptions);      // Set the options and initialize support window

    // Event and state code for Kendo ToolBar buttons
    //$.ajax({
    //    global: false,
    //    type: "GET",
    //    url: "/ReportScreens/_SupportWindow",
    //    data: {}
    //}).done(() => {
    //    $("#NewTicketBtn").click(() => {
    //        $("#NewSupportTicketWindow").data("kendoWindow").center().open();
    //    });
    //});

    $("#NewTicketBtn").click(() => {
        $("#NewSupportTicketWindow").data("kendoWindow").center().open();
    });
});
