function listAnnotation() {
  var firstDiv = document.getElementById('manage');
  var adnotare_delete = ' '.toString();
	for (var index = 0; index < localStorage.length; index++) {
    check++;

		var key = localStorage.key(index);
		var adnotare = localStorage.getItem(key);
		var jsonData = JSON.parse(adnotare);

    var paragragh = document.createElement("p");
    paragragh.setAttribute('id', 'annotation_' + index);
    paragragh = document.createTextNode(jsonData.annotation_name);
    firstDiv.appendChild(paragragh);

    var buton = document.createElement("button");
    buton.setAttribute('id', 'buton_' + index);
    button = document.createTextNode("Delete");

    
    adnotare_delete = adnotare_delete.concat(',', jsonData.annotation_name);
    if (adnotare_delete == jsonData.annotation_name)
    {
      removeFromObjectByKey(key);
    }
  }

}
/*
function delete_annotation(){
  entry.setAttribute('id','item'+lastid);
var removeButton = document.createElement('button');
removeButton.appendChild(document.createTextNode("remove"));
removeButton.setAttribute('id','removeName("'+'item'+lastid+'")');
entry.appendChild(removeButton);
}
function removeName(itemid){
    var item = document.getElementById(itemid);
    list.removeChild(item);
}
*/
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('listare').addEventListener('click', listAnnotation);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('listare').addEventListener('click', delete_annotation);
});
