var Trigger = (function() {

  var s = {
    trigger: '.trigger',
    activeBodyClass: 'trigger-activated'
  };

  var init = function(options) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }

    selectTrigger();
  };

  var selectTrigger = function() {
    trigger = document.querySelector(s.trigger);

    if(document.body.contains(trigger)) {
      trigger.addEventListener('click', activateTrigger);
    }
  };

  var activateTrigger = function() {
  
    document.body.classList.toggle(s.activeBodyClass);

  };

  return {
    init: init
  };

})();
