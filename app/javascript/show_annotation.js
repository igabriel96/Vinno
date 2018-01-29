var tab_title = '';
var URL = '';

function display_h1 (results) {
  URL = results[0];
  URL = URL.replace("watch?v=", "embed/");

  for (var index = 0; index < localStorage.length; index++) {
    URL = URL.replace("embed/", "watch?v=");

    var key = localStorage.key(index);
    var adnotare = localStorage.getItem(key);
    var jsonData = JSON.parse(adnotare);

    if (URL === jsonData.videoURL) {
      insertAnnotation(key);
    }
  }

  window.location = "popup.html";
}

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.URL'
  }, display_h1);
});

function insertAnnotation(key) {
    var adnotare = localStorage.getItem(key);
    var jsonData = JSON.parse(adnotare);

      chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        tab_title = tab.title;

        var script_code = "";
        script_code = "var elem = document.createElement('div');"
        script_code += 'elem.innerHTML="<label style=\\"color: white\\">Annotation Name:</label>'
        + '<p style=\\"color:red\\" id=\\"annotation_name\\">' + jsonData.annotation_name +
        '</p><label style=\\"color: white\\">Tags:</label><p style=\\"color:red\\" id=\\"tags\\">' +
        jsonData.tags + '</p><label style=\\"color: white\\">Link:</label><p style=\\"color:red\\" id=\\"link\\">'
        + jsonData.link + '</p><label style=\\"color: white\\">Geographical Coordinates:</label><p style=\\"color:red\\" id=\\"geo_cord\\">'
        + jsonData.geo_cord +'</p><label style=\\"color: white\\">Notes:</label><p style=\\"color:red\\" id=\\"notes\\">'
        + jsonData.notes + '</p>";';

        script_code += 'elem.style.cssText=\"position: fixed; border-radius: 3px; font-size: 20px; padding: 20px;left: 0;right: 0;top: 0;bottom: 0;background-color: #333333;-moz-opacity:.80;filter:alpha(opacity=80);opacity:.80;z-index: 10000000; height: 550px ;width:280px;\\"\";';
        script_code += 'elem.setAttribute(\"id\",\"div_annotation\");'
        script_code += 'document.body.appendChild(elem);';
        chrome.tabs.executeScript(tab.id,{code: script_code.toString()},
        function(){
          console.log("Insert succesfuly");
        });
      });
}
