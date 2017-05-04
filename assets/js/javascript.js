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

this.atacar = function(pokemon) {
  pokemon.vida = pokemon.vida - this.poderAtaque;
}
}
const Pikachu = new Pokemon("Pikachu", "Amarillo", 112);
const Charmander = new Pokemon("Charmander", "rojo", 116);
const Bulbasaur = new Pokemon("Bulbasaur", "Verde", 118);
const Charmander = new Pokemon("Squirtle", "azul", 94);

Pikachu.atacar(Charmander);

function atacar() {
  
}

console.log(Charmander.vida);
