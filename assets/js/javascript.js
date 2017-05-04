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
const Pikachu = new Pokemon("Pikachu", "Amarillo", 100);
const Charmander = new Pokemon("Charmander", "rojo", 20);

Pikachu.atacar(Charmander);

console.log(Charmander.vida);
