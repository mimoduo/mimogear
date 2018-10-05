var Lantern = (function() {

  var s = {};
  var o = {
    lantern: '.lantern',
    lanternLights: '.lantern-light',
    lightCollection: [],
    lightIndex: 0,
    previous: '#arrow-back',
    next: '#arrow-forward',
    close: '#close',
    vdom: {},
    activeClass: 'lantern-visible'
  };

  var init = function(options) {
    s = o;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        s[key] = options[key];
      }
    }

    s.lantern = document.querySelector(s.lantern);
    s.lanternLights = document.querySelectorAll(s.lanternLights);

    if (document.body.contains(s.lantern)) {
      constructLantern();
      bindControls();
      bindLights();
    }
  };

  var constructLantern = function() {

    s.lantern.innerHTML = '<div class="lantern-content">' +
      '<img class="lantern-holder">' +
      '<button class="lantern-control lantern-control-previous"><svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + s.previous + '"></use></svg></button>' +
      '<button class="lantern-control lantern-control-next"><svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + s.next + '"></use></svg></button>' +
      '<button class="lantern-control lantern-control-close"><svg class="icon icon-close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg></button>' +
    '</div>';

    s.vdom.content = document.querySelector('.lantern-content');
    s.vdom.holder = document.querySelector('.lantern-holder');

    s.vdom.previous = document.querySelector('.lantern-control-previous');
    s.vdom.next = document.querySelector('.lantern-control-next');
    s.vdom.close = document.querySelector('.lantern-control-close');

  };

  var bindControls = function() {

    s.vdom.previous.addEventListener('click', function() {
      previousLight();
    });

    s.vdom.next.addEventListener('click', function() {
      nextLight();
    });

    s.vdom.close.addEventListener('click', function() {
      removeLight();
    });

  };

  var bindLights = function() {

    for (var i = 0; i < s.lanternLights.length; i++) {
      s.lanternLights[i].setAttribute('tabindex', '0');

      s.lanternLights[i].addEventListener('click', function(event) {
        displayLight(event);
      });

      s.lightCollection[i] = [];
      s.lightCollection[i].push(
        s.lanternLights[i].getAttribute('src'),
        s.lanternLights[i].getAttribute('title')
      );
    }

  };

  var removeLight = function() {

    s.lantern.classList.remove(s.activeClass);

  };

  var previousLight = function() {

    if (s.lightIndex === 0) {
      s.lightIndex = s.lightCollection.length - 1;
    } else {
      s.lightIndex--;
    }

    setLight();

  };

  var nextLight = function() {

    if (s.lightIndex == s.lightCollection.length - 1) {
      s.lightIndex = 0;
    } else {
      s.lightIndex++;
    }

    setLight();

  };

  var displayLight = function(light) {

    grabLight(light);
    setLight();

    s.lantern.classList.add(s.activeClass);

  };

  var grabLight = function(light) {

    for (i = 0; i < s.lightCollection.length; i++) {

      if (light.target.getAttribute('src') == s.lightCollection[i][0]) {
        s.lightIndex = i;
      }

    }

  };

  var setLight = function() {

    s.vdom.holder.setAttribute('src', s.lightCollection[s.lightIndex][0]);
    s.vdom.holder.setAttribute('alt', s.lightCollection[s.lightIndex][1]);
    s.vdom.holder.setAttribute('title', s.lightCollection[s.lightIndex][1]);
    s.vdom.content.setAttribute('title', s.lightCollection[s.lightIndex][1]);

  };

  return {
    init: init,
    displayLight: displayLight
  };

})();
