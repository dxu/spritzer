// Generated by CoffeeScript 1.6.2
(function() {
  define(['./Sprite'], function(Sprite) {
    var canvas, ctx, getCanvas, getCanvasCtx, renderEntity, setup;

    ctx = null;
    canvas = null;
    setup = function() {
      canvas = document.createElement("canvas");
      ctx = canvas.getContext("2d");
      canvas.width = 512;
      canvas.height = 480;
      return document.body.appendChild(canvas);
    };
    renderEntity = function(entity) {
      ctx.save();
      ctx.translate(entity.x, entity.y);
      entity.getSprite().render(ctx);
      return ctx.restore();
    };
    getCanvas = function() {
      return canvas;
    };
    getCanvasCtx = function() {
      return ctx;
    };
    return {
      setup: setup,
      renderEntity: renderEntity,
      getCanvas: getCanvas,
      getCanvasCtx: getCanvasCtx
    };
  });

}).call(this);
