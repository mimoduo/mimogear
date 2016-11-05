/* ================
// Lantern
//   http://codepen.io/mimoduo/pen/EPerjv
//   https://github.com/mimoduo/Lantern
// ============= */

var l,
Lantern = {

  settings: {
    lantern: '.lantern',
    lanternLights: '.lantern-light',
    lightCollection: [],
    lightIndex: 0,
    symbols: {
      prev: '#arrow-back',
      next: '#arrow-forward',
      close: '#close'
    },
    vdom: {},
    activeClass: 'lantern-active',
    activeBodyClass: 'latern-triggered'
  },

  init: function(options) {

    l = this.settings;

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        l[key] = options[key];
      }
    }

    l.lantern = document.querySelector(l.lantern);
    l.lanternLights = document.querySelectorAll(l.lanternLights);

    if(document.body.contains(l.lantern)) {
      Lantern.constructLantern();
    }

  },

  constructLantern: function() {

    var content = document.createElement('div');
    content.classList.add('lantern-content');
    l.lantern.appendChild(content);
    l.vdom.content = content;

    var holder = document.createElement('img');
    holder.classList.add('lantern-holder');
    content.appendChild(holder);
    l.vdom.holder = holder;

    var prev = document.createElement('button');
    prev.addEventListener('click', function() {
      Lantern.previousLight();
    });
    prev.classList.add('lantern-control');
    prev.classList.add('lantern-previous');
    prev.innerHTML = '<svg class="symbol symbol-previous">' +
    '<use xlink:href="' + l.symbols.prev + '"></use>' +
    '</svg>';
    content.appendChild(prev);
    l.vdom.prev = prev;

    var next = document.createElement('button');
    next.addEventListener('click', function() {
      Lantern.nextLight();
    });
    next.classList.add('lantern-control');
    next.classList.add('lantern-next');
    next.innerHTML = '<svg class="symbol symbol-next">' +
    '<use xlink:href="' + l.symbols.next + '"></use>' +
    '</svg>';
    content.appendChild(next);
    l.vdom.next = next;

    var close = document.createElement('button');
    close.addEventListener('click', function() {
      Lantern.removeLight();
    });
    close.classList.add('lantern-control');
    close.classList.add('lantern-close');
    close.innerHTML = '<svg class="symbol symbol-close">' +
    '<use xlink:href="' + l.symbols.close + '"></use>' +
    '</svg>';
    content.appendChild(close);
    l.vdom.close = close;

    for (var i = 0; i < l.lanternLights.length; i++) {
      l.lanternLights[i].setAttribute('tabindex', '0');

      l.lanternLights[i].addEventListener('click', function(event) {
        Lantern.displayLight(event);
      });

      l.lightCollection[i] = [];
      l.lightCollection[i].push(
        l.lanternLights[i].getAttribute('src'),
        l.lanternLights[i].getAttribute('alt')
      );
    }

  },

  previousLight: function() {

    if (l.lightIndex === 0) {
      l.lightIndex = l.lightCollection.length - 1;
    } else {
      l.lightIndex--;
    }

    Lantern.setLight();

  },

  nextLight: function() {

    if (l.lightIndex == l.lightCollection.length - 1) {
      l.lightIndex = 0;
    } else {
      l.lightIndex++;
    }

    Lantern.setLight();

  },

  displayLight: function(light) {

    Lantern.grabLight(light);
    Lantern.setLight();

    l.lantern.classList.add(l.activeClass);
    document.body.classList.add(l.activeBodyClass);

  },

  removeLight: function() {

    l.lantern.classList.remove(l.activeClass);
    document.body.classList.remove(l.activeBodyClass);

  },

  grabLight: function(light) {

    for (i = 0; i < l.lightCollection.length; i++) {

      if (light.target.getAttribute('src') == l.lightCollection[i][0]) {
        l.lightIndex = i;
      }

    }

  },

  setLight: function() {

    l.vdom.holder.setAttribute('src', l.lightCollection[l.lightIndex][0]);
    l.vdom.holder.setAttribute('alt', l.lightCollection[l.lightIndex][1]);
    l.vdom.holder.setAttribute('title', l.lightCollection[l.lightIndex][1]);
    l.vdom.content.setAttribute('title', l.lightCollection[l.lightIndex][1]);

  }

};
