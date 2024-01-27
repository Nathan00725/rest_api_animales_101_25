import  express  from "express";
const pokemon = express();
import { getPokemones,
         postPokemones,
         putPokemones,
         deletePokemones
         } from "../controller/pokemonController.js";


/*const animales = [{
    nombre: "perro",
    sonido: "wouf"
},
{

    nombre: "gato",
    sonido: "miau"
}]*/

pokemon.get('', getPokemones)


pokemon.post('', postPokemones)


pokemon.put('/:id', putPokemones)


pokemon.delete('/:id', deletePokemones)

export { pokemon }