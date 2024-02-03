-- Active: 1705366816117@@localhost@5432@api_zoologico@public

create table tbl_zona_zoologico
(
    id serial primary key, 
    nombre varchar(200),
    creado TIMESTAMP DEFAULT current_timestamp 
)

create table tbl_animales
(
    id serial primary key,
    nombre varchar (500),
    sonido varchar (10),
    id_zona int REFERENCES tbl_zona_zoologico(id),
    creado TIMESTAMP DEFAULT current_timestamp
 );

create table tbl_compra_tickets_25
(
    id serial primary key,
    nombre_comprador varchar(200),
    precio numeric,
    fecha_compra TIMESTAMP DEFAULT current_timestamp
);


DROP TABLE  tbl_compra_tickets

delete FROM 