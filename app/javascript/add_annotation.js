var tab_title = '';
var URL =''

function display_h1 (results) {
  source = document.getElementById('video');

  var url = results[0];
  // var url="https://www.youtube.com/embed/MtJ0lrIGSAE"
  var url = url.replace("watch?v=", "embed/");
  URL = url;

  if (url.indexOf('www.youtube') !== -1) {
    source.setAttribute('src', url);
  }else if (url.indexOf('www.vimeo') !== -1) {
    source.setAttribute('src', url);
    source.setAttribute('src', "https://vimeo.com/channels/staffpicks/194312144");
  }else {
     source.setAttribute('src', "https://www.youtube.com/watch?v=MtJ0lrIGSAE");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', saveAnnotation);
});

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.URL'
  }, display_h1);
});

function saveAnnotation() {
  console.log(URL);

  var annotationObject = {
      'annotation_name': document.getElementById('annotation_name').value,
      'tags': document.getElementById('tags').value,
      'geo_cord': document.getElementById('geo_cord').value,
      'link': document.getElementById('link').value,
      'notes': document.getElementById('notes').value,
  };

  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({[URL]:annotationObject}, function() {
    console.log('Settings saved');
  });

  window.location = "popup.html";
}
