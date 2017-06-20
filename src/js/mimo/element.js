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
