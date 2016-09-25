/* ================
// Sail Slide
//   http://codepen.io/mimoduo/pen/gabWmN
// ============= */

var s,
Sail = {

  settings: {
    slides: document.querySelector('.sail-slides'),
    slide: document.querySelectorAll('.sail-slides li'),
    currentSlide: 0,
    symbols: {
      prev: '#arrow-back',
      next: '#arrow-forward'
    },
    vdom: {},
    activeSlideClass: 'sail-active',
    activePageClass: 'sail-page-active'
  },

  init: function(options) {

    s = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }

    Sail.constructSail();
    Sail.sailTo(s.currentSlide);

  },

  constructSail: function() {

    var controls = document.createElement('div');
    controls.classList.add('sail-controls');
    s.slides.appendChild(controls);
    s.vdom.controls = controls;

    var prev = document.createElement('button');
    prev.innerHTML = '<svg class="symbol symbol-sail-control">' +
    '<use xlink:href="' + s.symbols.prev + '"></use>' +
    '</svg>';
    prev.classList.add('sail-control', 'sail-prev');
    prev.addEventListener('click', function() {
      Sail.sailThrough(-1);
    });
    s.vdom.controls.appendChild(prev);
    s.vdom.controls.prev = prev;

    var next = document.createElement('button');
    next.innerHTML = '<svg class="symbol symbol-sail-control">' +
    '<use xlink:href="' + s.symbols.next + '"></use>' +
    '</svg>';
    next.classList.add('sail-control', 'sail-next');
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

    s.slide.forEach(function(value, i) {
      var page = document.createElement('button');
      page.classList.add('sail-page');
      page.addEventListener('click', function() {
        Sail.sailTo(i);
      });
      s.vdom.pages.appendChild(page);
      s.vdom.page.push(page);
    });

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
      s.vdom.controls.prev.disabled = true;
      s.vdom.controls.prev.setAttribute('aria-disabled', 'true');
      s.vdom.controls.next.disabled = false;
      s.vdom.controls.next.setAttribute('aria-disabled', 'false');
    } else if (s.currentSlide < s.slide.length - 1) {
      s.vdom.controls.prev.disabled = false;
      s.vdom.controls.prev.setAttribute('aria-disabled', 'false');
      s.vdom.controls.next.disabled = false;
      s.vdom.controls.next.setAttribute('aria-disabled', 'false');
    } else if (s.currentSlide == s.slide.length - 1) {
      s.vdom.controls.prev.disabled = false;
      s.vdom.controls.prev.setAttribute('aria-disabled', 'false');
      s.vdom.controls.next.disabled = true;
      s.vdom.controls.next.setAttribute('aria-disabled', 'true');
    }

  },

  clearClasses: function() {

    for (var i = 0; i < s.slide.length; i++) {
      s.slide[i].classList.remove(s.activeSlideClass);
    }

    for (var i = 0; i < s.vdom.page.length; i++) {
      s.vdom.page[i].classList.remove(s.activePageClass);
    }

  }

};
