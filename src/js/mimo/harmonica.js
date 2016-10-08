/* ================
// Harmonica
//   http://codepen.io/mimoduo/pen/epZaMq
// ============= */

var h,
Harmonica = {

  settings: {
    headings: document.querySelectorAll('.harmonica-header'),
    articles: document.querySelectorAll('.harmonica-content'),
    activeClass: 'harmonica-header-active'
  },

  init: function(options) {

    h = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        h[key] = options[key];
      }
    }

    if(document.body.contains(h.headings[0])) {

      for (var i = 0; i < h.headings.length; i++) {
        h.headings[i].addEventListener('click', function(event) {
          Harmonica.clearClasses();
          Harmonica.assignClasses(event);
        });
      }

      h.headings[0].click();

    }

  },

  clearClasses: function() {

    for (var i = 0; i < h.headings.length; i++) {
      h.headings[i].classList.remove(h.activeClass);
    }

  },

  assignClasses: function(event) {

    event.currentTarget.classList.add(h.activeClass);

  }

};
