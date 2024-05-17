

// initialise tooltips
jQuery(function () {
  jQuery('[data-toggle="tooltip"]').tooltip();
});
Array.prototype.rotate = (function () {
  var push = Array.prototype.push,
    splice = Array.prototype.splice;
  return function (count) {
    var len = this.length >>> 0,
      count = count >> 0;
    count = ((count % len) + len) % len;
    push.apply(this, splice.call(this, 0, count));
    return this;
  };
})();


// eval(code);
// f();



