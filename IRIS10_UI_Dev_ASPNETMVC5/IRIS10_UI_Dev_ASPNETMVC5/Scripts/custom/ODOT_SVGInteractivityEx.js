window.onload = function () {
	// County data arrays
	var countiesOptedIn = [
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

	var svgObject = document.getElementById("svgObject");	// Get the Object by ID
	var svgDoc = svgObject.contentDocument;					// Get the SVG document inside the Object tag

	// HTML Collection of the path elments within the SVG file
	var pathElements = svgDoc.getElementsByTagName("polygon");

	console.log(pathElements);

	// Color all opted in counties green
	for (let i = 0; i < pathElements.length; i++) {

		if (pathElements[i].id == countiesOptedIn[i]) {
			pathElements[i].setAttribute("fill", "#4caf50");
		}

    }

	// Attach mouseover events to all county svg shapes
	for (let i = 0; i < pathElements.length; i++) {

		pathElements[i].addEventListener("mouseover", function () {
			pathElements[i].setAttribute("fill", "#5399ee");
			document.getElementById("countyNameLabel").innerText = pathElements[i].id + " County";
		});

		pathElements[i].addEventListener("mouseout", function () {
			pathElements[i].setAttribute("fill", "#f2f2f2");
			document.getElementById("countyNameLabel").innerText = null;
		});

    }

	// Bind event listeners to the shape
	//svgDoc.getElementById("Baker").addEventListener("mouseover", mouseOver);
	//svgDoc.getElementById("Baker").addEventListener("mouseout", mouseOut);

	//function mouseOver() {
	//	svgDoc.getElementById("Baker").setAttribute("fill", "#5399ee");
	//	document.getElementById("countyNameLabel").innerText = svgDoc.getElementById("Baker").id + " County";
	//}

	//function mouseOut() {
	//	svgDoc.getElementById("Baker").setAttribute("fill", "#f2f2f2");
	//	document.getElementById("countyNameLabel").innerText = null;
 //   }

};