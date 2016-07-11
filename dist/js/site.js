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

  var sail = {};

  sail.container = '.sail' || container;
  sail.sails = 'li' || elements;
  sail.backSymbol = '#arrow-back' || backSymbol;
  sail.forwardSymbol = '#arrow-forward' || forwardSymbol;

  sail.sails = document.querySelectorAll(sail.container + ' ' + sail.sails);
  sail.container = document.querySelector(sail.container);

  var sailFragment = document.createDocumentFragment();
  var boat = sail.container;

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

  boat.keys = [];

  for(var x = 0; x < boat.children.length; x++) {

    boat.key = document.createElement('button');
    boat.key.classList.add('sail-key');
    boat.key.addEventListener('click', sailTo.bind(null, x), false);
    boat.keys.push(boat.key);
    boat.markers.appendChild(boat.key);

  }

  boat.appendChild(sailFragment);

  var currentSlide = 0;
  sailTo(currentSlide);

  function clearClasses() {

    for (var i = 0; i < sail.sails.length; i++) {
      boat.keys[i].classList.remove('active');
      sail.sails[i].classList.remove('active');
    }

  }

  function assignClasses(index) {

    boat.keys[index].classList.add('active');
    sail.sails[index].classList.add('active');

  }

  function sailBack() {

    if(currentSlide === 0) {
      currentSlide = sail.sails.length;
    }

    currentSlide = currentSlide - 1;

    sailTo(currentSlide);

  }

  function sailForward() {

    if (currentSlide == sail.sails.length - 1) {
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

/* ================
// Main Site Function
// ============= */

site();

function site() {

  drawer({
    trigger: '.drawer-trigger'
  });

  swift({
    container: '.swift-slide',
    elements: 'li',
    prevSymbol: '#arrow-back',
    nextSymbol: '#arrow-forward'
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
