/* ================
// Harmonica
//   http://codepen.io/mimoduo/pen/epZaMq
//   https://github.com/mimoduo/Harmonica
// ============= */

var h,
Harmonica = {

  settings: {
    headings: '.harmonica-header',
    articles: '.harmonica-content',
    activeClass: 'harmonica-header-active'
  },

  init: function(options) {

    h = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        h[key] = options[key];
      }
    }

    h.headings = document.querySelectorAll(h.headings);
    h.articles = document.querySelectorAll(h.articles);

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
