
const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=1154'


const boton = document.getElementById('botonMostrar')
const root = document.getElementById('root')
boton.addEventListener("click", clickEnBoton)


    function renderPokemons( pokemons ) {
        pokemons.forEach(p => {  
            const pokemon = document.createElement('ul')

            pokemon.innerHTML = `
            <h7> <b>${p.name} </b> <a href="${p.url}"> Ver mas aqui</a> </h7>
            `
            root.append(pokemon)
        });
    }
    
    
function clickEnBoton () {
    boton.onclick = () => {
        console.log('click');
        fetch( URL )
            .then( response => response.json() )
            .then( data => {
                console.log(data.results);
                renderPokemons(data.results)
    
        })
    }
    
    }

