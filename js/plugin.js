$(function () {
  var plugin = $('.link').myPlugin({
    color: 'green',
    afterClick: function () {
      console.log('click was emitted');
    }
  });

  $('.click').on('click', function (e) {
    e.preventDefault()
    plugin.drawColor()
  });

});

$.fn.myPlugin = function (options) {
  var elem = $(this);

  options = {
    color: options.color || 'red',
    afterClick: options.afterClick || $.noop
  }

  elem.on('click', function (e) {
    e.preventDefault();

    var block = $(e.target);

    block.css('color', options.color);
    options.afterClick();
  })

  return {
    drawColor: function () {
      elem.css('color', options.color);
    }
  }
}

