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
    elements: 'li',
    prevSymbol: '#arrow-back',
    nextSymbol: '#arrow-forward'
  });

  harmonica({
    container: '.harmonica',
    header: '.harmonica-header',
    content: '.harmonica-content'
  });

  lantern({
    container: '.lantern',
    prevSymbol: '#arrow-back',
    nextSymbol: '#arrow-forward',
    closeSymbol: '#close'
  });

}
