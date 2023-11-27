DROP DATABASE IF EXISTS encati;
create database encati;
 use encati;
 
 create table tienditas (
 id_tiendita char(5) not null,
 nombre varchar (60) not null,
 
 constraint pk_Tienditas primary key(id_tiendita)
 );
 
 create table encuestas(
 id_encuesta char(5) not null,
 nombre varchar(60) not null,
 
 constraint pk_encuestas primary key(id_encuesta)
 );
 
 create table preguntas(
 id_pregunta char(5) not null,
 pregunta varchar(60),
 
 constraint pk_preguntas primary key(id_pregunta)
 );
 
 
 create table respuestas(
 id_respuesta char(5) not null,
  valor decimal(4,2) not null,
 tiendita_id char(5)not null,
 encuesta_id char(5)not null,
 pregunta_id char(5) not null,
 
 constraint pk_respuestas primary key(id_respuesta),
 
 constraint fk_respuestas_tienditas
 foreign key(tiendita_id)
 references tienditas(id_tiendita),
 
 constraint fk_respuestas_encuesta 
 foreign key(encuesta_id)
 references encuestas(id_encuesta),
 
 constraint fk_respuestas_preguntas
 foreign key(pregunta_id)
 references preguntas(id_pregunta)
 ); 
 
 -- inserts de la tabla tienditas
insert into tienditas (id_tiendita,nombre) values
('T1','victoria');
insert into tienditas (id_tiendita,nombre) values
('T2','Garcia');

-- inserts para la tabla tienditas
insert into tienditas (id_tiendita,nombre) values
('T3','Don pablito');
insert into tienditas (id_tiendita,nombre) values
('T4','Doña cuca');

insert into tienditas (id_tiendita,nombre) values
('T5','Doña lucy');

-- inserts de la tabla  encuestas
insert into encuestas( id_encuesta,nombre) values
('E1','2023');

insert into encuestas( id_encuesta,nombre) values
('E2','2023 Navidad');

-- inserts de la tabla preguntas 
insert into preguntas (id_pregunta, pregunta) values
('P1','Funcionalidad');
insert into preguntas (id_pregunta, pregunta) values
('P2','Confiabilidad');
insert into preguntas (id_pregunta, pregunta) values
('P3','Usabilidad');
insert into preguntas (id_pregunta, pregunta) values
('P4','Rendimiento');
insert into preguntas (id_pregunta, pregunta) values
('P5','Mantenimiento');
insert into preguntas (id_pregunta, pregunta) values
('P6','Portabilidad');
insert into preguntas (id_pregunta, pregunta) values
('P7','Seguridad');
insert into preguntas (id_pregunta, pregunta) values
('P8','Confiabilidad ');

-- PA para tabla tienditas

DELIMITER //
  CREATE PROCEDURE PA_InsertarTienda
  (IN id_t char(5),
  IN nombret varchar(60))
 BEGIN
insert into tienditas (id_tiendita,nombre) values(id_t,nombret);
END
//
DELIMITER ;



-- PA para tabla encuestas

DELIMITER //
CREATE PROCEDURE PA_InsertEncuesta
(IN id_e char(5),nombree varchar(60))
BEGIN
insert into encuestas( id_encuesta,nombre) values
(id_e,nombree);
END
//
DELIMITER ;


-- PA para respuestas

DELIMITER //
CREATE PROCEDURE PA_InsertRespuesta
(IN id_r char(5),IN val int,IN id_t char(5),IN id_e char(5),IN id_p  char(5))
BEGIN
insert into respuestas (id_respuesta,valor,tiendita_id,encuesta_id,pregunta_id)
values(id_r,val,id_t,id_e,id_p);
END

//
DELIMITER ;