(function () {

if (typeof window.Element === "undefined" || "classList" in document.documentElement) return;

var prototype = Array.prototype,
    push = prototype.push,
    splice = prototype.splice,
    join = prototype.join;

function DOMTokenList(el) {
  this.el = el;
  // The className needs to be trimmed and split on whitespace
  // to retrieve a list of classes.
  var classes = el.className.replace(/^\s+|\s+$/g,'').split(/\s+/);
  for (var i = 0; i < classes.length; i++) {
    push.call(this, classes[i]);
  }
};

DOMTokenList.prototype = {
  add: function(token) {
    if(this.contains(token)) return;
    push.call(this, token);
    this.el.className = this.toString();
  },
  contains: function(token) {
    return this.el.className.indexOf(token) != -1;
  },
  item: function(index) {
    return this[index] || null;
  },
  remove: function(token) {
    if (!this.contains(token)) return;
    for (var i = 0; i < this.length; i++) {
      if (this[i] == token) break;
    }
    splice.call(this, i, 1);
    this.el.className = this.toString();
  },
  toString: function() {
    return join.call(this, ' ');
  },
  toggle: function(token) {
    if (!this.contains(token)) {
      this.add(token);
    } else {
      this.remove(token);
    }

    return this.contains(token);
  }
};

window.DOMTokenList = DOMTokenList;

function defineElementGetter (obj, prop, getter) {
    if (Object.defineProperty) {
        Object.defineProperty(obj, prop,{
            get : getter
        });
    } else {
        obj.__defineGetter__(prop, getter);
    }
}

defineElementGetter(Element.prototype, 'classList', function () {
  return new DOMTokenList(this);
});

})();

/* ================
// Drawer
// ============= */

var d,
Drawer = {

  settings: {
    trigger: document.querySelector('.drawer-trigger'),
    activeClass: 'drawer-active'
  },

  init: function(options) {

    d = this.settings;

    for (var key in options) {
      if(options.hasOwnProperty(key)) {
        d[key] = options[key];
      }
    }

    d.trigger.addEventListener('click', function() {
      Drawer.activateDrawer(d.activeClass);
    });

  },

  activateDrawer: function(className) {
    document.body.classList.toggle(className);
  }

};

/* ================
// Harmonica
//   http://codepen.io/mimoduo/pen/epZaMq
// ============= */

var h,
Harmonica = {

  settings: {
    container: document.querySelector('.harmonica'),
    headings: document.querySelectorAll('.harmonica-header'),
    articles: document.querySelectorAll('.harmonica-content'),
    activeClass: 'note-active'
  },

  init: function(options) {

    h = this.settings;

    for (var key in options) {
      if(options.hasOwnProperty(key)) {
        h[key] = options[key];
      }
    }

    h.headings.forEach(function(heading) {
      heading.addEventListener('click', function() {
        Harmonica.toggleNote(event);
      });
    });

    h.headings[0].click();

  },

  clearClasses: function() {

    h.headings.forEach(function(heading) {
      heading.classList.remove(h.activeClass);
    });

  },

  assignClasses: function(note) {

    note.classList.add(h.activeClass);

  },

  toggleNote: function(event) {

    Harmonica.clearClasses();
    Harmonica.assignClasses(event.currentTarget);

  }

};

/* ================
// Lantern
//   http://codepen.io/mimoduo/pen/EPerjv
// ============= */

var l,
Lantern = {

  settings: {
    lantern: document.querySelector('.lantern'),
    lanternLights: document.querySelectorAll('.lantern-light'),
    lightCollection: [],
    lightIndex: 0,
    symbols: {
      prev: '#arrow-back',
      next: '#arrow-forward',
      close: '#close'
    },
    vdom: {}
  },

  init: function(options) {

    l = this.settings;

    for (var key in options) {
      if(options.hasOwnProperty(key)) {
        l[key] = options[key];
      }
    }

    Lantern.constructLantern();

  },

  constructLantern: function() {

    var content = document.createElement('div');
    content.classList.add('lantern-content');
    l.lantern.appendChild(content);
    l.vdom.content = content;

    var holder = document.createElement('img');
    holder.classList.add('lantern-holder');
    content.appendChild(holder);
    l.vdom.holder = holder;

    var prev = document.createElement('button');
    prev.addEventListener('click', function() {
      Lantern.previousLight();
    });
    prev.classList.add('lantern-control', 'lantern-prev');
    prev.innerHTML =
      '<svg class="symbol symbol-prev">'
      + '<use xlink:href="' + l.symbols.prev + '"></use>'
      + '</svg>';
    content.appendChild(prev);
    l.vdom.prev = prev;

    var next = document.createElement('button');
    next.addEventListener('click', function() {
      Lantern.nextLight();
    });
    next.classList.add('lantern-control', 'lantern-next');
    next.innerHTML =
      '<svg class="symbol symbol-next">'
      + '<use xlink:href="' + l.symbols.next + '"></use>'
      + '</svg>';
    content.appendChild(next);
    l.vdom.next = next;

    var close = document.createElement('button');
    close.addEventListener('click', function() {
      Lantern.removeLight();
    });
    close.classList.add('lantern-control', 'lantern-close');
    close.innerHTML = '<svg class="symbol symbol-close"><use xlink:href="' + l.symbols.close + '"></use></svg>';
    content.appendChild(close);
    l.vdom.close = close;

    for(var i = 0; i < l.lanternLights.length; i++) {
      l.lanternLights[i].addEventListener('click', function() {
        Lantern.displayLight(event);
      });

      l.lightCollection[i] = [];
      l.lightCollection[i].push(
        l.lanternLights[i].getAttribute('src'),
        l.lanternLights[i].getAttribute('title')
      );
    }

  },

  previousLight: function() {

    if(l.lightIndex == 0) {
      l.lightIndex = l.lightCollection.length - 1;
    } else {
      l.lightIndex--;
    }

    Lantern.setLight();

  },

  nextLight: function() {

    if(l.lightIndex == l.lightCollection.length - 1) {
      l.lightIndex = 0;
    } else {
      l.lightIndex++;
    }

    Lantern.setLight();

  },

  displayLight: function(light) {

    Lantern.grabLight(light);
    Lantern.setLight();

    l.lantern.classList.add('display-lantern');
    document.body.classList.add('lantern-triggered');

  },

  removeLight: function() {

    l.lantern.classList.remove('display-lantern');
    document.body.classList.remove('lantern-triggered');

  },

  grabLight: function(light) {

    for (i = 0; i < l.lightCollection.length; i++) {

      if (light.target.getAttribute('src') == l.lightCollection[i][0]) {
        l.lightIndex = i;
      }

    }

  },

  setLight: function() {

    l.vdom.holder.setAttribute('src', l.lightCollection[l.lightIndex][0]);
    l.vdom.holder.setAttribute('alt', l.lightCollection[l.lightIndex][1]);
    l.vdom.holder.setAttribute('title', l.lightCollection[l.lightIndex][1]);

  }

};

/* ================
// Sail Slide
//   http://codepen.io/mimoduo/pen/gabWmN
// ============= */

var s,
Sail = {

  settings: {
    slides: document.querySelector('.sail-slide'),
    slide: document.querySelectorAll('.sail-slide li'),
    currentSlide: 0,
    symbols: {
      prev: '#arrow-back',
      next: '#arrow-forward'
    },
    vdom: {}
  },

  init: function(options) {

    s = this.settings;

    for (var key in options) {
      if(options.hasOwnProperty(key)) {
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
    prev.innerHTML =
      '<svg class="symbol symbol-sail-control">'
      + '<use xlink:href="' + s.symbols.prev + '"></use>'
      + '</svg>';
    prev.classList.add('sail-control', 'sail-prev');
    prev.addEventListener('click', function() {
      Sail.sailThrough(-1);
    });
    s.vdom.controls.appendChild(prev);
    s.vdom.controls.prev = prev;

    var next = document.createElement('button');
    next.innerHTML =
      '<svg class="symbol symbol-sail-control">'
      + '<use xlink:href="' + s.symbols.next + '"></use>'
      + '</svg>';
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
    s.vdom.pages.page = [];

    s.slide.forEach(function(value, i) {
      var page = document.createElement('button');
      page.classList.add('sail-page');
      page.addEventListener('click', function() {
        Sail.sailTo(i);
      });
      s.vdom.pages.appendChild(page);
      s.vdom.pages.page.push(page);
    });

  },

  sail: function(i) {

    Sail.determineDisabledStates();

    Sail.clearClasses();
    s.slide[i].classList.add('sail-active');
    s.vdom.pages.page[i].classList.add('sail-page-active');

  },

  sailThrough: function(modifier) {

    s.currentSlide += modifier;

    Sail.sail(s.currentSlide);

  },

  sailTo: function(i) {

    s.currentSlide = i;

    Sail.sail(i);

  },

  determineDisabledStates: function() {

    if (s.currentSlide == 0) {
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

    s.slide.forEach(function(slide) {
      slide.classList.remove('sail-active');
    });

    s.vdom.pages.page.forEach(function(page) {
      page.classList.remove('sail-page-active');
    });

  }

};

/* ================
// Main Site Function
// ============= */

(function() {

  Drawer.init();

  Harmonica.init();

  Lantern.init();

  Sail.init();

})();
