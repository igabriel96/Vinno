var tab_title = '';
var URL = '';

function display_h1(results) {
  URL = results[0];
  URL = URL.replace("watch?v=", "embed/");
    chrome.storage.sync.get([URL], function(items) {
      item = items[[URL]];
      console.log(item['tags']);
      document.getElementById('annotation_name').innerHTML=item['annotation_name'];
      document.getElementById('tags').innerHTML=item['tags'];
      document.getElementById('geo_cord').innerHTML=item['geo_cord'];
      document.getElementById('link').innerHTML=item['link'];
      document.getElementById('notes').innerHTML=item['notes'];

  });
}

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.URL'
  }, display_h1);
});
