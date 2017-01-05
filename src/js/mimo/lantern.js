var Lantern = (function() {

  var s = {
    lantern: '.lantern',
    lanternLights: '.lantern-light',
    lightCollection: [],
    lightIndex: 0,
    symbols: {
      previous: '#arrow-back',
      next: '#arrow-forward',
      close: '#close'
    },
    vdom: {},
    activeClass: 'lantern-visible'
  };

  var init = function(options) {

    l = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        l[key] = options[key];
      }
    }

    s.lantern = document.querySelector(s.lantern);
    s.lanternLights = document.querySelectorAll(s.lanternLights);

    if(document.body.contains(s.lantern)) {
      constructLantern();
    }

  };

  var constructLantern = function() {

    var content = document.createElement('div');
    content.classList.add('lantern-content');
    s.lantern.appendChild(content);
    s.vdom.content = content;

    var holder = document.createElement('img');
    holder.classList.add('lantern-holder');
    content.appendChild(holder);
    s.vdom.holder = holder;

    var previous = document.createElement('button');
    previous.classList.add('lantern-control');
    previous.classList.add('lantern-previous');
    previous.innerHTML = '<svg class="symbol symbol-lantern symbol-lantern-previous">' +
    '<use xlink:href="' + s.symbols.previous + '"></use>' +
    '</svg>';
    previous.addEventListener('click', function() {
      previousLight();
    });
    content.appendChild(previous);
    s.vdom.previous = previous;

    var next = document.createElement('button');
    next.classList.add('lantern-control');
    next.classList.add('lantern-next');
    next.innerHTML = '<svg class="symbol symbol-lantern symbol-lantern-next">' +
    '<use xlink:href="' + s.symbols.next + '"></use>' +
    '</svg>';
    next.addEventListener('click', function() {
      nextLight();
    });
    content.appendChild(next);
    s.vdom.next = next;

    var close = document.createElement('button');
    close.classList.add('lantern-control');
    close.classList.add('lantern-close');
    close.innerHTML = '<svg class="symbol symbol-lantern symbol-lantern-close">' +
    '<use xlink:href="' + s.symbols.close + '"></use>' +
    '</svg>';
    close.addEventListener('click', function() {
      removeLight();
    });
    content.appendChild(close);
    s.vdom.close = close;

    for (var i = 0; i < s.lanternLights.length; i++) {
      s.lanternLights[i].setAttribute('tabindex', '0');

      s.lanternLights[i].addEventListener('click', function(event) {
        displayLight(event);
      });

      s.lightCollection[i] = [];
      s.lightCollection[i].push(
        s.lanternLights[i].getAttribute('src'),
        s.lanternLights[i].getAttribute('alt')
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
    init: init
  };

})();
