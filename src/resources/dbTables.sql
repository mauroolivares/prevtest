create table usuario(
	rut varchar(10) not null,
	nombre text not null,
	password varchar(20) not null,
	email varchar(50) not null,
	fechaNacimiento Date not null,
	telefono Integer, --limite de 10 caracteres
	sexoBiologico char(1) not null, -- H para Hombre, M para mujer
	profesion varchar(30),
	fechacreacion Date,
	actividad varchar,
	primary key (rut)
);

create table medico(
	rut varchar(10) primary key not null references usuario(rut),
	especialidad varchar(40),
	sede varchar(30)
);

create table paciente(
	rut varchar(10) primary key not null references usuario(rut),
 	prevision varchar(40),
	altura real,
	peso real,
	sede varchar(30),
	telefonoemergencia Integer,
	presionarterial real
);

create table cuestionario(
	id serial not null primary key,
	rutPaciente varchar(10) not null references paciente(rut),
	fechaEncuesta Date,
	resultado varchar(10),
	puntajeTotal real
);

create table cuestionarioAnteGeneral(
	id serial not null primary key,
	haFumado boolean not null,
	familiarConAntecedentes boolean not null,
	dietaNoIdeal boolean not null,
	haceactividadfisica boolean not null,
	actividadfisica text,
	edadantecedentes text,
	idEncuestaPadre serial references encuesta(id)
);

create table cuestionarioSintomatologia(
	id serial not null primary key,
	nauseas boolean not null,
	vomitos boolean not null,
	dolorAbdominal boolean not null,
	acidezEstomacal boolean not null,
	perdidaPeso boolean not null,
	fueVoluntario boolean,
	perdidaApetito boolean not null,
	dolorBocaEstomago boolean not null,
	vomitoSangre boolean not null,
	saciedadPrecoz boolean not null,
	hecesNegras boolean not null,
	anemiaDiagnosticada boolean not null,
	dificultaSolidos boolean not null,
	dificultaliquidos boolean not null,
	tiemposintomas text,
	edadsintomas text,
	idEncuestaPadre serial references encuesta(id)
);
	
create table cuestionarioAnteMedico(
	id serial not null primary key,
	helicobacterDiagnosticada boolean not null,
	tratamientoAntibiotico boolean,
	examenErradicacion boolean,
	erradicacionExitosa boolean,
	antecedentesGastrectomia boolean not null,
	anemiaPerniciosa boolean not null,
	fechaerradicacion date,
	idEncuestaPadre serial references encuesta(id)
);

create table cuestionarioEndoscopia(
	id serial not null primary key,
	endoscopiaDigestivaAlta boolean not null,
	displasiaalto boolean,
	displasiabajo boolean,
	gastritisAtroficaCronica boolean,
	metaplasiaIntestinalCronica boolean,
	poliposGastricos boolean,
	ulceraGastricaOrDuodenal boolean,
	idEncuestaPadre serial references encuesta(id)
);

create table notificacion(
	id serial not null primary key,
	fechaCreacion date not null,
	rutpaciente varchar(10) not null references paciente(rut),
	rutmedico varchar(10) not null references medico(rut),
	tipo varchar(10) not null,
	observacion text
);

create table ubicacion(
	id varchar(10) primary key not null,
	comuna varchar(40),
	direccion varchar(40),
	rut varchar(10) not null references usuario(rut)
);

create table examen(
	id serial not null primary key,
	fecha date not null,
	rutpaciente varchar(10) not null references paciente(rut),
	rutmedico varchar(10) not null references medico(rut),
	observacion text,
	estado text
);