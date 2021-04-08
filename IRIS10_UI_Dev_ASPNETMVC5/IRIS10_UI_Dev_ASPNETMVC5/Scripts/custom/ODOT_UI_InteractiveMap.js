/* 
 ODOT Mileage Report Interactive Map
 ===================================
 Author: Nicholas Fazzolari for AOC/ORP
 ===================================
 This script implements the interactivity of the ODOT Mileage Report
 interactive SVG map.
 */

window.onload = function () {
    // Counters
    let k = 0;
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
    // Modal JQuery object
    let CountyEnrollmentModal = $("#CountyEnrollmentModal");

    // Password recovery window instances
    CountyEnrollmentModal.kendoWindow({
        actions: ["Close"],
        draggable: false,
        visible: false,
        modal: true,
        resizable: false,
        width: "25%",
        title: "Enroll County Form"
    });

    // Attach mouse events to all county svg shapes
    for (let i = 0; i < countyPathElements.length; i++) {

        countyPathElements[i].setAttribute("isSelected", "false");

        // Mouseover event which changes color and sets text label in county details panel
        countyPathElements[i].addEventListener("mouseover", function () {

            if (countyPathElements[i].attributes.isSelected.value == "true") {
                countyPathElements[i].setAttribute("fill", "#FFE082");
                document.getElementById("countyNameLabel").innerText = countyPathElements[i].id + " County";
            }

            if (countyPathElements[i].attributes.isSelected.value == "false") {

                if (compareTenant(countyPathElements[i].id)) {
                    countyPathElements[i].setAttribute("fill", "#4CAF50");
                    document.getElementById("countyNameLabel").innerText = countyPathElements[i].id + " County";
                } else {
                    countyPathElements[i].setAttribute("fill", "#5399EE");
                    document.getElementById("countyNameLabel").innerText = countyPathElements[i].id + " County";
                }

            }

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
        if (compareTenant(countyPathElements[i].id)) {

            countyPathElements[i].addEventListener("click", function () {
                mapSelectCountyToggle(countyPathElements[i]);
            });
        }

        // Click event to opt in counties
        if (!compareTenant(countyPathElements[i].id)) {
            countyPathElements[i].addEventListener("click", function () {
                CountyEnrollmentModal.data("kendoWindow").center().open();
                console.log(countyPathElements[i].id + " not opted in.");
            });
        }

    }

    // Paint opted in counties green
    for (let i = 0; i < countyPathElements.length; i++) {

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

        if (aCounty.attributes.isSelected.value == "false") {
            aCounty.setAttribute("isSelected", "true");
            aCounty.setAttribute("fill", "#FFB74D");
            listGroupItemBuilder(aCounty.id);
            selectedCounties.push(aCounty.id);
            displayNumOfSelectedCounties();
            openSideBar();
            selectionCount++;

            return;
        }

        if (aCounty.attributes.isSelected.value == "true") {
            aCounty.setAttribute("isSelected", "false");
            aCounty.setAttribute("fill", "#A5D6A7");
            listGroupItemDestroyer(aCounty.id);
            removeDeselectedFromArray(aCounty.id);
            displayNumOfSelectedCounties();
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

    // Removes the deselected county from the array
    function removeDeselectedFromArray(aCountyId) {

        let index = selectedCounties.indexOf(aCountyId);
        selectedCounties.splice(index, 1);

    }

    // Compare opted-in counties to current active event county
    function compareTenant(currCountyId) {

        for (let i = 0; i < countiesOptedIn.length; i++) {

            if (currCountyId == countiesOptedIn[i].TenantName) {
                return true;
            }

        }

    }

    // Open side bar button event
    $("#mapViewOpenSideBar_btn").click(function () {
        openSideBar();
    });

    // Opens the sideBar when a county is selected on the map
    function openSideBar() {

        let mainSideBar = document.getElementById("mainSideBar");
        let $mainSideBar = $("#mainSideBar");

        if (mainSideBar.style.display == "none") {
            $mainSideBar.fadeIn(900);
        }

    }

    // Select all button event
    $("#selectAll_btn").click(function () {
        selectAllCounties(countyPathElements);
    });

    // Selects all opted in counties on the map
    function selectAllCounties(aCounty) {

        let initializeFill = false;

        for (let i = 0; i < aCounty.length; i++) {

            if (!initializeFill) {
                aCounty[i].setAttribute("fill", "#A5D6A7");
                initializeFill = true;
            }

            if (selectionCount == countiesOptedIn.length) {
                displayNumOfSelectedCounties();
                openSideBar();
                break;
            }

            if ((compareTenant(aCounty[i].id)) && (aCounty[i].attributes.isSelected.value == "false")) {
                aCounty[i].setAttribute("isSelected", "true");
                aCounty[i].setAttribute("fill", "#FFB74D");
                listGroupItemBuilder(aCounty[i].id);
                selectedCounties.push(aCounty[i].id);
                selectionCount++;
            }

        }
    }

    // Clear all button event
    $("#clearAll_btn").click(function () {
        clearSelection(countyPathElements);
    });

    // Removes the selected state from all opted in counties, removes list-group elements, and clears selected counties array
    function clearSelection(selection) {

        let itemsDeselected = 0;

        for (let i = 0; i < selection.length; i++) {

            if (itemsDeselected == selectionCount) {
                break;
            }

            if ((compareTenant(selection[i].id)) && (selection[i].getAttribute("isSelected") == "true")) {

                selection[i].setAttribute("fill", "#A5D6A7");
                selection[i].setAttribute("isSelected", "false");
                itemsDeselected++;

            }

        }

        $("#UserselectedCountiesList").empty();
        selectionCount = 0;
        selectedCounties.splice(0, selectedCounties.length);
        displayNumOfSelectedCounties();
    }

    // Submit query event
    $("#queryData_btn").click(function () {
        submitQuery();
    });

    // Submits the query to the database - if success open spreadsheet view
    function submitQuery() {

        // code here for query

        $("#interactiveMapContainer").hide();
        $("#spreadsheetContainer").show();

        console.log(selectedCounties);
    }

    // Sets selected county list header text
    function displayNumOfSelectedCounties() {

        if (selectedCounties.length == 0) {
            $("#selectedCountiesLabel").text("No Counties Selected");
        } else if (selectedCounties.length == countiesOptedIn.length) {
            $("#selectedCountiesLabel").text("All Counties Selected");
        } else {
            if (selectedCounties.length == 1) {
                $("#selectedCountiesLabel").text(selectedCounties.length + " County Selected");

            } else {
                $("#selectedCountiesLabel").text(selectedCounties.length + " Counties Selected");

            }
        }

    }

};