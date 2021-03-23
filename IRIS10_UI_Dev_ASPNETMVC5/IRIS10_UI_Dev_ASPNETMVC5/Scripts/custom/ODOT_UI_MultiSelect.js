/*
 ODOT Mileage Report Multi Select
 ===================================
 Author: Nicholas Fazzolari for AOC/ORP
 ===================================
 This script implements the a multiselect feature for the main application
 */

window.onload = function () {

    // Demo switch
    let IS_PROD = false;
    // User county selection flag
    let isSelectedCounty = false;
    // County object constructor
    function CountyObject(countyName, isSelected) {
        this.countyName = countyName;
        this.isSelected = isSelected;
        this.listGroupItemBuilder = listGroupItemBuilder;
        this.listGroupItemDestroyer = listGroupItemDestroyer;

        // Builds a list-group item and appends it to the list container using the CountyObject data
        function listGroupItemBuilder(countyId) {

            let listItemTemplateString = '<li id="' + countyId + '" class="list-group-item"><div class="form-check"><input id="' + countyId + '_check" class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="' + countyId + '_check">' + countyId + '</label></div></li>';
            $("#UserselectedCountiesList").append(listItemTemplateString);

        }

        function listGroupItemDestroyer(countyId) {
            $("#UserselectedCountiesList").remove(countyId);
        }
    }
    let svgMapObject;
    let svgDoc;
    let svgMapObject_DemoObj;
    let svgDoc_demo;
    let countyPathElements;
    // Selected county objects for export
    let selectedCounties = [];
    // Counties to add that meet selection criteria
    let countiesOptedIn = [
        {
            "TenantName": "County_1"
        },
        {
            "TenantName": "County_2"
        },
        {
            "TenantName": "County_3"
        }
    ];
    // SVG object and document variables
    if (IS_PROD == true) {
        svgMapObject = document.getElementById("svgMapObject");
        svgDoc = svgMapObject.contentDocument;
        countyPathElements = svgDoc.getElementsByTagName("path");
    } else {
        svgMapObject_DemoObj = document.getElementById("svgMapObject_Demo");
        svgDoc_demo = svgMapObject_DemoObj.contentDocument;
        countyPathElements = svgDoc_demo.getElementsByTagName("path");
    }
    
    // SVG paths in demo map.
    /*let countyPathElements = svgDoc_demo.getElementsByTagName("path");*/

    // Main loop for map events
    for (let i = 0; i < countyPathElements.length; i++) {

        countyPathElements[i].setAttribute("fill", "#F2F2F2");

        if ((compareTenant(countyPathElements[i].id))) {

            countyPathElements[i].addEventListener("click", function () {
                mapSelectCountyToggle(countyPathElements[i]);
            });
        }
    }

    // Toggles selection on map element
    function mapSelectCountyToggle(aCounty) {

        // Check if grey - deselected
        if (aCounty.getAttribute("fill") == "#F2F2F2") {
            aCounty.setAttribute("fill", "#ffb74d");
            listGroupItemBuilder(aCounty.id)
            isSelectedCounty = true;
            return isSelectedCounty;
        }

        // Check if orange - selected
        if (aCounty.getAttribute("fill") == "#ffb74d") {
            aCounty.setAttribute("fill", "#F2F2F2");
            listGroupItemDestroyer(aCounty.id);
            isSelectedCounty = false;
            return isSelectedCounty;
        }
    }

    // Builds a list-group item and appends it to the list container using the CountyObject data
    function listGroupItemBuilder(aCountyId) {

        let listItemTemplateString = '<li id="' + aCountyId + '" class="list-group-item"><h5>' + aCountyId + '</li>';
        $("#UserselectedCountiesList").append(listItemTemplateString);

    }

    // Removes a list-group item
    function listGroupItemDestroyer(aCountyId) {

        $("#" + aCountyId).remove();

    }

    // Clear all items from list-group
    $("#clearAll_btn").click(function () {

        $("#UserselectedCountiesList").empty();

        for (let i = 0; i < countyPathElements.length; i++) {
            countyPathElements[i].setAttribute("fill", "#F2F2F2");
        }

    });

    // Handles the click event which finalizes the selected data for backend processing
    $("#queryData_btn").click(function () {
        console.log("queryData_btn clicked!");
        populateSelectedCountyArray();
    });

    // Gets the list elements and populates the list
    function populateSelectedCountyArray() {
        let listElements = document.getElementsByTagName("li");

        for (let i = 0; i < listElements.length; i++) {
            selectedCounties.push(listElements[i].id);
        }

        console.log(selectedCounties);
    }

    // Clear selected items from list-group
    //$("#clearSelection_btn").click(function () {

    //    removeCheckedCounties();

    //    // Needs to only recolor items that are checked.
    //    for (let i = 0; i < countyPathElements.length; i++) {
    //        countyPathElements[i].setAttribute("fill", "#F2F2F2");
    //    }
    //});

    //function removeCheckedCounties() {
    //    const countiesCheckedForRemoval = document.querySelectorAll('.form-check-input:checked');
    //    Array.prototype.forEach.call(countiesCheckedForRemoval, function (countiesCheckedForRemoval) {
    //        countiesCheckedForRemoval.closest('.list-group-item').remove();
    //    });
    //}

    // Compare opted-in counties to current active event county
    function compareTenant(currCounty) {

        for (let i = 0; i < countiesOptedIn.length; i++) {

            if (currCounty == countiesOptedIn[i].TenantName) {
                return true;
            }

        }

    }

};