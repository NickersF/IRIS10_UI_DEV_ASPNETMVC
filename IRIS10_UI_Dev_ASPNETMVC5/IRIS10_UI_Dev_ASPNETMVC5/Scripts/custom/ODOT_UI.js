// Author: Nicholas Fazzolari
// JS for the ODOT UI events and state

$(document).ready(function () {

    // Set initial state
    $("#loginButtonsWrapper").fadeIn(900).addClass("d-flex");

    $("#loginSelectODOT_btn").click(function () {
        $("#loginButtonsWrapper").hide().removeClass("d-flex");
        $("#loginFormODOTWrapper").fadeIn(900).addClass("d-flex");
    });

    $("#loginSelectCounties_btn").click(function () {
        $("#loginButtonsWrapper").hide().removeClass("d-flex");
        $("#loginFormCountiesWrapper").fadeIn(900).addClass("d-flex");
    });

    $("#loginSelectHeader").click(function () {
        $("#loginButtonsWrapper").fadeIn(900).addClass("d-flex");
        $("#loginFormODOTWrapper").hide().removeClass("d-flex");
        $("#loginFormCountiesWrapper").hide().removeClass("d-flex");
    });

    if ($("#loginButtonsWrapper").css("display") == "none") {
        console.log("Element not visible");
    } else {
        console.log("Element already visible.");
    }

    console.log("ODOT_UI.js Loaded");
});