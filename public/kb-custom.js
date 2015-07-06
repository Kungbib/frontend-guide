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
});
