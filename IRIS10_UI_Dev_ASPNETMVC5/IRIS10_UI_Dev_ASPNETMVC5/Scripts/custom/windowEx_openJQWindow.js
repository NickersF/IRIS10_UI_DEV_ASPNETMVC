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

    $("#KendoWindowJQuery").kendoWindow(WindowOptions); // Set the options

    // Open the window via the UI button element
    $("#openJsKendoWindowBtn").click(() => {
        $("#KendoWindowJQuery").data("kendoWindow").center().open();
    });

});