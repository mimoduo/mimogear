/* ================
// Harmonica Accordion
// ============= */

var h,
Harmonica = {

  settings: {
    headings: '.harmonica-header',
    articles: '.harmonica-content',
    symbols: {
      open: '#open',
      close: '#close'
    },
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

      Harmonica.constructHarmonica();
      h.headings[0].click();

    }

  },

  constructHarmonica: function() {

    for (var i = 0; i < h.headings.length; i++) {
      h.headings[i].setAttribute('role', 'tab');
      h.articles[i].setAttribute('role', 'tabpanel');

      var indicator = document.createElement('span');
      indicator.classList.add('harmonica-indicator');
      indicator.innerHTML = '<svg class="symbol symbol-harmonica symbol-harmonica-open">' +
      '<use xlink:href="' + h.symbols.open + '"></use>' +
      '</svg>' +
      '<svg class="symbol symbol-harmonica symbol-harmonica-close">' +
      '<use xlink:href="' + h.symbols.close + '"></use>' +
      '</svg>';

      h.headings[i].insertBefore(indicator, h.headings[i].firstChild);

      h.headings[i].addEventListener('click', function(event) {
        Harmonica.clearClasses();
        Harmonica.assignClasses(event);
      });
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
