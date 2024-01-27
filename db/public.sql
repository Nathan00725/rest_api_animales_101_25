-- Active: 1705366816117@@localhost@5432@api_zoologico@public
create table tbl_pokemones
(
    id serial primary key,
    nombre varchar (500),
    sonido varchar (10),
    ataque varchar (50),
    creado TIMESTAMP DEFAULT current_timestamp
)
    

    INSERT into tbl_pokemones
    (nombre, sonido, ataque)
    VALUES
    ('Charmander', 'Charma', 'Bola de fuego'),
    ('Bulbasor', 'bolba', 'Veneno'),
    ('Scuarol', 'Squad', 'Chorro de agua');


    Delete from  tbl_pokemon
    

    INSERT into tbl_pokemon