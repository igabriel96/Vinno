var tab_title = '';
var URL = '';

function deleteAnnotation(results) {
  URL = results[0];
  URL = URL.replace("watch?v=", "embed/");

chrome.storage.sync.get([URL], function(items) {
  item = items[[URL]];
  chrome.storage.sync.remove([item["annotation_name"], item["tags"],
     item["geo_cord"], item["link"], item["notes"]], function() {
       var error = chrome.runtime.lastError;
       if (error) {
         console.log(error);
         alert("Delete");
       }
     });
  });

}

//add handler for submit button
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('delete').addEventListener('click', deleteAnnotation);
});

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.URL'
  }, deleteAnnotation);
});
