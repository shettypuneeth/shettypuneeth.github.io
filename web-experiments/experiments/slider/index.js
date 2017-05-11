(function () {
  var slider = $('.content-wrapper');
  var count = 0;
  function setOffset(offset) {
    slider.css('transform', 'translate3d(' + offset + '%, 0, 0)');
  }

  $('.left-arrow').on('click', function () {
    if (count === -2) return;
    count--;
    var offset = 25 * count;
    setOffset(offset);
  });

  $('.right-arrow').on('click', function () {
    count++;
    if (count > 0) {
      count = 0;
      return;
    }
    var offset = 25 * count;
    setOffset(offset);
  });
}())