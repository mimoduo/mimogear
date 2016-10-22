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

/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.7.3';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

  /**
   * Extends the built-in list of html5 elements
   * @memberOf html5
   * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
   * @param {Document} ownerDocument The context document.
   */
  function addElements(newElements, ownerDocument) {
    var elements = html5.elements;
    if(typeof elements != 'string'){
      elements = elements.join(' ');
    }
    if(typeof newElements != 'string'){
      newElements = newElements.join(' ');
    }
    html5.elements = elements +' '+ newElements;
    shivDocument(ownerDocument);
  }

   /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document|DocumentFragment} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}' +
        // hides non-rendered elements
        'template{display:none}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment,

    //extends list of elements
    addElements: addElements
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

  if(typeof module == 'object' && module.exports){
    module.exports = html5;
  }

}(typeof window !== "undefined" ? window : this, document));

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
        h.headings[i].setAttribute('role', 'tab')
        h.articles[i].setAttribute('role', 'tabpanel')

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

/* ================
// Lantern
//   http://codepen.io/mimoduo/pen/EPerjv
//   https://github.com/mimoduo/Lantern
// ============= */

var l,
Lantern = {

  settings: {
    lantern: '.lantern',
    lanternLights: '.lantern-light',
    lightCollection: [],
    lightIndex: 0,
    symbols: {
      prev: '#arrow-back',
      next: '#arrow-forward',
      close: '#close'
    },
    vdom: {},
    activeClass: 'lantern-active',
    activeBodyClass: 'latern-triggered'
  },

  init: function(options) {

    l = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        l[key] = options[key];
      }
    }

    l.lantern = document.querySelector(l.lantern);
    l.lanternLights = document.querySelectorAll(l.lanternLights);

    if(document.body.contains(l.lantern)) {
      Lantern.constructLantern();
    }

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
    prev.innerHTML = '<svg class="symbol symbol-prev">' +
    '<use xlink:href="' + l.symbols.prev + '"></use>' +
    '</svg>';
    content.appendChild(prev);
    l.vdom.prev = prev;

    var next = document.createElement('button');
    next.addEventListener('click', function() {
      Lantern.nextLight();
    });
    next.classList.add('lantern-control', 'lantern-next');
    next.innerHTML = '<svg class="symbol symbol-next">' +
    '<use xlink:href="' + l.symbols.next + '"></use>' +
    '</svg>';
    content.appendChild(next);
    l.vdom.next = next;

    var close = document.createElement('button');
    close.addEventListener('click', function() {
      Lantern.removeLight();
    });
    close.classList.add('lantern-control', 'lantern-close');
    close.innerHTML = '<svg class="symbol symbol-close">' +
    '<use xlink:href="' + l.symbols.close + '"></use>' +
    '</svg>';
    content.appendChild(close);
    l.vdom.close = close;

    for (var i = 0; i < l.lanternLights.length; i++) {
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

    if (l.lightIndex === 0) {
      l.lightIndex = l.lightCollection.length - 1;
    } else {
      l.lightIndex--;
    }

    Lantern.setLight();

  },

  nextLight: function() {

    if (l.lightIndex == l.lightCollection.length - 1) {
      l.lightIndex = 0;
    } else {
      l.lightIndex++;
    }

    Lantern.setLight();

  },

  displayLight: function(light) {

    Lantern.grabLight(light);
    Lantern.setLight();

    l.lantern.classList.add(l.activeClass);
    document.body.classList.add(l.activeBodyClass);

  },

  removeLight: function() {

    l.lantern.classList.remove(l.activeClass);
    document.body.classList.remove(l.activeBodyClass);

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
//   https://github.com/mimoduo/Sail
// ============= */

var s,
Sail = {

  settings: {
    slides: '.sail-slides',
    slide: '.sail-slides li',
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

/* ================
// Trigger
// ============= */

var t,
Trigger = {

  settings: {
    trigger: '.trigger',
    activeClass: 'trigger-active'
  },

  init: function(options) {

    t = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        t[key] = options[key];
      }
    }

    t.trigger = document.querySelector(t.trigger);

    if(document.body.contains(t.trigger)) {

      t.trigger.addEventListener('click', function() {
        Trigger.activateTrigger(t.activeClass);
      });

    }

  },

  activateTrigger: function(className) {
    document.body.classList.toggle(className);
  }

};

/* ================
// Main Site Anonymous Function
// ============= */

(function() {

  Trigger.init({
    trigger: '.drawer-trigger',
    activeClass: 'drawer-active'
  });

  Harmonica.init();

  Lantern.init();

  Sail.init();

})();
