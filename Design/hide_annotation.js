chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'var element = document.getElementById(\'div_annotation\');element.outerHTML = \"\";delete element;'},

    function(){console.log("Hide annotation");});
});
window.location="popup.html";
