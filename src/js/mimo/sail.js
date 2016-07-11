/* ================
// Sail Slide
// ============= */

function sail(container, elements, backSymbol, forwardSymbol) {

  var sail = {};

  sail.container = '.sail' || container;
  sail.sails = 'li' || elements;
  sail.backSymbol = '#arrow-back' || backSymbol;
  sail.forwardSymbol = '#arrow-forward' || forwardSymbol;

  sail.sails = document.querySelectorAll(sail.container + ' ' + sail.sails);
  sail.container = document.querySelector(sail.container);

  var sailFragment = document.createDocumentFragment();
  var boat = sail.container;

  boat.directions = document.createElement('nav');
  boat.directions.classList.add('sail-directions');
  sailFragment.appendChild(boat.directions);

  boat.back = document.createElement('button');
  boat.back.innerHTML = '<svg class="symbol symbol-sail-direction"><use xlink:href="' + sail.backSymbol + '"></use></svg>';
  boat.back.classList.add('sail-direction', 'sail-back');
  boat.back.addEventListener('click', sailBack, false);
  boat.directions.appendChild(boat.back);

  boat.forward = document.createElement('button');
  boat.forward.innerHTML = '<svg class="symbol symbol-sail-direction"><use xlink:href="' + sail.forwardSymbol + '"></use></svg>';
  boat.forward.classList.add('sail-direction', 'sail-forward');
  boat.forward.addEventListener('click', sailForward, false);
  boat.directions.appendChild(boat.forward);

  boat.markers = document.createElement('nav');
  boat.markers.classList.add('sail-markers');
  sailFragment.appendChild(boat.markers);

  boat.keys = [];

  for(var x = 0; x < boat.children.length; x++) {

    boat.key = document.createElement('button');
    boat.key.classList.add('sail-key');
    boat.key.addEventListener('click', sailTo.bind(null, x), false);
    boat.keys.push(boat.key);
    boat.markers.appendChild(boat.key);

  }

  boat.appendChild(sailFragment);

  var currentSlide = 0;
  sailTo(currentSlide);

  function clearClasses() {

    for (var i = 0; i < sail.sails.length; i++) {
      boat.keys[i].classList.remove('active');
      sail.sails[i].classList.remove('active');
    }

  }

  function assignClasses(index) {

    boat.keys[index].classList.add('active');
    sail.sails[index].classList.add('active');

  }

  function sailBack() {

    if(currentSlide === 0) {
      currentSlide = sail.sails.length;
    }

    currentSlide = currentSlide - 1;

    sailTo(currentSlide);

  }

  function sailForward() {

    if (currentSlide == sail.sails.length - 1) {
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
