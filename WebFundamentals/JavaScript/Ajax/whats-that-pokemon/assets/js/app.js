$(document).ready(function(){
    var id, img, types, pokemonName, pokemonHeight, pokemonWeight;
    for (var i = 1; i <= 50; i++){
        $(".images").append('<img id="' + i + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png">');
    }
    $('img').click(function(){
        id = $(this).attr('id');
        img = '<img id="' + id + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + id + '.png">';
        $.get("https://pokeapi.co/api/v2/pokemon/" + id + "/", function(res) {
            var pokemonName = "";
            pokemonName += "<h1 class='text-center'>" + res.name + "</h1>";
            $('.name').html(pokemonName);
            $('.picture').html(img);
            types = "<h3 class='text-center'>Types</h3>";
            types += "<ul>";
            for(var i = 0; i < res.types.length; i++) {
              types += "<li>" + res.types[i]["type"].name + "</li>";
            }
            types += "</ul>";
            $(".types").html(types);
            pokemonHeight = "<h3 class='text-center'>Height</h3>";
            pokemonHeight += res.height;
            $('.height').html(pokemonHeight);
            pokemonWeight = "<h3 class='text-center'>Weight</h3>";
            pokemonWeight += res.weight;
            $('.weight').html(pokemonWeight);
        }, 'json');
    });
});