function Pokemon(nombre, color, poderAtaque){
  this.nombre = nombre;
  this.color = color;
  
  this.nivelDeAmistad = 0;
  
  this.vida = 100;
  this.poderAtaque = poderAtaque;
  
  this.mostrarPokemon = function() {
    return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
  } 
  this.aumentarNivelAmistad = function(valor) {
    this.nivelDeAmistad = this.nivelDeAmistad + valor;
  }

  this.atacar = function(pokemon) {
    pokemon.vida = pokemon.vida - this.poderAtaque;
  }
}
const Pikachu = new Pokemon("Pikachu", "Amarillo", 112);
const Charmander = new Pokemon("Charmander", "Rojo", 116);
const Bulbasaur = new Pokemon("Bulbasaur", "Verde", 118);
const Squirtle = new Pokemon("Squirtle", "Azul", 94);

var pokemones = [Pikachu, Charmander, Bulbasaur, Squirtle];

pokemones.forEach(function(pokemon) {
  var option = '<option value="' + pokemon.nombre + '">' + pokemon.nombre + '</option>';
  document.getElementById("atacante").innerHTML += option;
  document.getElementById("atacado").innerHTML += option;
})

function ataque() {
  var atacanteStr = document.getElementById("atacante").value;
  var atacadoStr = document.getElementById("atacado").value;

  var atacante = pokemones.find(function(pokemon) {
    return pokemon.nombre == atacanteStr;
  });
  var atacado = pokemones.find(function(pokemon) {
    return pokemon.nombre == atacadoStr;
  });

  if (atacante.nombre == atacado.nombre) {
    alert(atacante.nombre + " no se puede atacar a si mismo");
  } else {
    atacante.atacar(atacado);
    document.getElementById("mensaje").innerHTML = atacante.nombre + " ataco a " + atacado.nombre + " y " + atacado.nombre + " tiene " + atacado.vida + " de vida restante";
  }

  return false;

}
