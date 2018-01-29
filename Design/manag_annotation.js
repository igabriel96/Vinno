
function listAnnotation() {
  var firstDiv = document.getElementById('manage');

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

  }

}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('listare').addEventListener('click', listAnnotation);
});
