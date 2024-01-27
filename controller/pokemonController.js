import {db} from '../db/conn.js';

const getPokemones =  async (req, res)=>{
  
    const sql= `select * from tbl_pokemones order by id`;
    const result = await db.query(sql);
    res.json(result)
    
}

const postPokemones = async(req, res)=>{
 
    //Sintaxis de destructuracion
    const { nombre , sonido , ataque} = req.body;
 
     const params =  [nombre, sonido, ataque];
 
     const sql = `insert into tbl_pokemones 
                 (nombre, sonido, ataque )
                 values 
                 ($1, $2, $3) returning * `
 
     const result = await db.query(sql , params);
 
     res.json(result);
 }

 const putPokemones = async (req, res)=>{

    const {nombre, sonido, ataque} = req.body
    const {id} = req.params

    const params = [
        nombre,
        sonido,
        ataque,
        id
    ]
    
    const sql = `update tbl_pokemones
                  set
                  nombre = $1,
                  sonido = $2,
                  ataque = $3
                where id = $4 returning *`;
 
    const result = await db.query(sql, params)
 
    res.json(result);

}

const deletePokemones = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_pokemones where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getPokemones, postPokemones, putPokemones, deletePokemones }