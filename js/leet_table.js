(function(){

	var data = document.getElementsByClassName("data"),
		headers = document.getElementsByClassName("header");

	var headerIndex = 0;

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

})();