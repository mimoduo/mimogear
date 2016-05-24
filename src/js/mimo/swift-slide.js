/* ================
// Swift Slide
//   http://codepen.io/mimoduo/pen/gabWmN
// ============= */

function swift(parameters) {

  var container = document.querySelector(parameters.container);
  var elements = document.querySelectorAll(parameters.container + ' ' + parameters.elements);

  var controller = document.createElement('div');
  controller.classList.add('swift-controls');
  container.appendChild(controller);

  var prev = document.createElement('button');
  prev.addEventListener('click', previousSlide, false);
  prev.classList.add('swift-control', 'swift-prev');
  prev.innerHTML = '<svg class="symbol symbol-prev"><use xlink:href="' + parameters.prevSymbol + '"></use></svg>';
  controller.appendChild(prev);

  var next = document.createElement('button');
  next.addEventListener('click', nextSlide, false);
  next.classList.add('swift-control', 'swift-next');
  next.innerHTML = '<svg class="symbol symbol-next"><use xlink:href="' + parameters.nextSymbol + '"></use></svg>';
  controller.appendChild(next);

  var currentSlide = 1;

  var pager = document.createElement('div');
  pager.classList.add('swift-pager');
  container.appendChild(pager);

  var pages = [];

  for (var i = 0; i < elements.length; i++) {

    pages.push(document.createElement('span'));

    pager.appendChild(pages[i]);

    pages[i].addEventListener('click', slide.bind(null, i), false);

  }

  pages[currentSlide].click();

  function clearClasses() {

    for (var i = 0; i < elements.length; i++) {
      pages[i].classList.remove('active');
      elements[i].classList.remove('active');
    }

  }

  function assignClasses(index) {

    pages[index].classList.add('active');
    elements[index].classList.add('active');

  }

  function slide(index) {

    clearClasses();
    assignClasses(index);

  }

  function previousSlide() {

    if(currentSlide === 0) {
      currentSlide = elements.length;
    }

    currentSlide = currentSlide - 1;

    slide(currentSlide);

  }

  function nextSlide() {

    if (currentSlide == elements.length - 1) {
      currentSlide = -1;
    }

    currentSlide = currentSlide + 1;

    slide(currentSlide);

  }

}
