/*
 ODOT Mileage Report Main Page Events
 ===================================
 Author: Nicholas Fazzolari for AOC/ORP
 ===================================
 This script implements the user events for the main application
 */

$(document).ready(function () {

    // Layout element variables
    let $mainContentSection = $("#mainContentSection");
    let $mainSideBar = $("#mainSideBar");
    let $interactiveMapContainer = $("#interactiveMapContainer");
    let $spreadsheetContainer = $("#spreadsheetContainer");

    // Event element variables
    let $openSideBarMap_btn = $("#openSideBarMap_btn");
    let $openSideBarSpreadsheet_btn = $("#openSideBarSpreadsheet_btn")
    let $closeSideBar_btn = $("#closeSideBar_btn");
    let $closeSpreadsheet_btn = $("#closeSpreadsheet_btn");
    let $viewData_btn = $("#viewData_btn");

    // Initial states
    $mainContentSection.hide();
    $mainContentSection.fadeIn(900);
    $mainSideBar.hide();
    $spreadsheetContainer.hide();

    // Front-end user account object
    let userAccountObject = {
        firstName: "First",
        lastName: "Last",
        tenantName: "Tenant"
    }

    // Main page navigation

    // Opens the sidebar on the map view (initial view)
    $openSideBarMap_btn.click(function () {
        $mainSideBar.fadeIn(900);
    });

    // Opens the sidebar on the spreadsheet view
    $openSideBarSpreadsheet_btn.click(function () {
        $mainSideBar.fadeIn(900);
    });

    // Closes the sidebar on the sidebar
    $closeSideBar_btn.click(function () {
        $mainSideBar.fadeOut(256);
    });

    // Opens the spreadsheet view on the sidebar
    $viewData_btn.click(function () {
        $interactiveMapContainer.hide();
        $spreadsheetContainer.show();
    });

    // Closes the spreadsheet view on the spreadsheet view
    $closeSpreadsheet_btn.click(function () {
        $spreadsheetContainer.hide();
        $interactiveMapContainer.show();
    });

    // Responsive visual state changes - touches various elements based on viewport size
    $(window).bind("resize", function () {

        if ($(this).width() < 768) {
            $("#clearAllBtnContainer").removeClass("pl-2").addClass("mt-2")
            $("#headerTitleText").addClass("text-center");
            $("#headerUserControlContainer").removeClass("bg-white border border-right-0 rounded-left text-dark").addClass("mt-2");
            $("#mapLegendContainer").addClass("mt-2");
            $("#logout_btn").removeClass("logout-button-light").addClass("logout-button-dark");
        } else {
            $("#clearAllBtnContainer").removeClass("mt-2").addClass("pl-2")
            $("#headerTitleText").removeClass("text-center");
            $("#headerUserControlContainer").removeClass("mt-2").addClass("bg-white border border-right-0 rounded-left text-dark");
            $("#mapLegendContainer").removeClass("mt-2");
            $("#logout_btn").removeClass("logout-button-dark").addClass("logout-button-light");
        }

        if ($(this).width() < 992) {
            $("#mapViewOpenSideBar_btn").addClass("mt-2 w-100");
        } else {
            $("#mapViewOpenSideBar_btn").removeClass("mt-2 w-100");

        }

    }).trigger('resize');

    $("#userNameField").text(userAccountObject.firstName + " " + userAccountObject.lastName + " (" + userAccountObject.tenantName + ")");

});