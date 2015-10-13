$(document).ready(function () {
  var hideHTML = 'Göm exempelkod <i class="fa fa-fw fa-caret-down"></i>';
  var showHTML = 'Visa exempelkod <i class="fa fa-fw fa-caret-right"></i>';
  $('.kss-markup').addClass('folded-example').prepend('<a class="btn btn-link btn-sm js-show-example">' + showHTML + '</a>');
  $('.js-show-example').click(function () {
    var parent = $(this).parent();
    if(parent.hasClass('folded-example')){
      parent.removeClass('folded-example');
      $(this).html(hideHTML);
    } else {
      parent.addClass('folded-example');
      $(this).html(showHTML);
    }
  });
  
  // Add HEX and RGB values to color boxes
  $('.color-box').each(function() {
    var rgb = $(this).css('background-color');
    var hex = rgb2hex(rgb);
    $(this).append("<br/><code>" + rgb + "</code><br/><code>" + hex + "</code>");
    $
  });
  
  function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }
  
});
