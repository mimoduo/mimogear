/* ================
// Drawer
// ============= */

function drawer(parameters) {

  var drawerTrigger = document.querySelector(parameters.trigger);

  drawerTrigger.addEventListener('click', activateDrawer, false);

}

function activateDrawer() {

  document.body.classList.toggle('drawer-active');

}

/* ================
// Harmonica
//   http://codepen.io/mimoduo/pen/epZaMq
// ============= */

function harmonica(parameters) {

  var container = document.querySelector(parameters.container);
  var headings = document.querySelectorAll(parameters.header);
  var articles = document.querySelectorAll(parameters.content);

  var currentNote = '';

  for (var i = 0; i < headings.length; i++) {
    headings[i].addEventListener('click', toggleNote, false);
  }

  headings[0].click();

  function clearClasses() {

    for (var i = 0; i < headings.length; i++) {
      headings[i].classList.remove('active');
    }

  }

  function assignClasses(currentNote) {

    currentNote.classList.add('active');

  }

  function toggleNote(event) {

    currentNote = event.currentTarget;

    clearClasses();
    assignClasses(currentNote);

  }

}

/* ================
// Lantern
//   http://codepen.io/mimoduo/pen/EPerjv
// ============= */

function lantern(parameters) {

  var lantern = document.querySelector(parameters.container);

  var content = document.createElement('div');
  content.classList.add('lantern-content');
  lantern.appendChild(content);

  var holder = document.createElement('img');
  holder.classList.add('lantern-holder');
  content.appendChild(holder);

  var prev = document.createElement('button');
  prev.addEventListener('click', previousLight, false);
  prev.classList.add('lantern-control', 'lantern-previous');
  prev.innerHTML = '<svg class="symbol symbol-prev"><use xlink:href="' + parameters.prevSymbol + '"></use></svg>';
  content.appendChild(prev);

  var next = document.createElement('button');
  next.addEventListener('click', nextLight, false);
  next.classList.add('lantern-control', 'lantern-next');
  next.innerHTML = '<svg class="symbol symbol-next"><use xlink:href="' + parameters.nextSymbol + '"></use></svg>';
  content.appendChild(next);

  var close = document.createElement('button');
  close.addEventListener('click', removeLight, false);
  close.classList.add('lantern-control', 'lantern-close');
  close.innerHTML = '<svg class="symbol symbol-close"><use xlink:href="' + parameters.closeSymbol + '"></use></svg>';
  content.appendChild(close);

  var lanternLights = document.querySelectorAll('.lantern-light');

  var lightCollection = [];
  var lightIndex = 0;

  for(var i = 0; i < lanternLights.length; i++) {
    lanternLights[i].addEventListener('click', displayLight, false);

    lightCollection[i] = [];
    lightCollection[i].push(
      lanternLights[i].getAttribute('src'),
      lanternLights[i].getAttribute('title')
    );
  }

  function previousLight() {

    if(lightIndex == 0) {
      lightIndex = lightCollection.length - 1;
    } else {
      lightIndex--;
    }

    setLight();

  }

  function nextLight() {

    if(lightIndex == lightCollection.length - 1) {
      lightIndex = 0;
    } else {
      lightIndex++;
    }

    setLight();

  }

  function displayLight(light) {

    grabLight(light);
    setLight();

    lantern.classList.add('display-lantern');
    document.body.classList.add('lantern-triggered');

  }

  function removeLight() {

    lantern.classList.remove('display-lantern');
    document.body.classList.remove('lantern-triggered');

  }

  function grabLight(light) {

    for (i = 0; i < lightCollection.length; i++) {

      if (light.target.getAttribute('src') == lightCollection[i][0]) {
        lightIndex = i;
      }

    }

  }

  function setLight() {

    holder.setAttribute('src', lightCollection[lightIndex][0]);
    holder.setAttribute('alt', lightCollection[lightIndex][1]);
    holder.setAttribute('title', lightCollection[lightIndex][1]);

  }

}

/* ================
// Sail Slide
// ============= */

function sail(container, elements, backSymbol, forwardSymbol) {

  var sailboat = {};

  sailboat.container = '.sail-slide' || container;
  sailboat.slides = 'li' || elements;
  sailboat.backSymbol = '#arrow-back' || backSymbol;
  sailboat.forwardSymbol = '#arrow-forward' || forwardSymbol;

  sailboat.slides = document.querySelectorAll(sailboat.container + ' ' + sailboat.slides);
  sailboat.container = document.querySelector(sailboat.container);

  /* Create a document fragment to hold sail controls */
  var sailFragment = document.createDocumentFragment();
  var sail = sailboat.container;

  sail.directions = document.createElement('nav');
  sail.directions.classList.add('sail-directions');
  sailFragment.appendChild(sail.directions);

  sail.back = document.createElement('button');
  sail.back.innerHTML = '<svg class="symbol symbol-sail-direction"><use xlink:href="' + sailboat.backSymbol + '"></use></svg>';
  sail.back.classList.add('sail-direction', 'sail-back');
  sail.back.addEventListener('click', sailBack, false);
  sail.directions.appendChild(sail.back);

  sail.forward = document.createElement('button');
  sail.forward.innerHTML = '<svg class="symbol symbol-sail-direction"><use xlink:href="' + sailboat.forwardSymbol + '"></use></svg>';
  sail.forward.classList.add('sail-direction', 'sail-forward');
  sail.forward.addEventListener('click', sailForward, false);
  sail.directions.appendChild(sail.forward);

  sail.markers = document.createElement('nav');
  sail.markers.classList.add('sail-markers');
  sailFragment.appendChild(sail.markers);

  sail.keys = [];

  for(var i = 0; i < sailboat.slides.length; i++) {

    sail.key = document.createElement('button');
    sail.key.classList.add('sail-key');
    sail.key.addEventListener('click', sailTo.bind(null, i), false);
    sail.keys.push(sail.key);
    sail.markers.appendChild(sail.key);

    sailboat.slides[i].classList.add('sail');

  }

  sail.appendChild(sailFragment);

  var currentSlide = 0;
  sailTo(currentSlide);

  function clearClasses() {

    for (var i = 0; i < sailboat.slides.length; i++) {
      sail.keys[i].classList.remove('active');
      sailboat.slides[i].classList.remove('active');
    }

  }

  function assignClasses(index) {

    sail.keys[index].classList.add('active');
    sailboat.slides[index].classList.add('active');

  }

  function sailBack() {

    if(currentSlide === 0) {
      currentSlide = sailboat.slides.length;
    }

    currentSlide = currentSlide - 1;

    sailTo(currentSlide);

  }

  function sailForward() {

    if (currentSlide == sailboat.slides.length - 1) {
      currentSlide = -1;
    }

    currentSlide = currentSlide + 1;

    sailTo(currentSlide);

  }

  function sailTo(currentSlide) {

    clearClasses();
    assignClasses(currentSlide);

  }

}

/* ================
// Main Site Function
// ============= */

site();

function site() {

  drawer({
    trigger: '.drawer-trigger'
  });

  sail();

  harmonica({
    container: '.harmonica',
    header: '.harmonica-header',
    content: '.harmonica-content'
  });

  lantern({
    container: '.lantern',
    prevSymbol: '#arrow-back',
    nextSymbol: '#arrow-forward',
    closeSymbol: '#close'
  });

}

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
