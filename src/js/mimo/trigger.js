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

    t.trigger.addEventListener('click', function() {
      Trigger.activateTrigger(t.activeClass);
    });

  },

  activateTrigger: function(className) {
    document.body.classList.toggle(className);
  }

};
