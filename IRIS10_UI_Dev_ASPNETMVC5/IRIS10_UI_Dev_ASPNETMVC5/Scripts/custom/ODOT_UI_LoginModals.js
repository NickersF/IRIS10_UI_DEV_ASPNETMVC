/*
 ODOT Mileage Report Login Modals
 ===================================
 Author: Nicholas Fazzolari for AOC/ORP
 ===================================
 This script implements the modal initialization for the login user types
 */

$(document).ready(function () {

    // Modal container variables
    let ODOTPasswordRecoveryModal = $("#ODOTPasswordRecoveryModal");
    let ODOTUserRegistrationModal = $("#ODOTUserRegistrationModal");
    let CountyPasswordRecoveryModal = $("#CountyPasswordRecoveryModal");
    let CountyUserRegistrationModal = $("#CountyUserRegistrationModal");

    // Password recovery window instances
    ODOTPasswordRecoveryModal.kendoWindow({
        actions: ["Close"],
        draggable: false,
        visible: false,
        modal: true,
        resizable: false,
        width: "33%",
        title: "ODOT User Password Recovery",
    });

    ODOTUserRegistrationModal.kendoWindow({
        actions: ["Close"],
        draggable: false,
        visible: false,
        modal: true,
        resizable: false,
        width: "33%",
        title: "New ODOT User Registration",
    });

    CountyPasswordRecoveryModal.kendoWindow({
        actions: ["Close"],
        draggable: false,
        visible: false,
        modal: true,
        resizable: false,
        width: "33%",
        title: "County User Password Recovery",
    });

    CountyUserRegistrationModal.kendoWindow({
        actions: ["Close"],
        draggable: false,
        visible: false,
        modal: true,
        resizable: false,
        width: "33%",
        title: "New County User Registration",
    });

    // Open ODOT user password recovery
    $("#ODOTForgotPassword_btn").click(function () {
        ODOTPasswordRecoveryModal.data("kendoWindow").center().open();
    });

    // Open ODOT new user registration
    $("#ODOTRegisterAccount_btn").click(function () {
        ODOTUserRegistrationModal.data("kendoWindow").center().open();
    });

    // Open County user password recovery
    $("#countyForgotPassword_btn").click(function () {
        CountyPasswordRecoveryModal.data("kendoWindow").center().open();
    });

    // Open County user registration
    $("#countyRegisterAccount_btn").click(function () {
        CountyUserRegistrationModal.data("kendoWindow").center().open();
    });

});