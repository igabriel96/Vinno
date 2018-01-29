
function listAnnotation() {
  var searchWord = document.getElementById('cautare').value;
  var deleteButton = document.getElementById('delete');
  searchWord = searchWord.replace(/\s+$/, '');

  for (var index = 0; index < localStorage.length; index++) {
		var key = localStorage.key(index);
		var adnotare = localStorage.getItem(key);
		var jsonData = JSON.parse(adnotare);
    console.log(searchWord);
    if (searchWord == jsonData.annotation_name) {
      localStorage.removeItem(key);
    }
  }

  window.location = "popup.html";
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('delete').addEventListener('click', listAnnotation);
});

function meniu() {
	window.location = "popup.html";
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('back').addEventListener('click', meniu);
});
