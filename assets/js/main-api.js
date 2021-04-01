
window.onload = function () {   
    
    function pedirDetallePokemon(url, name){
      let caja = document.getElementById("pkmn");
      let abilities; // Por qué se declara esta variable sin ningun igual? 
      
      fetch(url)
        .then(res => res.json())
        .then(res => {

            abilities = "";
            res.abilities.forEach(function (item, index){
              
              let ability = `${item.ability.name}, `;
              abilities += ability;
            });
            let game_indices = "";
            res.game_indices.forEach(function (item, index) {
              let version = `${item.version.name}, `;
              game_indices += version;
            })

            let item = `<div class='element'>
                          <img src=${res.sprites.front_default}>
                          <h2 class="pokemon-name">${name}</h2>                              
                          <b> Habilidades: </b> 
                          <p> ${abilities} </p>
                          <b> Versiones: </b> 
                          <p class="versiones"> ${game_indices}</p>
                          
                        </div>`;
                        // variable de name definida en funcion de abajo
                        // variable de abilities definida en el then del primer fetch (por eso ninguna de las 2 lleva res. antes)

            caja.innerHTML += item;

        });      
    }
    
    function cargaListaPokemon(){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then(res => res.json())
      .then(res => {        
        res.results.forEach(function (pokemon, index) {          
          pedirDetallePokemon(pokemon.url, pokemon.name)
        });
      })
    }
    
    cargaListaPokemon();
  }
 



