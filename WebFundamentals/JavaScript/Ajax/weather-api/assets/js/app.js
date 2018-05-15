// (function() {
//   var url = `http://api.openweathermap.org/data/2.5/forecast?${zip}&${api}`;
//   var api = 'APPID={b1d06f71e0d2f85661337cfefe5c2578}';
//   var zip = $('#zip').val();
//   $('#search-btn').on('click', function() {
//     $.ajax({
//       url: url,
//       dataType: 'json',
//       success: function(data) {
//         var html = '';
//         html += "<h1>"+ city.name +"</h1>";
//         html += "<h3>"+ list.main.temp +"</h3>";
//         html += "<h5>"+ list.wind.speed +"</h5>";
//         html += "<p>"+ list.main.humidity +"</p>";
//         $('.weather').html(html);
//       }
//     });
//   });
// });