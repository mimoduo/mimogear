/*

  mimo/lantern
    http://codepen.io/mimoduo/pen/EPerjv

*/


/* ================
// Lantern
// ============= */

function lantern(parameters) {

  var lantern = document.querySelector(parameters.container);

  var lanternContent = document.createElement('div');
  lanternContent.classList.add('lantern-content');
  lantern.appendChild(lanternContent);

  var lanternHolder = document.createElement('img');
  lanternHolder.classList.add('lantern-holder');
  lanternContent.appendChild(lanternHolder);

  var lanternPrev = document.createElement('button');
  lanternPrev.classList.add('lantern-control');
  lanternPrev.classList.add('lantern-previous');
  lanternPrev.innerHTML = '<svg class="symbol symbol-prev"><use xlink:href="' + parameters.prevSymbol + '"></use></svg>';
  lanternContent.appendChild(lanternPrev);

  var lanternNext = document.createElement('button');
  lanternNext.classList.add('lantern-control');
  lanternNext.classList.add('lantern-next');
  lanternNext.innerHTML = '<svg class="symbol symbol-next"><use xlink:href="' + parameters.nextSymbol + '"></use></svg>';
  lanternContent.appendChild(lanternNext);

  var lanternClose = document.createElement('button');
  lanternClose.classList.add('lantern-control');
  lanternClose.classList.add('lantern-close');
  lanternClose.innerHTML = '<svg class="symbol symbol-close"><use xlink:href="' + parameters.closeSymbol + '"></use></svg>';
  lanternContent.appendChild(lanternClose);

  var lanternLights = document.querySelectorAll('.lantern-light');

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

  lanternPrev.addEventListener('click', previousLight, false);

  lanternNext.addEventListener('click', nextLight, false);

  lanternClose.addEventListener('click', removeLight, false);

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

  function removeLight() {

    lantern.classList.remove('display-lantern');

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
