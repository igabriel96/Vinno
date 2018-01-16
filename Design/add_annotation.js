var tab_title = '';
function display_h1 (results){
  source=document.getElementById('video');
//console.log(results);
  var url=results[0];
 // var url="https://www.youtube.com/embed/MtJ0lrIGSAE"
  var url=url.replace("watch?v=", "embed/");
if(url.indexOf('www.youtube') !== -1)
{
//daca link-ul este unul de youtube
  source.setAttribute('src', url);
}
else
{
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
