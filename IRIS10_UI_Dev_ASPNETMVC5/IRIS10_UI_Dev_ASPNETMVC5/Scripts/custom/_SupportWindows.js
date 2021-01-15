// Manages UI state and events for the _SupportWindow page

$(document).ready(function () {

    var NewSupportTicketWinOptions = {
        actions: ["Maximize", "Close"],
        title: "Create New Support Ticket",
        width: "50vw",
        modal: true,
        draggable: false,
        visible: false
    }

    var EditSupportTicketWinOptions = {
        actions: ["Maximize", "Close"],
        title: "Edit Support Ticket",
        width: "50vw",
        modal: true,
        draggable: false,
        visible: false
    }

    $("#NewSupportTicketWindow").kendoWindow(NewSupportTicketWinOptions);      // Set the options and initialize support window
    $("#EditSupportTicketWindow").kendoWindow(EditSupportTicketWinOptions);


    $("#NewTicketBtn").click(() => {
        $("#NewSupportTicketWindow").data("kendoWindow").center().open();
    });

    $("#EditTicketBtn").click(() => {
        $("#EditSupportTicketWindow").data("kendoWindow").center().open();
    });
});