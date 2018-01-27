var tab_title = '';

function display_h1 (results) {
  source = document.getElementById('video');

  //console.log(results);
  var url = results[0];
  // var url="https://www.youtube.com/embed/MtJ0lrIGSAE"
  var url = url.replace("watch?v=", "embed/");

  if (url.indexOf('www.youtube') !== -1) {
    //daca link-ul este unul de youtube
    source.setAttribute('src', url);
  }else if (url.indexOf('www.vimeo') !== -1) {
    source.setAttribute('src', url);
    source.setAttribute('src', "https://vimeo.com/channels/staffpicks/194312144");
  }else {
	   source.setAttribute('src', "https://www.youtube.com/watch?v=MtJ0lrIGSAE");
  }
}

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.URL'
  }, display_h1);
});

function saveAnnotation() {
  // Get a value saved in a form.
  // Check that there's some code there.
  console.log(document.getElementById("name_annotation").value);
  if (!url) {
    message('Error: No value specified');
    return;
  }

  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({url: 'theValue'}, function() {
    // Notify that we saved.

    message('Settings saved');
  });
}

//////////////////
function save() {
  var annotationObject = {
      'annotation_name': document.getElementById('annotation_name').value,
      'tags': document.getElementById('tags').value,
      'geo_cord': document.getElementById('geo_cord').value,
      'video_links': document.getElementById('video_links').value,
      'notes': document.getElementById('notes').value,
  };

  chrome.storage.sync.set({'annotation_name': annotationObject['annotation_name'],
                           'tags': annotationObject['tags'],
                           'geo_cord': annotationObject['geo_cord'],
                           'video_links': annotationObject['video_links'],
                           'notes': annotationObject['notes']}, function() {
     console.log('Settings saved');
  });

  chrome.storage.sync.get(['annotation_name', 'tags', 'geo_cord', 'video_links', 'notes'], function(items) {
      console.log('Settings retrieved', items);
  });
}

document.getElementById('submit').onclick = save;
////////


chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
   console.log('Settings saved');
});

chrome.storage.sync.get(['foo', 'bar'], function(items) {
  console.log('Settings retrieved', items);
});
