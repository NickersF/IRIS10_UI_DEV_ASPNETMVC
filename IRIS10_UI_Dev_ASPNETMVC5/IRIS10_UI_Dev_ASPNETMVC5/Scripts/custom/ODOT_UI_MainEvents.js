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

});