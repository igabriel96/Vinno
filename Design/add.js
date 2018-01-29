var tab_title = '';
var URL = '';
var urlVideo;

function getURLVideo() {
  return urlVideo;
}

function setURLVideo(data) {
  urlVideo = data;
}

function display_h1(results) {
  source = document.getElementById('video');

  var url = results[0];
  var url = url.replace("watch?v=", "embed/");
  URL = url;

  if (url.indexOf('www.youtube') !== -1) {
    source.setAttribute('src', url);
    setURLVideo(url.replace("embed/", "watch?v="));
  }else if (url.indexOf('www.vimeo') !== -1) {
    source.setAttribute('src', url);
    source.setAttribute('src', "https://vimeo.com/channels/staffpicks/194312144");
  }else {
     source.setAttribute('src', "https://www.youtube.com/embed/MtJ0lrIGSAE");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', saveAnnotation);
});

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.URL'
  }, display_h1);
});

function saveAnnotation() {
  var videoURL = getURLVideo();

  var annotationObject = {
      'annotation_name': document.getElementById('annotation_name').value,
      'tags': document.getElementById('tags').value,
      'geo_cord': document.getElementById('geo_cord').value,
      'link': document.getElementById('link').value,
      'notes': document.getElementById('notes').value,
      'videoURL': videoURL,
  };

  localStorage.setItem('annotation_' + localStorage.length, JSON.stringify(annotationObject));
  window.location = "popup.html";
}
