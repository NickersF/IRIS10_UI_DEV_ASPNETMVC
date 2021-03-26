/*
 ODOT Mileage Report Login Modals
 ===================================
 Author: Nicholas Fazzolari for AOC/ORP
 ===================================
 This script implements the modal initialization for the login user types
 */

$(document).ready(function () {

    // Modal container variables
    let passwordRecoveryWindow = $("#passwordRecoveryModal");
    let userRegistrationWindow = $("#userRegistrationModal");

    // Password recovery window instances
    let passwordRecoveryWindow_ODOT = $("#passwordRecoveryModal");
    let passwordRecoveryWindow_County = 

    let ODOTInitMsg = "ODOT user wants to reset his password.";
    let countyInitMsg = "County user wants to reset his password.";

    // Check if person who forgot password is a ODOT or County user
    $("#ODOTForgotPassword_btn").click(function () {

        if (this.id == "ODOTForgotPassword_btn") {
            passwordRecoveryWindow.text(ODOTInitMsg);
        }

    });

});