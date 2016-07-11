/* ================
// Sail Slide
// ============= */

function sail(container, elements, backSymbol, forwardSymbol) {

  var sailboat = {};

  sailboat.container = '.sail-slide' || container;
  sailboat.slides = 'li' || elements;
  sailboat.backSymbol = '#arrow-back' || backSymbol;
  sailboat.forwardSymbol = '#arrow-forward' || forwardSymbol;

  sailboat.slides = document.querySelectorAll(sailboat.container + ' ' + sailboat.slides);
  sailboat.container = document.querySelector(sailboat.container);

  /* Create a document fragment to hold sail controls */
  var sailFragment = document.createDocumentFragment();
  var sail = sailboat.container;

  sail.directions = document.createElement('nav');
  sail.directions.classList.add('sail-directions');
  sailFragment.appendChild(sail.directions);

  sail.back = document.createElement('button');
  sail.back.innerHTML = '<svg class="symbol symbol-sail-direction"><use xlink:href="' + sailboat.backSymbol + '"></use></svg>';
  sail.back.classList.add('sail-direction', 'sail-back');
  sail.back.addEventListener('click', sailBack, false);
  sail.directions.appendChild(sail.back);

  sail.forward = document.createElement('button');
  sail.forward.innerHTML = '<svg class="symbol symbol-sail-direction"><use xlink:href="' + sailboat.forwardSymbol + '"></use></svg>';
  sail.forward.classList.add('sail-direction', 'sail-forward');
  sail.forward.addEventListener('click', sailForward, false);
  sail.directions.appendChild(sail.forward);

  sail.markers = document.createElement('nav');
  sail.markers.classList.add('sail-markers');
  sailFragment.appendChild(sail.markers);

  sail.keys = [];

  for(var i = 0; i < sailboat.slides.length; i++) {

    sail.key = document.createElement('button');
    sail.key.classList.add('sail-key');
    sail.key.addEventListener('click', sailTo.bind(null, i), false);
    sail.keys.push(sail.key);
    sail.markers.appendChild(sail.key);

    sailboat.slides[i].classList.add('sail');

  }

  sail.appendChild(sailFragment);

  var currentSlide = 0;
  sailTo(currentSlide);

  function clearClasses() {

    for (var i = 0; i < sailboat.slides.length; i++) {
      sail.keys[i].classList.remove('active');
      sailboat.slides[i].classList.remove('active');
    }

  }

  function assignClasses(index) {

    sail.keys[index].classList.add('active');
    sailboat.slides[index].classList.add('active');

  }

  function sailBack() {

    if(currentSlide === 0) {
      currentSlide = sailboat.slides.length;
    }

    currentSlide = currentSlide - 1;

    sailTo(currentSlide);

  }

  function sailForward() {

    if (currentSlide == sailboat.slides.length - 1) {
      currentSlide = -1;
    }

    currentSlide = currentSlide + 1;

    sailTo(currentSlide);

  }

  function sailTo(currentSlide) {

    clearClasses();
    assignClasses(currentSlide);

  }

}
