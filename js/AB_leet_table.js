/** 
 * AB_leet_table
 * version: 1.0.0
 * 
 * leetTable() sets data-title attribute for data items containing header text
 *
 * @param {string} id - DOM element ID
 */

function leetTable(id) {

	'use strict';

	let data = document.getElementById(id).getElementsByTagName("td"),
		headers = document.getElementById(id).getElementsByTagName("th");

	let headerIndex = 0;

	for (let i=0; i<data.length; i++) {

		if (headerIndex >= headers.length) {
			headerIndex = 0;
		}

		data[i].setAttribute('data-title', headers[headerIndex].textContent);
		headerIndex++;
	}
}