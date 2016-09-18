/* ================
// Drawer
// ============= */

var d,
Drawer = {

  settings: {
    trigger: document.querySelector('.drawer-trigger')
  },

  init: function(options) {

    d = this.settings;

    for (var key in options) {
      if(options.hasOwnProperty(key)) {
        d[key] = options[key];
      }
    }

    d.trigger.addEventListener('click', function() {
      Drawer.activateDrawer('drawer-active');
    });

  },

  activateDrawer: function(className) {
    document.body.classList.toggle(className);
  }

};
