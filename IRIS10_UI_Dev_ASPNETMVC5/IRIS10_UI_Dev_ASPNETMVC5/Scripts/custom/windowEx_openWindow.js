function close() {
    $("#openKendoWindowBtn").fadeIn(300);
}

$(document).ready(function () {
    var windowInstance = $("#window");

    $("#openKendoWindowBtn").bind("click", function () {
        $("#window").data("kendoWindow").center().open();
        $("#openKendoWindowBtn").fadeOut(300);
    });

});