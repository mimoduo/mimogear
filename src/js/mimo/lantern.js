/* ================
// Lantern Lightbox
// ============= */

var l,
Lantern = {

  settings: {
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

    var previous = document.createElement('button');
    previous.classList.add('lantern-control');
    previous.classList.add('lantern-previous');
    previous.innerHTML = '<svg class="symbol symbol-lantern symbol-lantern-previous">' +
    '<use xlink:href="' + l.symbols.previous + '"></use>' +
    '</svg>';
    previous.addEventListener('click', function() {
      Lantern.previousLight();
    });
    content.appendChild(previous);
    l.vdom.previous = previous;

    var next = document.createElement('button');
    next.classList.add('lantern-control');
    next.classList.add('lantern-next');
    next.innerHTML = '<svg class="symbol symbol-lantern symbol-lantern-next">' +
    '<use xlink:href="' + l.symbols.next + '"></use>' +
    '</svg>';
    next.addEventListener('click', function() {
      Lantern.nextLight();
    });
    content.appendChild(next);
    l.vdom.next = next;

    var close = document.createElement('button');
    close.classList.add('lantern-control');
    close.classList.add('lantern-close');
    close.innerHTML = '<svg class="symbol symbol-lantern symbol-lantern-close">' +
    '<use xlink:href="' + l.symbols.close + '"></use>' +
    '</svg>';
    close.addEventListener('click', function() {
      Lantern.removeLight();
    });
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

  removeLight: function() {

    l.lantern.classList.remove(l.activeClass);

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
