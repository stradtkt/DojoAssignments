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
    var name = $('#name').val(),
         age = $('#age').val(),
         email = $('#email').val();

         $('form').submit(function(e) {
           e.preventDefault();
           if(name) {
             $('.content').html(name);
           }
           if(age) {
             $('.content').html(age);
           }
           if(email) {
             $('.content').html(email);
           }
         })
  }
  form();
});