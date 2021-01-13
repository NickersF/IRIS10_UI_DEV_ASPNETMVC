// Manages UI state and events for the _UserWindow page

$(document).ready(function () {

    var AddUserWindowOptions = {
        actions: ["Maximize", "Close"],
        title: "Add New User",
        width: "25vw",
        modal: true,
        draggable: false,
        visible: false
    }

    var EditUserWindowOptions = {
        actions: ["Maximize", "Close"],
        title: "Edit User",
        width: "25vw",
        modal: true,
        draggable: false,
        visible: false
    }

    $("#AddUserWindow").kendoWindow(AddUserWindowOptions);      // Set the options and initialize support window
    $("#EditUserWindow").kendoWindow(EditUserWindowOptions);

    $("#AddUser").click(() => {
        $("#AddUserWindow").data("kendoWindow").center().open();
    });

    $("#EditUser").click(() => {
        $("#EditUserWindow").data("kendoWindow").center().open();
    });
});