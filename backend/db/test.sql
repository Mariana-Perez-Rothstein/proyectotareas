drop database if exists test;
create database test;
use test;

create table tareas(
nombre_tarea varchar(255),
fecha_inicio date,
fecha_fin date,
descripcion varchar(255)
);



select * from tareas;
