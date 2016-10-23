/* ================
// Trigger
// ============= */

var t,
Trigger = {

  settings: {
    trigger: '.trigger',
    activeBodyClass: 'trigger-active'
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
        Trigger.activateTrigger(t.activeBodyClass);
      });

    }

  },

  activateTrigger: function(className) {
    document.body.classList.toggle(className);
  }

};
