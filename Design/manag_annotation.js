
function listAnnotation() {
  var searchWord = document.getElementById('cautare').value;
  var deleteButton = document.getElementById('delete');
  searchWord = searchWord.replace(/\s/g,'');

  for (var index = 0; index < localStorage.length; index++) {
		var key = localStorage.key(index);
		var adnotare = localStorage.getItem(key);
		var jsonData = JSON.parse(adnotare);

    if (searchWord == jsonData.annotation_name) {
      localStorage.removeItem(key);
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('delete').addEventListener('click', listAnnotation);
});
