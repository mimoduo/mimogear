var Sail = (function() {

  var s = {};
  var o = {
    slides: '.sail-slides',
    slide: 'li',
    previous: '#arrow-back',
    next: '#arrow-forward'
  };

  var currentSlide = 0;

  var init = function(options) {
    s = o;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }

    s.slide = document.querySelectorAll(s.slides + ' ' + s.slide);
    s.slides = document.querySelector(s.slides);

    if (document.body.contains(s.slides)) {
      currentSlide = 0;

      constructSail();
      constructControls();
      constructPager();
      detailSlides();
      shift(0);
    }
  };

  var constructSail = function() {
    s.sail = document.createElement('div');
    s.sail.classList.add('sail');

    s.slides.parentNode.insertBefore(s.sail, s.slides);

    s.sail.appendChild(s.slides);
  };

  var detailSlides = function() {
    for (var i = 0; i < s.slide.length; i++) {
      s.slide[i].classList.add('sail-slide');
    }
  };

  var constructControls = function() {
    var controls = document.createElement('div');
    controls.classList.add('sail-controls');

    var previous = document.createElement('button');
    previous.classList.add('sail-control');
    previous.classList.add('sail-control-previous');
    previous.innerHTML = '<svg class="icon icon-arrow-left"><use xlink:href="' + s.previous + '"></use></svg>';
    previous.addEventListener('click', shift.bind(null, 'previous'), false);

    var next = document.createElement('button');
    next.classList.add('sail-control');
    next.classList.add('sail-control-next');
    next.innerHTML = '<svg class="icon icon-arrow-right"><use xlink:href="' + s.next + '"></use></svg>';
    next.addEventListener('click', shift.bind(null, 'next'), false);

    controls.appendChild(previous);
    controls.appendChild(next);
    s.sail.appendChild(controls);
  };

  var constructPager = function() {
    var pager = document.createElement('div');
    pager.classList.add('sail-pager');

    s.pages = [];

    for (var i = 0; i < s.slide.length; i++) {
      var page = document.createElement('button');
      page.classList.add('sail-page');
      page.addEventListener('click', shift.bind(null, i), false);
      s.pages.push(page);
      pager.appendChild(page);
    }

    s.sail.appendChild(pager);
  };

  var shift = function(type) {
    if (type == 'previous' && currentSlide > 0) {
      currentSlide--;
    } else if (type == 'next' && currentSlide < s.slide.length - 1) {
      currentSlide++;
    } else if (Number.isInteger(type)) {
      currentSlide = type;
    }

    activateSlides(currentSlide);
  };

  var deactivateSlides = function() {
    for (var i = 0; i < s.slide.length; i++) {
      s.slide[i].classList.remove('sail-slide-previous');
      s.slide[i].classList.remove('sail-slide-active');
      s.slide[i].classList.remove('sail-slide-next');

      s.pages[i].classList.remove('sail-page-previous');
      s.pages[i].classList.remove('sail-page-active');
      s.pages[i].classList.remove('sail-page-next');
    }
  };

  var activateSlides = function(slide) {
    deactivateSlides();

    for (var i = 0; i < s.slide.length; i++) {
      if (i == slide) {
        if (i >= 1) {
          s.slide[i - 1].classList.add('sail-slide-previous');
          s.pages[i - 1].classList.add('sail-page-previous');
        }

        s.slide[i].classList.add('sail-slide-active');
        s.pages[i].classList.add('sail-page-active');

        if (i < s.slide.length - 1) {
          s.slide[i + 1].classList.add('sail-slide-next');
          s.pages[i + 1].classList.add('sail-page-next');
        }
      }
    }
  };

  return {
    init: init,
    shift: shift
  };

})();
