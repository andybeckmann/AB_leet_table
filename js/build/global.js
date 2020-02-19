/** 
 * AB_leet_table
 * version: 1.0.0
 * 
 * leetTable() sets data-title attribute for data items containing header text
 *
 * @param {string} id - DOM element ID
 */

function leetTable(id) {

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
		data[i].setAttribute('data-title', headers[headerIndex].textContent);

		// Increase headerIndex
		headerIndex++;

	}
}