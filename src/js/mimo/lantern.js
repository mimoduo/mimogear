/*

  mimo/lantern
    http://codepen.io/mimoduo/pen/EPerjv

*/


/* ================
// Lantern
// ============= */

function lantern() {

  var lantern = document.querySelector('.lantern');
  var lanternContent = document.querySelector('.lantern-content');
  var lanternHolder = document.querySelector('.lantern-holder');
  var lanternLights = document.querySelectorAll('.lantern-light');

  var lanternPrevious = document.querySelector('.lantern-previous');
  var lanternNext = document.querySelector('.lantern-next');

  var lightCollection = [];
  var lightIndex = 0;

  for(var i = 0; i < lanternLights.length; i++) {
    lanternLights[i].addEventListener('click', displayLight, false);

    lightCollection[i] = [];
    lightCollection[i].push(
      lanternLights[i].getAttribute('src'),
      lanternLights[i].getAttribute('title')
    );
  }

  lanternPrevious.addEventListener('click', previousLight, false);
  lanternNext.addEventListener('click', nextLight, false);

  function previousLight() {

    if(lightIndex == 0) {
      lightIndex = lightCollection.length - 1;
    } else {
      lightIndex--;
    }

    setLight();

  }

  function nextLight() {

    if(lightIndex == lightCollection.length - 1) {
      lightIndex = 0;
    } else {
      lightIndex++;
    }

    setLight();

  }

  function displayLight(light) {

    grabLight(light);
    setLight();

    lantern.classList.add('display-lantern');

  }

  function grabLight(light) {

    for (i = 0; i < lightCollection.length; i++) {

      if (light.target.getAttribute('src') == lightCollection[i][0]) {
        lightIndex = i;
      }

    }

  }

  function setLight() {

    lanternHolder.setAttribute('src', lightCollection[lightIndex][0]);
    lanternHolder.setAttribute('alt', lightCollection[lightIndex][1]);
    lanternHolder.setAttribute('title', lightCollection[lightIndex][1]);

    lanternContent.setAttribute('title', lightCollection[lightIndex][1]);

  }

}
