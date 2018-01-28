var tab_title = '';
var URL =''

function display_h1 (results) {
  

  //console.log(results);
  URL = results[0];
  URL = URL.replace("watch?v=", "embed/");
    chrome.storage.sync.get([URL], function(items) {
      var person = {firstName:"John", lastName:"Doe", age:46};
      item=items[[URL]];
      console.log(item['tags']);
      insertAnnotation(item);
      // document.getElementById('annotation_name').innerHTML=item['annotation_name'];
      // document.getElementById('tags').innerHTML=item['tags'];
      // document.getElementById('geo_cord').innerHTML=item['geo_cord'];
      // document.getElementById('link').innerHTML=item['link'];
      // document.getElementById('notes').innerHTML=item['notes'];
      window.location="popup.html";
      
  });
}

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.URL'
  }, display_h1);
});
function insertAnnotation(item)
{
  chrome.tabs.query({active: true}, function(tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    var script_code="var elem = document.createElement('div');"
    script_code+='elem.innerHTML="<label style=\\"color: white\\">Annotation Name:</label><p style=\\"color:red\\" id=\\"annotation_name\\">'+item['annotation_name']+'</p><label style=\\"color: white\\">Tags:</label><p style=\\"color:red\\" id=\\"tags\\">'+item['tags']+'</p><label style=\\"color: white\\">Link:</label><p style=\\"color:red\\" id=\\"link\\">'+item['link']+'</p><label style=\\"color: white\\">Geographical Coordinates:</label><p style=\\"color:red\\" id=\\"geo_cord\\">'+ item['geo_cord']+'</p><label style=\\"color: white\\">Notes:</label><p style=\\"color:red\\" id=\\"notes\\">'+item['notes']+'</p>";';
    script_code+='elem.style.cssText=\"position: fixed; border-radius: 25px; padding: 20px;left: 0;right: 0;top: 0;bottom: 0;background-color: #333333;-moz-opacity:.80;filter:alpha(opacity=80);opacity:.80;z-index: 10000000; height: 250px ;width:250px;\\"\";';
    script_code+='elem.setAttribute(\"id\",\"div_annotation\");'
    script_code+='document.body.appendChild(elem);';
    chrome.tabs.executeScript(tab.id,{code: script_code.toString()},
    function(){
      console.log("Insert succesfuly");
    });
  });
}