/* ================
// Lantern
//   http://codepen.io/mimoduo/pen/EPerjv
// ============= */

function lantern(parameters) {

  var lantern = document.querySelector(parameters.container);

  var content = document.createElement('div');
  content.classList.add('lantern-content');
  lantern.appendChild(content);

  var holder = document.createElement('img');
  holder.classList.add('lantern-holder');
  content.appendChild(holder);

  var prev = document.createElement('button');
  prev.addEventListener('click', previousLight, false);
  prev.classList.add('lantern-control', 'lantern-previous');
  prev.innerHTML = '<svg class="symbol symbol-prev"><use xlink:href="' + parameters.prevSymbol + '"></use></svg>';
  content.appendChild(prev);

  var next = document.createElement('button');
  next.addEventListener('click', nextLight, false);
  next.classList.add('lantern-control', 'lantern-next');
  next.innerHTML = '<svg class="symbol symbol-next"><use xlink:href="' + parameters.nextSymbol + '"></use></svg>';
  content.appendChild(next);

  var close = document.createElement('button');
  close.addEventListener('click', removeLight, false);
  close.classList.add('lantern-control', 'lantern-close');
  close.innerHTML = '<svg class="symbol symbol-close"><use xlink:href="' + parameters.closeSymbol + '"></use></svg>';
  content.appendChild(close);

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

    holder.setAttribute('src', lightCollection[lightIndex][0]);
    holder.setAttribute('alt', lightCollection[lightIndex][1]);
    holder.setAttribute('title', lightCollection[lightIndex][1]);

  }

}
