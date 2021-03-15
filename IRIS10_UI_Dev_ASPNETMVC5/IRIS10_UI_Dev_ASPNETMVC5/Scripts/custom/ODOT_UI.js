// Author: Nicholas Fazzolari
// JS for the ODOT UI events and state

$(document).ready(function () {

    // Set initial state of login screen elements
    $("#loginButtonsWrapper").fadeIn(900).addClass("d-flex");
    $("#ODOTForgotPasswordPanel").hide();
    $("#ODOTRegistrationPanel").hide();
    $("#countyForgotPasswordPanel").hide();
    $("#countyRegistrationPanel").hide();

    // Login select events
    $("#loginSelectODOT_btn").click(function () {
        $("#loginButtonsWrapper").hide().removeClass("d-flex");
        $("#loginFormODOTWrapper").fadeIn(900).addClass("d-flex");
    });

    $("#loginSelectCounties_btn").click(function () {
        $("#loginButtonsWrapper").hide().removeClass("d-flex");
        $("#loginFormCountiesWrapper").fadeIn(900).addClass("d-flex");
    });

    // Closes the ODOT login form container
    $("#closeODOTLoginForm_btn").click(function () {

        if ($("#loginButtonsWrapper").css("display") == "none") {
            // Show initial screen
            $("#loginButtonsWrapper").fadeIn(900).addClass("d-flex");
            // Hide the login forms and sub components
            $("#loginFormODOTWrapper").hide().removeClass("d-flex");
            $("#ODOTForgotPasswordPanel").hide();
            $("#ODOTRegistrationPanel").hide()
            $("#loginFormCountiesWrapper").hide().removeClass("d-flex");
            $("#countyForgotPasswordPanel").hide();
            $("#countyRegistrationPanel").hide();

            console.log("Element loginButtonsWrapper not visible");
        } else {
            console.log("Element loginButtonsWrapper visible.");
        }

    });

    // Closes the county login form container
    $("#closeCountyLoginForm_btn").click(function () {

        if ($("#loginButtonsWrapper").css("display") == "none") {
            // Show initial screen
            $("#loginButtonsWrapper").fadeIn(900).addClass("d-flex");
            // Hide the login forms and sub components
            $("#loginFormODOTWrapper").hide().removeClass("d-flex");
            $("#ODOTForgotPasswordPanel").hide();
            $("#ODOTRegistrationPanel").hide()
            $("#loginFormCountiesWrapper").hide().removeClass("d-flex");
            $("#countyForgotPasswordPanel").hide();
            $("#countyRegistrationPanel").hide();

            console.log("Element loginButtonsWrapper not visible");
        } else {
            console.log("Element loginButtonsWrapper visible.");
        }

    });

    // Show password recovery visibility events
    $("#ODOTForgotPasswordLink").click(function () {
        $("#ODOTForgotPasswordPanel").slideDown(500, "swing");
    });

    $("#countyForgotPasswordLink").click(function () {
        $("#countyForgotPasswordPanel").slideDown(500, "swing");
    });

    // Close password recovery visibility events
    $("#closeODOTForgotPanel_btn").click(function () {
        $("#ODOTForgotPasswordPanel").slideUp(500, "swing");
    });

    $("#closeCountyForgotPanel_btn").click(function () {
        $("#countyForgotPasswordPanel").slideUp(500, "swing");
    });


    // Show registration panel visibility events
    $("#openODOTRegistrationLink").click(function () {
        $("#ODOTRegistrationPanel").slideDown(500, "swing");
    });

    $("#openCountyRegistrationLink").click(function () {
        $("#countyRegistrationPanel").slideDown(500, "swing");
    });

    // Close registration panel visibility events
    $("#closeODOTRegPanel_btn").click(function () {
        $("#ODOTRegistrationPanel").slideUp(500, "swing");
    });

    $("#closeCountyRegPanel_btn").click(function () {
        $("#countyRegistrationPanel").slideUp(500, "swing");
    });

    // Load log
    console.log("ODOT_UI.js Loaded");
});