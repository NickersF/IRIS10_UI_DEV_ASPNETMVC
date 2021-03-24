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
    let selectionCount = 0;
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
    // SVG object and document variables
    let svgMapObject = document.getElementById("svgMapObject");	    // Get the Object by ID
    let svgDoc = svgMapObject.contentDocument;					    // Get the SVG document inside the Object tag

    // Contains an HTML Collection of all shape tags in the SVG file.
    let countyPathElements = svgDoc.getElementsByTagName("path");

    // Create and set a selection state attribute to all county svg shapes
    for (let i = 0; i < countyPathElements.length; i++) {

        countyPathElements[i].setAttribute("isSelected", "false");

    }

    // Attach mouse events to all county svg shapes
    for (let i = 0; i < countyPathElements.length; i++) {

        // Mouseover event which changes color and sets text label in county details panel
        countyPathElements[i].addEventListener("mouseover", function () {

            if (countyPathElements[i].attributes.isSelected.value == "true") {
                countyPathElements[i].setAttribute("fill", "#FFE082");
            }

            if (countyPathElements[i].attributes.isSelected.value == "false") {
                countyPathElements[i].setAttribute("fill", "#5399EE");
                document.getElementById("countyNameLabel").innerText = countyPathElements[i].id + " County";
            }

            //countyPathElements[i].setAttribute("fill", "#5399EE");
            //document.getElementById("countyNameLabel").innerText = countyPathElements[i].id + " County";

        });

        // Mouseout event which checks if a county is selected or not, and colors the county based on result
        countyPathElements[i].addEventListener("mouseout", function () {

            if (countyPathElements[i].attributes.isSelected.value == "true") {
                countyPathElements[i].setAttribute("fill", "#FFB74D");
            }

            if (countyPathElements[i].attributes.isSelected.value == "false") {

                if (compareTenant(countyPathElements[i].id)) {
                    countyPathElements[i].setAttribute("fill", "#A5D6A7");
                    document.getElementById("countyNameLabel").innerText = "No County Selected";
                }
                else {
                    countyPathElements[i].setAttribute("fill", "#F2F2F2");
                    document.getElementById("countyNameLabel").innerText = "No County Selected";
                }
            }

        });

        // Click event for multiselect
        if ((compareTenant(countyPathElements[i].id))) {

            countyPathElements[i].addEventListener("click", function () {
                mapSelectCountyToggle(countyPathElements[i]);
            });
        }

    }

    // Paint opted in counties green
    for (let i = 0; i < countyPathElements.length; i++) {

        // Stop the loop once all opted in counties have been checked
        if (countiesOptedIn.length == k) {
            break;
        }

        if (countyPathElements[i].id == countiesOptedIn[k].TenantName) {

            countyPathElements[i].setAttribute("fill", "#A5D6A7");

            k++

        }

    }

    // Selects a county object, sets attributes and adds/removes county to list-group
    function mapSelectCountyToggle(aCounty) {

        // This flag initializes the fill attribute when the click event is fired
        let initializeFill = false;

        if (!initializeFill) {
            aCounty.setAttribute("fill", "#A5D6A7");
            initializeFill = true;
        }

        // If county is not selected color it, add it to list DOM element, and open the sideBar
        if (aCounty.attributes.isSelected.value == "false") {
            aCounty.setAttribute("isSelected", "true");
            aCounty.setAttribute("fill", "#FFB74D");
            listGroupItemBuilder(aCounty.id);
            selectedCounties.push(aCounty.id);
            openSideBarOnSelectCounty();
            selectionCount++;

            return;
        }

        // If county is selected deselect it
        if (aCounty.attributes.isSelected.value == "true") {
            aCounty.setAttribute("isSelected", "false");
            aCounty.setAttribute("fill", "#A5D6A7");
            listGroupItemDestroyer(aCounty.id);
            selectedCounties.pop(aCounty.id);
            selectionCount--;

            return;
        }
    }

    // Builds a list-group item and appends it to the list container
    function listGroupItemBuilder(aCountyId) {

        let listItemTemplateString = '<li id="' + aCountyId + '" class="list-group-item"><h5>' + aCountyId + '</li>';
        $("#UserselectedCountiesList").append(listItemTemplateString);

    }

    // Removes a list-group item
    function listGroupItemDestroyer(aCountyId) {

        $("#" + aCountyId).remove();

    }

    // Opens the sideBar when a county is selected on the map
    function openSideBarOnSelectCounty() {

        let mainSideBar = document.getElementById("mainSideBar");
        let $mainSideBar = $("#mainSideBar");

        if (mainSideBar.style.display == "none") {
            $mainSideBar.fadeIn(900);
        }

    }

    // Gets the list elements and populates the list
    function populateSelectedCountyArray() {
        //let listElements = $("#UserselectedCountiesList").children();

        //for (let i = 0; i < listElements.length; i++) {
        //    selectedCounties.push(listElements[i].id);
        //}

        console.log(selectedCounties);
    }



    // Compare opted-in counties to current active event county
    function compareTenant(currCounty) {

        for (let i = 0; i < countiesOptedIn.length; i++) {

            if (currCounty == countiesOptedIn[i].TenantName) {
                return true;
            }

        }

    }

    // Clear all items from list-group
    $("#clearAll_btn").click(function () {
        clearSelection(countyPathElements);
    });

    // Removes the selected state from all opted in counties, removes list-group elements, and clears selected counties array
    function clearSelection(selection) {

        let itemsDeselected = 0;

        // Resets coloring and selected state for each selected county
        for (let i = 0; i < selection.length; i++) {

            // Stop the loop once all opted in counties have been checked
            if (itemsDeselected == selectionCount) {
                break;
            }

            if ((compareTenant(selection[i].id)) && (selection[i].getAttribute("isSelected") == "true")) {

                selection[i].setAttribute("fill", "#A5D6A7");
                selection[i].setAttribute("isSelected", "false");
                itemsDeselected++;
            }

        }

        // Empty the list-group elements (clears the visual list)
        $("#UserselectedCountiesList").empty();

        // Empty the array of selected counties
        selectedCounties.splice(0, selectedCounties.length);

    }

    // Handles the click event which finalizes the selected data for backend processing
    $("#queryData_btn").click(function () {
        populateSelectedCountyArray();
    });

};