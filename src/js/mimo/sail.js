/* ================
// Sail Slide
// ============= */

function sail(container, backSymbol, forwardSymbol) {

  var sail = {};

  if(container === undefined) {
    sail.container = '.sail';
  } else {
    sail.container = parameters.container;
  }

  sail.container = document.querySelectorAll(sail.container);

  if(backSymbol === undefined) {
    sail.backSymbol = '#arrow-back';
  } else {
    sail.backSymbol = parameters.backSymbol;
  }

  if(forwardSymbol === undefined) {
    sail.forwardSymbol = '#arrow-forward';
  } else {
    sail.forwardSymbol = parameters.forwardSymbol;
  }

  for(var i = 0; i < sail.container.length; i++) {

    var sailFragment = document.createDocumentFragment();
    var boat = sail.container[i];

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

    for(var x = 0; x < boat.children.length; x++) {

      boat.key = document.createElement('button');
      boat.key.classList.add('sail-key');
      boat.key.addEventListener('click', sailTo.bind(null, i), false);
      boat.markers.appendChild(boat.key);
      
    }

    boat.appendChild(sailFragment);

  }

  function sailBack() {

  }

  function sailForward() {

  }

  function sailTo(event) {

  }

}
