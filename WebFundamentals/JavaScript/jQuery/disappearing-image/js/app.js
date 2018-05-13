$(document).ready(function() {
  $('img').on('click', function(e) {
    e.preventDefault();
    $(this).hide();
  });
  $('.restore').on('click', function(e) {
    e.preventDefault();
    $('img').show();
  });
});