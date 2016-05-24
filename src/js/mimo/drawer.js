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
