$(document).ready(function() {
  $('.addClass').click(function() {
    $('.row .AddClass').addClass('red');
  });

  $('button.slideToggle').click(function() {
    $('.row .pacman').slideToggle("slow");
  });
  $('.SlideDown').hide();
  $('button.slideDown').click(function() {
    $('.row .SlideDown').slideDown('slow');
  });
  $('button.slideUp').click(function() {
    $('.row .SlideUp').slideUp('slow');
  });

  $('button.append').click(function() {
    $('.row .Append').append('<p>This is a new Paragraph</p>');
  });

  $('.FadeIn').hide();
  $('button.fadeIn').click(function() {
    $('.row .FadeIn').fadeIn(1000);
  });

  $('button.fadeOut').click(function() {
    $('.row .FadeOut').fadeOut(1000);
  });

  $('button.after').click(function() {
    $('.row .After').after('<p>This is the after content</p>');
  });

  $('button.before').click(function() {
    $('.row .Before').before('<p>This is the before content</p>');
  });


  function form() {
    $('form').on('submit', function(e) {
      e.preventDefault();
      $('.content').html('<p>Content Appended</p>');
      $('#subject').val("This is the subject content");
      $('.content2').text('You thought I was going to let you post your own content?');
    });
  }
  form();


  $( ".weather" ).click( function() {
    var value,
      div = $( ".div" )[ 0 ];
    switch ( $( ".weather" ).index( this ) ) {
    case 0 :
      value = jQuery.data( div, "weather" );
      break;
    case 1 :
      jQuery.data( div, "weather", "sunny" );
      value = "Stored!";
      break;
    case 2 :
      jQuery.data( div, "weather", "rainy" );
      value = "Stored!";
      break;
    case 3 :
      jQuery.removeData( div, "weather" );
      value = "Removed!";
      break;
    }
    $( "span" ).text( "" + value );
  });

  var title = $('.attr p').attr('title');
  $('.attr p').before("Title = "+title);


  $('.toggleP').click(function(e) {
    $('.toggle p').toggle(function() {
      $(this).addClass('.blue');
    }, function() {
      $(this).removeClass('.blue');
    });
    e.preventDefault();
  });

  $('.show p').hide();
  $('.showP').click(function(e) {
    e.preventDefault();
    $('.show p').show();
  });
});