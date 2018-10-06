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

var El = (function() {

  var s = {};
  var o = {
    class: 'generated'
  };

  /* Run through user settings and compare with El settings */
  var override = function(options) {
    s = o;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }
  };

  /* Create a new element given an object of options */
  var create = function(kind, options) {
    override(options);

    var newEl = document.createElement(kind);

    if (Array.isArray(s.class)) {
      s.class.forEach(function(className) {
        newEl.classList.add(className);
      });
    } else {
      newEl.classList.add(s.class);
    }

    if (s.type) newEl.type = s.type;
    if (s.value) newEl.value = s.value;
    if (s.innerHTML) newEl.innerHTML = s.innerHTML;

    if (s.attributes) {
      for (var attr in s.attributes) {
        if (s.attributes.hasOwnProperty(attr)) {
          newEl.setAttribute(attr.toString(), s.attributes[attr]);
        }
      }
    }

    if (s.on) newEl.addEventListener(s.on[0], s.on[1], false);

    return newEl;
  };

  return {
    create: create
  };

})();

var Lantern = (function() {

  var s = {};
  var o = {
    lantern: '.lantern',
    lanternLights: '.lantern-light',
    lightCollection: [],
    lightIndex: 0,
    previous: '#arrow-back',
    next: '#arrow-forward',
    close: '#close',
    vdom: {},
    activeClass: 'lantern-visible'
  };

  var init = function(options) {
    s = o;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }

    s.lantern = document.querySelector(s.lantern);
    s.lanternLights = document.querySelectorAll(s.lanternLights);

    if (document.body.contains(s.lantern)) {
      constructLantern();
      bindControls();
      bindLights();
    }
  };

  var constructLantern = function() {

    s.lantern.innerHTML = '<div class="lantern-content">' +
      '<img class="lantern-holder">' +
      '<button class="lantern-control lantern-control-previous"><svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + s.previous + '"></use></svg></button>' +
      '<button class="lantern-control lantern-control-next"><svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + s.next + '"></use></svg></button>' +
      '<button class="lantern-control lantern-control-close"><svg class="icon icon-close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg></button>' +
    '</div>';

    s.vdom.content = document.querySelector('.lantern-content');
    s.vdom.holder = document.querySelector('.lantern-holder');

    s.vdom.previous = document.querySelector('.lantern-control-previous');
    s.vdom.next = document.querySelector('.lantern-control-next');
    s.vdom.close = document.querySelector('.lantern-control-close');

  };

  var bindControls = function() {

    s.vdom.previous.addEventListener('click', function() {
      previousLight();
    });

    s.vdom.next.addEventListener('click', function() {
      nextLight();
    });

    s.vdom.close.addEventListener('click', function() {
      removeLight();
    });

  };

  var bindLights = function() {

    for (var i = 0; i < s.lanternLights.length; i++) {
      s.lanternLights[i].setAttribute('tabindex', '0');

      s.lanternLights[i].addEventListener('click', function(event) {
        displayLight(event);
      });

      s.lightCollection[i] = [];
      s.lightCollection[i].push(
        s.lanternLights[i].getAttribute('src'),
        s.lanternLights[i].getAttribute('title')
      );
    }

  };

  var removeLight = function() {

    s.lantern.classList.remove(s.activeClass);

  };

  var previousLight = function() {

    if (s.lightIndex === 0) {
      s.lightIndex = s.lightCollection.length - 1;
    } else {
      s.lightIndex--;
    }

    setLight();

  };

  var nextLight = function() {

    if (s.lightIndex == s.lightCollection.length - 1) {
      s.lightIndex = 0;
    } else {
      s.lightIndex++;
    }

    setLight();

  };

  var displayLight = function(light) {

    grabLight(light);
    setLight();

    s.lantern.classList.add(s.activeClass);

  };

  var grabLight = function(light) {

    for (i = 0; i < s.lightCollection.length; i++) {

      if (light.target.getAttribute('src') == s.lightCollection[i][0]) {
        s.lightIndex = i;
      }

    }

  };

  var setLight = function() {

    s.vdom.holder.setAttribute('src', s.lightCollection[s.lightIndex][0]);
    s.vdom.holder.setAttribute('alt', s.lightCollection[s.lightIndex][1]);
    s.vdom.holder.setAttribute('title', s.lightCollection[s.lightIndex][1]);
    s.vdom.content.setAttribute('title', s.lightCollection[s.lightIndex][1]);

  };

  return {
    init: init,
    displayLight: displayLight
  };

})();

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

var Trigger = (function() {

  var s = {};
  var o = {
    toggle: true,
    remove: false
  };

  var init = function(options) {
    s = o;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }

    s.element = document.querySelector(s.trigger);

    if (document.body.contains(s.element)) setupTrigger();

    return s;
  };

  var setupTrigger = function() {
    s.element.addEventListener('click', distributeClasses, false);
  };

  var distributeClasses = function() {
    if (s.toggle) {
      if (s.class) s.element.classList.toggle(s.class);
      if (s.bodyClass) document.body.classList.toggle(s.bodyClass);
      if (s.parentClass) s.element.parentNode.classList.toggle(s.parentClass);
    } else {
      if (s.class) s.element.classList.add(s.class);
      if (s.bodyClass) document.body.classList.add(s.bodyClass);
      if (s.parentClass) s.element.parentNode.classList.add(s.parentClass);
    }

    if (s.remove) {
      if (s.target.class) s.target.trigger.classList.remove(s.target.class);
      if (s.target.bodyClass) document.body.classList.remove(s.target.bodyClass);
      if (s.target.parentClass) s.target.trigger.parentNode.classList.remove(s.target.parentClass);
    }
  };

  return {
    init: init
  };

})();

(function() {

  var menuTrigger = Trigger.init({
    trigger: '.menu-trigger',
    bodyClass: 'menu-activated'
  });

  Lantern.init();

  Sail.init();

})();
