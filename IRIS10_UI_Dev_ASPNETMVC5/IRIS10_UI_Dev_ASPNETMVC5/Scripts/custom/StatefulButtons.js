$(document).ready(function () {
    var condVal = 1;

    $("#ToggleButtonState").click(function () {

        console.log("FUCK YOU!" + condVal);
        //if (condVal == 1) {
        //    $("#StateFullButton_BS").removeClass("btn-primary");
        //    $("#StateFullButton_BS").addClass("btn-danger");

        //    console.log();

        //    condVal = 0;
        //}

        //if (condVal == 0) {
        //    $("#StateFullButton_BS").removeClass("btn-danger");
        //    $("#StateFullButton_BS").addClass("btn-primary");

        //    console.log($("#StateFullButton_BS"));

        //    condVal = 1;
        //}


        $("#StateFullButton_BS").removeClass("btn-primary");
        $("#StateFullButton_BS").addClass("btn-danger");
    });

}); 