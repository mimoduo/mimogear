/*

  mimo/drawer

*/


/* ================
// Drawer
// ============= */

function drawer() {

  var drawerTrigger = document.querySelector('.drawer-trigger');

  drawerTrigger.addEventListener('click', activateDrawer, false);

}

function activateDrawer() {

  document.body.classList.toggle('drawer-active');

}
