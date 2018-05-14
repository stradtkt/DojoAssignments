$(document).ready(function() {
  function displayPokemon() {
    for(var i = 1; i <= 40; i++) {
      $('.images').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png" />`)
    }
  }
  displayPokemon();

  function clickImage() {
    $('.images').click(function(e) {
      e.preventDefault();
    });
  }
});