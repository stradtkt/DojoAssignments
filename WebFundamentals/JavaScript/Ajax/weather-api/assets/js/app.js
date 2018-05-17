$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var apiKey = 'b1d06f71e0d2f85661337cfefe5c2578';
    var city = $('input#city').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid='+apiKey;
    $.get(url, function(res) {
      var html = '';
      html += '<p class="lead">'+res.name+'</p>';
      html += '<p>'+res.weather.description+'</p>';
      html += '<p>'+res.main.temp+'</p>'
      $('.weather').html(html);
    }, 'json');
    return false;
  });
});