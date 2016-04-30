/*

  mimo/harmonica
    http://codepen.io/mimoduo/pen/epZaMq

*/


/* ================
// Harmonica
// ============= */

function harmonica(parameters) {

  var container = document.querySelector(parameters.container);
  var headings = document.querySelectorAll(parameters.header);
  var articles = document.querySelectorAll(parameters.content);

  var currentNote = '';

  for (var i = 0; i < headings.length; i++) {
    headings[i].addEventListener('click', toggleNote, false);
  }

  headings[0].click();

  function clearClasses() {

    for (var i = 0; i < headings.length; i++) {
      headings[i].classList.remove('active');
    }

  }

  function assignClasses(currentNote) {

    currentNote.classList.add('active');

  }

  function toggleNote(event) {

    currentNote = event.currentTarget;

    clearClasses();
    assignClasses(currentNote);

  }

}
