/* ================
// Sail Slideshow
// ============= */

var s,
Sail = {

  settings: {
    slides: '.sail-slides',
    slide: '.sail-slides li',
    currentSlide: 0,
    symbols: {
      previous: '#arrow-back',
      next: '#arrow-forward'
    },
    vdom: {},
    activeSlideClass: 'sail-slide-active',
    activePageClass: 'sail-page-active'
  },

  init: function(options) {

    s = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }

    s.slides = document.querySelector(s.slides);
    s.slide = document.querySelectorAll(s.slide);

    if(document.body.contains(s.slides)) {

      Sail.constructSail();
      Sail.sailTo(s.currentSlide);

    }

  },

  constructSail: function() {

    var controls = document.createElement('div');
    controls.classList.add('sail-controls');
    s.slides.appendChild(controls);
    s.vdom.controls = controls;

    var previous = document.createElement('button');
    previous.classList.add('sail-control');
    previous.classList.add('sail-previous');
    previous.innerHTML = '<svg class="symbol symbol-sail symbol-sail-previous">' +
    '<use xlink:href="' + s.symbols.previous + '"></use>' +
    '</svg>';
    previous.addEventListener('click', function() {
      Sail.sailThrough(-1);
    });
    s.vdom.controls.appendChild(previous);
    s.vdom.controls.previous = previous;

    var next = document.createElement('button');
    next.classList.add('sail-control');
    next.classList.add('sail-next');
    next.innerHTML = '<svg class="symbol symbol-sail symbol-sail-next">' +
    '<use xlink:href="' + s.symbols.next + '"></use>' +
    '</svg>';
    next.addEventListener('click', function() {
      Sail.sailThrough(1);
    });
    s.vdom.controls.appendChild(next);
    s.vdom.controls.next = next;

    var pages = document.createElement('div');
    pages.classList.add('sail-pages');
    s.slides.appendChild(pages);
    s.vdom.pages = pages;
    s.vdom.page = [];

    for (var i = 0; i < s.slide.length; i++) {
      s.slide[i].classList.add('sail-slide');

      var page = document.createElement('button');
      page.classList.add('sail-page');
      page.addEventListener('click', Sail.sailTo.bind(null, i));
      s.vdom.pages.appendChild(page);
      s.vdom.page.push(page);
    }

  },

  sailThrough: function(modifier) {

    s.currentSlide += modifier;

    Sail.sail(s.currentSlide);

  },

  sailTo: function(i) {

    s.currentSlide = i;

    Sail.sail(i);

  },

  sail: function(i) {

    Sail.determineDisabledStates();

    Sail.clearClasses();
    s.slide[i].classList.add(s.activeSlideClass);
    s.vdom.page[i].classList.add(s.activePageClass);

  },

  determineDisabledStates: function() {

    if (s.currentSlide === 0) {

      s.vdom.controls.previous.disabled = true;
      s.vdom.controls.previous.setAttribute('aria-disabled', 'true');
      s.vdom.controls.next.disabled = false;
      s.vdom.controls.next.setAttribute('aria-disabled', 'false');

    } else if (s.currentSlide < s.slide.length - 1) {

      s.vdom.controls.previous.disabled = false;
      s.vdom.controls.previous.setAttribute('aria-disabled', 'false');
      s.vdom.controls.next.disabled = false;
      s.vdom.controls.next.setAttribute('aria-disabled', 'false');

    } else if (s.currentSlide == s.slide.length - 1) {

      s.vdom.controls.previous.disabled = false;
      s.vdom.controls.previous.setAttribute('aria-disabled', 'false');
      s.vdom.controls.next.disabled = true;
      s.vdom.controls.next.setAttribute('aria-disabled', 'true');

    }

  },

  clearClasses: function() {

    for (var i = 0; i < s.slide.length; i++) {
      
      s.slide[i].classList.remove(s.activeSlideClass);
      s.vdom.page[i].classList.remove(s.activePageClass);
      
    }

  }

};
