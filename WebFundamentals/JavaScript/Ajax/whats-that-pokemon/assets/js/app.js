$(document).ready(function(){
    var id;
    for (var i = 1; i <= 50; i++){
        $(".images").append('<img id="' + i + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png">');
    }
    $('img').click(function(){
        id = $(this).attr('id');
        img = '<img id="' + id + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + id + '.png">';
        $.get("https://pokeapi.co/api/v2/pokemon/" + id + "/", function(res) {
            var html = "";
            html += "<h3>" + res.name + "</h3>";
            html += img;
            html += "<h4>Types</h4>";
            html += "<ul>";
            for(var i = 0; i < res.types.length; i++) {
              html += "<li>" + res.types[i]["type"].name + "</li>";
            }
            html += "</ul>";
            html += "<h4>Height</h4>";
            html += "<p>"+ res.height +"</p>";
            html += "<h4>Weight</h4>";
            html += "<p>"+ res.weight +"</p>";
            html += "</ul>";
            $('.content').html(html);
        }, 'json');
    });
});