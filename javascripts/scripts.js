// Generated by CoffeeScript 1.6.2
(function() {
  var canvas, ctx, init, main, requestAnimFrame, reset, update;

  requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  canvas = document.createElement("canvas");

  ctx = canvas.getContext("2d");

  canvas.width = 512;

  canvas.height = 480;

  document.body.appendChild(canvas);

  main = function() {
    var dt, lastTime, now;

    now = Date.now();
    dt = (now - lastTime) / 1000.0;
    update(dt);
    lastTime = now;
    return requestAnimFrame(main);
  };

  reset = function() {};

  update = function(dt) {
    return gameTime += dt;
  };

  init = function() {
    var lastTime, terrainPattern;

    terrainPattern = ctx.createPattern(resources.get('img/terrain.png'), 'repeat');
    reset();
    lastTime = Date.now();
    return main();
  };

  resources.load(['img/sprites.png', 'img/terrain.png']);

  resources.onReady(init);

}).call(this);
