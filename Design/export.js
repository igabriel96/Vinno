function export_csv()
{
	chrome.storage.sync.get(null, function(items) {
    	var allKeys = Object.keys(items);
    	var rows=[];
    		chrome.storage.sync.get(allKeys, function(items2) {
    			var contentcsv=' ';
    			for(it in allKeys)
	    		{
	    			item3=items2[allKeys[it].toString()];
	    			console.log(item3['annotation_name']);
	    			contentcsv+=allKeys[it].toString();
	    			contentcsv=contentcsv.concat(',',item3['annotation_name']);
	    			contentcsv=contentcsv.concat(',',item3['tags'],',',item3['link'],',',item3['geo_cord'] ,',',item3['notes'],'\r\n');
	    		}
	    		console.log(contentcsv);
				let csvContent = "data:text/csv;charset=utf-8,";
				csvContent+=contentcsv;
				var encodedUri = encodeURI(csvContent);
				var link = document.createElement("a");
				link.setAttribute("href", encodedUri);
				link.setAttribute("download", "annotations.csv");
				document.body.appendChild(link); // Required for FF

				link.click();
  			});

		
		
	});
}
function export_json()
{
	chrome.storage.sync.get(null, function(items) {
    	var allKeys = Object.keys(items);
    	var rows=[];
    		chrome.storage.sync.get(allKeys, function(items2) {
    			
    			contentjson=JSON.stringify(items2);
				let jsonContent = "data:text/json;charset=utf-8,";
				jsonContent+=contentjson;
				var encodedUri = encodeURI(jsonContent);
				var link = document.createElement("a");
				link.setAttribute("href", encodedUri);
				link.setAttribute("download", "annotations.json");
				document.body.appendChild(link); // Required for FF

				link.click();
  			});

		
		
	});
}
document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#button_csv').addEventListener('click', export_json);
    });
document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#button_json').addEventListener('click', export_json);
    });