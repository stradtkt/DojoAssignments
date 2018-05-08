$(document).ready(function() {
  $('.addClass').click(function() {
    $('.AddClass p').addClass('red');
  });

  $('button.slideToggle').click(function() {
    $('.SlideToggle .pacman').slideToggle("slow");
  });
  $('.slideDownP').hide();
  $('button.slideDown').click(function() {
    $('.SlideDown .slideDownP').slideDown('slow');
  })
  $('button.append').click(function() {
    $('.Append .newP').append('<p>This is a new Paragraph</p>');
  });

  $('.FadeIn p').hide();
  $('button.fadeIn').click(function() {
    $('.FadeIn p').fadeIn(1000);
  });

  $('button.fadeOut').click(function() {
    $('.FadeOut p').fadeOut(1000);
  });

  $('button.after').click(function() {
    $('.After p').after('<p>This is the after content</p>');
  });

  $('button.before').click(function() {
    $('.Before p').before('<p>This is the before content</p>');
  });
});