$(document).ready(function() {
  function displayPokemon() {
  for(var i = 1; i <= 151; i++) {
    $('body').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png" />`)
  }
}
displayPokemon();
});