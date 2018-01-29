
function export_csv() {
	var contentcsv = ' '.toString();

	for (var index = 0; index < localStorage.length; index++) {
		var key = localStorage.key(index);
		var adnotare = localStorage.getItem(key);
		var jsonData = JSON.parse(adnotare);
	  contentcsv += key.toString();

	  contentcsv = contentcsv.concat(',', jsonData.annotation_name);
	  contentcsv = contentcsv.concat(',', jsonData.tags);
		contentcsv = contentcsv.concat(',', jsonData.geo_cord);
		contentcsv = contentcsv.concat(',', jsonData.link);
		contentcsv = contentcsv.concat(',', jsonData.notes);
		contentcsv = contentcsv.concat(',', jsonData.videoURL);
		contentcsv += '\n'.toString();
  }

	let csvContent = "data:text/csv; charset=utf-8,";
	csvContent += contentcsv;
	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "annotations.csv");
	document.body.appendChild(link);

	link.click();
}

function export_json() {
	var contentjson = '';

	for (var index = 0; index < localStorage.length; index++) {
		var key = localStorage.key(index);
		var adnotare = localStorage.getItem(key);
		var jsonData = JSON.parse(adnotare);

		contentjson += '{\n\t'.toString();
		contentjson += '"annotation_id": "'.toString();
		contentjson += key.toString() + '",\n\t\t'.toString();

		contentjson += '"annotation_name": "'.toString();
		contentjson += jsonData.annotation_name + '",\n\t\t'.toString();

		contentjson += '"tags": "'.toString();
		contentjson += jsonData.tags + '",\n\t\t'.toString();

		contentjson += '"geo_cord": "'.toString();
		contentjson += jsonData.geo_cord + '",\n\t\t'.toString();

		contentjson += '"link": "'.toString();
		contentjson += jsonData.link + '",\n\t\t'.toString();

		contentjson += '"notes": "'.toString();
		contentjson += jsonData.notes + '",\n\t\t'.toString();

		contentjson += '"videoURL": "'.toString();
		contentjson += jsonData.videoURL + '",\n'.toString();

		contentjson += '}\n\n'.toString();
	}

	let jsonContent = "data:text/json; charset=utf-8,";
	jsonContent += contentjson;
	var encodedUri = encodeURI(jsonContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "annotations.json");
	document.body.appendChild(link);

	link.click();
}

function export_xml() {
	var contentxml ='<?xml version="1.0" encoding="UTF-8"?> \n';
	contentxml += '<annotations>\n\n'.toString();

	for (var index = 0; index < localStorage.length; index++) {
		var key = localStorage.key(index);
		var adnotare = localStorage.getItem(key);
		var jsonData = JSON.parse(adnotare);

		contentxml += '\t<annotation_id>'.toString();
		contentxml += key.toString();
		contentxml += '</annotation_id>\n\t\t'.toString();

		contentxml += '<annotation_name>'.toString();
		contentxml = contentxml.concat(jsonData.annotation_name);
		contentxml += '</annotation_name>\n\t\t'.toString();

		contentxml += '<tags>'.toString();
		contentxml = contentxml.concat(jsonData.tags);
		contentxml += '</tags>\n\t\t'.toString();

		contentxml += '<geo_cord>'.toString();
		contentxml = contentxml.concat(jsonData.geo_cord);
		contentxml += '</geo_cord>\n\t\t'.toString();

		contentxml += '<link>'.toString();
		contentxml = contentxml.concat(jsonData.link);
		contentxml += '</link>\n\t\t'.toString();

		contentxml += '<notes>'.toString();
		contentxml = contentxml.concat(jsonData.notes);
		contentxml += '</notes>\n\t\t'.toString();

		contentxml += '<videoURL>'.toString();
		contentxml = contentxml.concat(jsonData.videoURL);
		contentxml += '</videoURL>\n\t\t'.toString();

		contentxml += '\n'.toString();
	}

	contentxml += '</annotations>'.toString();
	let xmlContent = "data:text/xml; charset = utf-8,";
	xmlContent += contentxml;
	var encodedUri = encodeURI(xmlContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "annotations.xml");
	document.body.appendChild(link);

	link.click();
}


document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#button_csv').addEventListener('click', export_csv);
});

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#button_json').addEventListener('click', export_json);
});

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#button_xml').addEventListener('click', export_xml);
});

function meniu() {
	window.location = "popup.html";
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('back').addEventListener('click', meniu);
});
