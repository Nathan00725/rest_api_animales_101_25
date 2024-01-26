-- Active: 1705366816117@@localhost@5432@api_zoologico@public
create table tbl_animal 
(
    id serial primary key,
    nombre varchar (500),
    sonido varchar (10),
    creado TIMESTAMP DEFAULT current_timestamp

    )

    INSERT into tbl_animal
    (nombre, sonido)
    VALUES
    ('Perro', 'Wouf'),
    ('Gato', 'Miau'),
    ('Pato', 'Cauk');


    