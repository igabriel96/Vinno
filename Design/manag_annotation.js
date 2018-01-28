
function deleteAnnotation() {
  var annotation_name = localStorage.getItem('annotation_name');
  var tags = localStorage.getItem('tags');
  var geo_cord = localStorage.getItem('geo_cord');
  var link = localStorage.getItem('link');
  var notes = localStorage.getItem('notes');

  localStorage.removeItem('annotation_name');
  localStorage.removeItem('tags');
  localStorage.removeItem('geo_cord');
  localStorage.removeItem('link');
  localStorage.removeItem('notes');

}

//add handler for submit button
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('delete').addEventListener('click', deleteAnnotation);
});
