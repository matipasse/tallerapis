document.addEventListener('DOMContentLoaded', () => {
    let boton = document.getElementById('boton');
    
    boton.addEventListener('click', () => {
        let nombrePokemon = document.getElementById('pokemonId').value;
        let url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let nombre = data.name;
                let imagen = data.sprites.front_default;

    
                let resultadoHTML = `
                    <div class="contenedor">
                    <img src="${imagen}" id="imagen" alt="${nombre}">
                    <p id="nombre">${nombre}<p>
                    </div>

                `;
    
                document.getElementById('resultado').innerHTML = resultadoHTML;
            })
            .catch(error => {
                console.error('Error al obtener datos del Pokémon:', error);
                document.getElementById('resultado').innerHTML = 'No se pudo encontrar el Pokémon.';
            });
    });
  });


