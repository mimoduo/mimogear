/* ================
// Sail Slide
// ============= */

function sail(parameters) {

  var sail = {};

  if(parameters === undefined) {
    sail.container = '.sail';
  } else {
    sail.container = parameters.container;
  }

  sail.container = document.querySelectorAll(sail.container);

  if(parameters === undefined) {
    sail.backSymbol = '#arrow-back';
  } else {
    sail.backSymbol = parameters.backSymbol;
  }

  if(parameters === undefined) {
    sail.forwardSymbol = '#arrow-forward';
  } else {
    sail.forwardSymbol = parameters.forwardSymbol;
  }

  for(var i = 0; i < sail.container.length; i++) {
    var sailFragment = document.createDocumentFragment();
    var container = sail.container[i];

    container.directions = document.createElement('nav');
    container.directions.classList.add('sail-directions');
    sailFragment.appendChild(container.directions);

    container.back = document.createElement('button');
    container.back.innerHTML = '<svg class="symbol symbol-sail-direction"><use xlink:href="' + sail.backSymbol + '"></use></svg>';
    container.back.classList.add('sail-direction', 'sail-back');
    container.back.addEventListener('click', sailBack, false);
    container.directions.appendChild(container.back);

    container.forward = document.createElement('button');
    container.forward.innerHTML = '<svg class="symbol symbol-sail-direction"><use xlink:href="' + sail.forwardSymbol + '"></use></svg>';
    container.forward.classList.add('sail-direction', 'sail-forward');
    container.forward.addEventListener('click', sailForward, false);
    container.directions.appendChild(container.forward);

    container.markers = document.createElement('nav');
    container.markers.classList.add('sail-markers');
    sailFragment.appendChild(container.markers);

    for(var x = 0; x < container.children.length; x++) {
      container.key = document.createElement('button');
      container.key.classList.add('sail-key');
      container.key.addEventListener('click', sailTo, false);
      container.markers.appendChild(container.key);
    }

    container.appendChild(sailFragment);

  }

  function sailBack() {

  }

  function sailForward() {

  }

  function sailTo(event) {

  }

}
