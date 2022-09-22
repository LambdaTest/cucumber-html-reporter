$(document).ready(function() {
    $('.collapse').on('hide.bs.collapse', function(e) {
        e.stopPropagation();
        $(this).prev().removeClass('open');
    }).on('show.bs.collapse', function(e) {
        e.stopPropagation();
        $(this).prev().addClass('open');
    });

    var $generated = $('.generated-on');

    var timestamp = $generated.text();
    $generated.text('Generated ' + moment(timestamp).fromNow());
    $generated.prop('title', new Date(timestamp).toISOString());
});

function toggle(className) {
  var x = $(className);
  if ( x.css('display') === "none") {
    x.css('display', 'block');
  } else {
    x.css('display', 'none');
  }
}
