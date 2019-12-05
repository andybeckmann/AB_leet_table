(function(){

	"use strict";

	function leet_table(id) {

		// Set vars for data and headers
		var data = document.getElementById(id).getElementsByTagName("td"),
			headers = document.getElementById(id).getElementsByTagName("th");

		// Initialize headerIndex var
		var headerIndex = 0;

		// Loop through data
		for (var i=0; i<data.length; i++) {

			// Reset headerIndex when the current index reaches the last header
			if (headerIndex >= headers.length) {
				headerIndex = 0;
			}

			// Set data-title attribute on current data item using the textContent from the table headers
			document.getElementsByClassName("data")[i].setAttribute('data-title', document.getElementsByClassName("header")[headerIndex].textContent);

			// Increase headerIndex
			headerIndex++;

		}
	}

	// Example
	leet_table("leet_table");

})();