// Generated by CoffeeScript 1.6.2
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  (function() {
    var Sprite;

    Sprite = function(url, pos, size, speed, frames, dir, once) {
      var _ref;

      this.pos = pos;
      this.size = size;
      this.speed = (_ref = typeof speed === 'number') != null ? _ref : {
        speed: 0
      };
      this.frames = frames;
      this._index = 0;
      this.url = url;
      this.dir = dir || 'horizontal';
      return this.once = once;
    };
    Sprite.prototype = {
      update: function(dt) {
        return this._index += this.speed * dt;
      },
      render: function(ctx) {
        frame;
        var frame, idx, max, x, y;

        if (this.speed > 0) {
          max = this.frames.length;
          idx = Math.floor(this._index);
          frame = this.frames[idx % max];
          if (this.once && idx >= max) {
            this.done = true;
            return;
          }
        } else {
          frame = 0;
        }
        x = this.pos[0];
        y = this.pos[1];
        if (this.dir === 'vertical') {
          y += frame * this.size[1];
        } else {
          x += frame * this.size[0];
        }
        return ctx.drawImage(resources.get(this.url), x, y, this.size[0], this.size[1], 0, 0, this.size[0], this.size[1]);
      }
    };
    return root.Sprite = Sprite;
  })();

}).call(this);