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
