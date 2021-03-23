/* 
 ODOT Mileage Report Interactive Map
 ===================================
 Author: Nicholas Fazzolari for AOC/ORP
 ===================================
 This script implements the interactivity of the ODOT Mileage Report
 interactive SVG map.
 */

window.onload = function () {
    let k = 0;                                                  // lcv for opted-in tenants (sloppy...)
    // County data arrays
    let selectedCounties = [];
    let oregonCounties = [
        'Baker',
        'Benton',
        'Clackamas',
        'Clatsop',
        'Columbia',
        'Coos',
        'Crook',
        'Curry',
        'Deschutes',
        'Douglas',
        'Gilliam',
        'Grant',
        'Harney',
        'Hood River',
        'Jackson',
        'Jefferson',
        'Josephine',
        'Klamath',
        'Lake',
        'Lane',
        'Lincoln',
        'Linn',
        'Malheur',
        'Marion',
        'Morrow',
        'Multnomah',
        'Polk',
        'Sherman',
        'Tillamook',
        'Umatilla',
        'Union',
        'Wallowa',
        'Wasco',
        'Washington',
        'Wheeler',
        'Yamhill'
    ];
    let countiesOptedIn = [
        {
            "Tenant_Key": 2,
            "TenantName": "Baker"
        },
        {
            "Tenant_Key": 20,
            "TenantName": "Lake"
        },
        {
            "Tenant_Key": 22,
            "TenantName": "Lincoln"
        },
        {
            "Tenant_Key": 23,
            "TenantName": "Linn"
        }
    ];
    // User county selection flag
    let isSelectedCounty = false;
    // SVG object and document variables
    let svgMapObject = document.getElementById("svgMapObject");	    // Get the Object by ID
    let svgDoc = svgMapObject.contentDocument;					    // Get the SVG document inside the Object tag

    // Contains an HTML Collection of all shape tags in the SVG file.
    let countyPathElements = svgDoc.getElementsByTagName("path");

    // Attach mouse events to all county svg shapes
    for (let i = 0; i < countyPathElements.length; i++) {

        // Mouseover event which changes color and sets text label in county details panel
        countyPathElements[i].addEventListener("mouseover", function () {

            countyPathElements[i].setAttribute("fill", "#5399ee");
            document.getElementById("countyNameLabel").innerText = countyPathElements[i].id + " County";

        });

        // Mouseout event which checks for opted in counties to preserve green highlighting
        countyPathElements[i].addEventListener("mouseout", function () {

            if (compareTenant(countyPathElements[i].id)) {
                countyPathElements[i].setAttribute("fill", "#a5d6a7");
                document.getElementById("countyNameLabel").innerText = "No County Selected";
            }
            else {
                countyPathElements[i].setAttribute("fill", "#f2f2f2");
                document.getElementById("countyNameLabel").innerText = "No County Selected";
            }

        });

        // Click event for multiselect
        if ((compareTenant(countyPathElements[i].id))) {

            countyPathElements[i].addEventListener("click", function () {
                mapSelectCountyToggle(countyPathElements[i]);
            });
        }

    }

    // Toggles selection on map element
    function mapSelectCountyToggle(aCounty) {

        aCounty.setAttribute("fill", "#a5d6a7");

        // Check if grey - deselected
        if (aCounty.getAttribute("fill") == "#a5d6a7") {
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

    // Paint opted in counties green
    for (let i = 0; i < countyPathElements.length; i++) {
        
        if (countiesOptedIn[k].TenantName == countyPathElements[i].id) {
            k++
            countyPathElements[i].setAttribute("fill", "#a5d6a7");
        }

    }

    // Compare opted-in counties to current active event county
    function compareTenant(currCounty) {

        for (let i = 0; i < countiesOptedIn.length; i++) {

            if (currCounty == countiesOptedIn[i].TenantName) {
                return true;
            }

        }

    }

};