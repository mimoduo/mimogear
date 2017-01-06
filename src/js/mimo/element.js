var El = (function() {

  var s = {
    kind: 'div',
    className: 'generated'
  };

  /* Run through user settings and compare with El settings */
  var override = function(options) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }
  };

  /* Create a new element given a set of options */
  var create = function(options) {
    override(options);

    var newEl = document.createElement(s.kind);

    newEl.classList.add(s.className);

    if (s.type) newEl.type = s.type;
    if (s.value) newEl.value = s.value;
    if (s.innerHTML) newEl.innerHTML = s.innerHTML;

    if (s.attributes) {
      for (var attr in s.attributes) {
        newEl.setAttribute(attr.toString(), s.attributes[attr]);
      }
    }

    return newEl;
  };

  return {
    create: create
  };

})();
