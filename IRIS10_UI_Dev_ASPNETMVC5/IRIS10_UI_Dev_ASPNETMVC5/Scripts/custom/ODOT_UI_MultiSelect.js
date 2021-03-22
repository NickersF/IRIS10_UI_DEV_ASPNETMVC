/*
 ODOT Mileage Report Multi Select
 ===================================
 Author: Nicholas Fazzolari for AOC/ORP
 ===================================
 This script implements the a multiselect feature for the main application
 */

window.onload = function () {

    // County object constructor
    function CountyObject(countyName, isSelected) {
        this.countyName = countyName;
        this.isSelected = isSelected;
        this.listGroupItemBuilder = listGroupItemBuilder;

        // Builds a list-group item and appends it to the list container using the CountyObject data
        function listGroupItemBuilder(countyId) {

            let listItemTemplateString = '<li id="' + countyId + '_listItem" class="list-group-item"><div class="form-check"><input id="' + countyId + '_check" class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="' + countyId + '_check">' + countyId + '</label></div></li>';
            $("#UserselectedCountiesList").append(listItemTemplateString);

        }
    }

    // Selected county objects
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

    // JS SVG and svg DOM instances
    let svgMapMultiselectObj = document.getElementById("svgMapMultiselect");
    let svgDoc = svgMapMultiselectObj.contentDocument;

    // Collection of svg paths.
    let countyPathElements = svgDoc.getElementsByTagName("path");

    // Main loop for map events
    for (let i = 0; i < countyPathElements.length; i++) {

        if ((compareTenant(countyPathElements[i].id)) && (CountyObject.isSelected)) {
            countyPathElements[i].addEventListener("click", function () {
                deselectCounty(countyPathElements[i]);
            });
        }

        if ((compareTenant(countyPathElements[i].id)) && (!CountyObject.isSelected)) {

            countyPathElements[i].addEventListener("click", function () {
                selectCounty(countyPathElements[i]);
            });

            console.log("County Selected.");
        }
    }

    function selectCounty(aCounty) {

        aCounty.setAttribute("fill", "#ff5722");        // Set bkg of map element

        // County Object
        var countyObject = new CountyObject(aCounty.id, true);
        // 
        countyObject.listGroupItemBuilder(aCounty.id);
        selectedCounties.push(countyObject);          // Add the county id to the array of selected counties

        // Logging
        console.log("County id from selectedCounty call: " + aCounty.id);
        console.log(selectedCounties);
    }

    // Deselect a county
    function deselectCounty(aCounty) {

        if (selectedCounties[i].countyName == aCounty.id) {

            aCounty.setAttribute("fill", "#F2F2F2");
            selectedCounties[i].isSelected = false;

        }
    }

    // Clear county selection list-group
    $("#clearSelection_btn").click(function () {

        $("#UserselectedCountiesList").empty();

    });

    // Compare opted-in counties to current active event county
    function compareTenant(currCounty) {

        for (let i = 0; i < countiesOptedIn.length; i++) {

            if (currCounty == countiesOptedIn[i].TenantName) {
                return true;
            }

        }

    }

    //=========================
    // Single county example
    //=========================

    //let singleCounty = svgDoc.getElementById("County_1");
    //console.log(singleCounty);

    //singleCounty.addEventListener("click", function () {
    //    selectCounty(singleCounty);
    //});

    //function selectCounty(aCounty) {

    //    aCounty.setAttribute("fill", "#5399ee");        // Set bkg of map element

    //    // Object based approach... maybe
    //    var countyObject_1 = new CountyObject(aCounty.id, true);
    //    countyObject_1.listGroupItemBuilder(aCounty.id);
    //    selectedCounties.push(countyObject_1);          // Add the county id to the array of selected counties

    //    // Logging
    //    console.log(aCounty.id);
    //    console.log(selectedCounties);
    //}

    //=========================
    // End single county example
    //=========================

};