var elPokemonUl = $_(".pokemon-list");
var elPokemonTemplate = $_("#pokemon-card-template").content;

elPokemonUl.innerHTML = "";

var createPokemonsElement = function (pokemon) {
  var elNewPokemons = elPokemonTemplate.cloneNode(true);

  elNewPokemons.querySelector(".pokemon-img").src = pokemon.img;
  elNewPokemons.querySelector(".pokemon-img").alt = pokemon.name;
  elNewPokemons.querySelector(".pokemon-title").textContent = pokemon.name;
  elNewPokemons.querySelector(".pokemon-type").textContent =  pokemon.type.join(", ");

  return elNewPokemons;
};

pokemons.forEach(function (pokemon) {
  elPokemonUl.appendChild(createPokemonsElement(pokemon));
});