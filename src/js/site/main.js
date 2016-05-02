/*

  site/main

*/


/* ================
// Main Site Function
// ============= */

site();

function site() {

  drawer();

  swift({
    container: '.swift-slide',
    elements: 'li'
  });

  harmonica({
    container: '.harmonica',
    header: '.harmonica-header',
    content: '.harmonica-content'
  });

  lantern({
    container: '.lantern',
  });

}
