const express = require("express");
const router = express.Router();
const formidable = require('formidable');
const reader = require('xlsx');
const bcrypt = require("bcrypt");

const { listaPacientes, listaPacientesCuestionario } = require('./../../controllers/usuario/usuario_medico')
const { isAuthenticated, isMedico } = require("../../middleware/session");
const { listaExamens } = require('./../../controllers/otros/examen')
const { listaNotificacionUsuario, crearNotificacion, listaNotificacion, listaNotificacionMedico } = require('./../../controllers/otros/notificacion')
const {userExample, generarID} = require('./../../utils/various');
const { listaCuestionarios } = require("../../controllers/cuestionario/cuestionario");
const { crearPaciente, encontrarPaciente } = require("../../controllers/usuario/usuario_paciente");
const { crearUbicacion } = require("../../controllers/otros/ubicacion");

router.get("/Medical%20Staff/principal_Med.html", isAuthenticated, isMedico , async (req, res) => {
    var usuario = userExample()
    const pacientes = await listaPacientesCuestionario();
    
    if(req.session.user){
        usuario = req.session.user
    }

    const notificaciones = await listaNotificacionMedico(usuario.rut);
    var alerta = undefined;
    if(req.app.locals.datosAlerta != undefined){
        alerta = req.app.locals.datosAlerta;
        req.app.locals.datosAlerta = undefined;
    }
    
    res.render('Medical Staff/principal_Med.html',{usuario, notificaciones, pacientes, alerta});
})

//WIP:

router.get("/Medical%20Staff/pacientes_Med.html", async (req, res) => {
    const pacientes = await listaPacientes();
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/pacientes_Med.html', {usuario, pacientes});
})

router.get("/Medical%20Staff/pacientesExcel_Med.html", async (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/pacientesExcel_Med.html', {usuario});
})

router.get("/Medical%20Staff/examenes_Med.html", async (req, res) => {
    const examenes = await listaExamens();
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/examenes_Med.html', {usuario, examenes});
})

router.get("/Medical%20Staff/perfil_Med.html", async (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/perfil_Med.html', {usuario});
})

router.post("/ingresarNotificacion", async (req, res) => {
    const data = req.body;
    var notificacion = {id: generarID(), fechacreacion: new Date(), tipo: "Normal", 
    observacion: data.observacion, rutpaciente: data.rutpaciente, rutmedico: req.session.user.rut }
    crearNotificacion(notificacion).then(
        console.log("Notificacion creada")
    );
    res.redirect("/Medical%20Staff/principal_Med.html");

})

router.post('/subirExcelPaciente', async (req, res) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }

        let usuarios = []
        const file = reader.readFile(files.excelpacientes.filepath)

        let temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
        temp.forEach((data) => {
            usuarios.push(data)
        })
        console.log(usuarios)
        usuarios.forEach(async (data) =>{
            const yaExiste = await encontrarPaciente(data.rut)
            if (yaExiste) {
                console.log("RUT ya existe")
                return;
            }
            
            else{
                console.log(data)
                // Define salt rounds
                const saltRounds = 5;

                // Hash password
                bcrypt.hash(data.password, saltRounds, (err, hash) => {
                    if (err) throw new Error("Internal Server Error");
                
                    // Create a new user
                    data.password = hash;
                    data.id = generarID();
                    crearPaciente(data).then(() =>{
                      console.log("post: Paciente Creado")
                    });
                    crearUbicacion(data).then(() =>{
                      console.log("post: Ubicación Creada")
                    });
                });
            }
        }) 
        res.redirect('/Medical%20Staff/pacientes_Med.html');
    });
})

router.get('/downloadPacientes', async (req, res) => {
    const pacientes = await listaPacientes();
    let jsonData = []
    pacientes.forEach((data) =>{
        let values = {"RUT": data.rut, "Nombre": data.nombre, "Correo Electrónico": data.email, "Fecha de Nacimiento": data.fechanacimiento, "Sexo Biologico": data.sexobiologico,
            "Teléfono": data.telefono, "Teléfono 2": data.pacientes[0].telefonoemergencia, "Comuna": data.ubicacion.comuna, "Dirección": data.ubicacion.direccion, "Profesión": data.profesion, 
            "Previsión": data.pacientes[0].prevision, "Sede": data.pacientes[0].sede, "Peso": data.pacientes[0].peso, "Altura": data.pacientes[0].altura, 
            "Presión Arterial": data.pacientes[0].presionarterial, "Creación Cuenta": data.fechacreacion, "Última Conexión": data.lastlogin}
        jsonData.push(values)
    })

    const workSheet = reader.utils.json_to_sheet(jsonData);
    const workBook = reader.utils.book_new();
    reader.utils.book_append_sheet(workBook, workSheet, 'Pacientes');
    reader.writeFile(workBook,require('path').join(__dirname,'./../../resources/files/listadoPacientes.xlsx'));

    res.download(require('path').join(__dirname,'./../../resources/files/listadoPacientes.xlsx'))
})

router.get('/downloadCuestionarios', async (req, res) => {
    const cuestionarios = await listaCuestionarios();

    let finals = []
    let generales = []
    let sintomas = []
    let medicos = []
    let endosco = []
    
    cuestionarios.forEach((data) =>{
        let final = {"ID Cuestionario": data.id, "Rut Paciente": data.rutpaciente, "Fecha Cuestionario": data.fechaencuesta, "Sugerencia": data.resultado, "Puntaje Total": data.puntajetotal}

        let general = {"ID": data.id, "Rut Paciente": data.rutpaciente, "Actividad Física?": data.cuestionarioantegeneral.haceactividadfisica, "Tiempo Actividad Fisica": data.cuestionarioantegeneral.actividadfisica,
        "¿Fuma?": data.cuestionarioantegeneral.hafumado, "¿Tiene un familiar c/ Antecedentes?": data.cuestionarioantegeneral.familiarconantecedentes, "Edad familiar c/ antecedentes": data.cuestionarioantegeneral.edadantecedentes,
        "¿Dieta salada?": data.cuestionarioantegeneral.dietanoideal }

        let sintomatologia = {"ID": data.id, "Rut Paciente": data.rutpaciente, "¿Nauseas?": data.cuestionariosintomatologium.nauseas, "¿Vomitos?": data.cuestionariosintomatologium.vomitos, "¿Dolor Abdominal?": data.cuestionariosintomatologium.dolorabdominal, 
        "¿Acidez Estomacal?": data.cuestionariosintomatologium.acidezestomacal, "¿Ha perdido peso?": data.cuestionariosintomatologium.perdidapeso, "¿Perdida de peso ha sido voluntaria?": data.cuestionariosintomatologium.fuevoluntario,
        "¿Perdida del apetito?": data.cuestionariosintomatologium.perdidaapetito,"¿Dolor en la boca del estómago?": data.cuestionariosintomatologium.dolorbocaestomago, "¿Ha vomitado sangre?": data.cuestionariosintomatologium.vomitasangre, 
        "¿Saciedad precoz?": data.cuestionariosintomatologium.saciedadprecoz, "¿Presenta heces negras?": data.cuestionariosintomatologium.hecesnegras, "¿Diagnosticado de anemia?": data.cuestionariosintomatologium.anemiadiagnosticada, 
        "¿Dificulta comer sólidos?": data.cuestionariosintomatologium.dificultasolidos, "¿Dificulta comer líquidos?": data.cuestionariosintomatologium.dificultaliquidos, "Edad síntomas": data.cuestionariosintomatologium.edadsintomas,
        "Hace cuanto aparecieron los síntomas": data.cuestionariosintomatologium.tiemposintomas}

        let medico = {"ID": data.id, "Rut Paciente": data.rutpaciente, "¿Helicobacter Pylori diagnosticada?": data.cuestionarioantemedico.helicobacterdiagnosticada, "¿Recibió tratamiento antibiotico?": data.cuestionarioantemedico.tratamientoantibiotico,
        "¿Control de erradicación realizado?": data.cuestionarioantemedico.examenerradicacion, "¿Erradicación exitosa?": data.cuestionarioantemedico.erradicacionexitosa,
        "Fecha tratamiento de erradicación": data.cuestionarioantemedico.fechaerradicacion, "¿Antecedentes gastrectomía subtotal?": data.cuestionarioantemedico.antecedentesgastrectomia,
        "¿Anemia perniciosa diagnosticada?": data.cuestionarioantemedico.anemiaperniciosa}

        let endoscopia = {"ID": data.id, "Rut Paciente": data.rutpaciente, "¿Ha tenido una endoscopia digestiva alta?": data.cuestionarioendoscopium.endoscopiadigestivaalta,
        "¿Displasia gástrica de alto grado diagnosticada?": data.cuestionarioendoscopium.displasiaalto, "¿Displasia gástrica de bajo grado diagnosticada?":data.cuestionarioendoscopium.displasiabajo,
        "¿Gastritis atrófica crónica diagnosticada?": data.cuestionarioendoscopium.gastritisatroficacronica, "¿Metaplasia intestinal diagnosticada?": data.cuestionarioendoscopium.metaplasiaintestinalcronica,
        "¿Pólipos gástricos diagnosticados?, no inflamatorios/hiperplásicos" :data.cuestionarioendoscopium.poliposgastricos, "Úlcera gástrica o duodenal diagnosticada?": data.cuestionarioendoscopium.ulceragastricaorduodenal }

        finals.push(final)
        generales.push(general)
        sintomas.push(sintomatologia)
        medicos.push(medico)
        endosco.push(endoscopia)
    })


    const ws1 = reader.utils.json_to_sheet(finals);
    const ws2 = reader.utils.json_to_sheet(generales);
    const ws3 = reader.utils.json_to_sheet(sintomas);
    const ws4 = reader.utils.json_to_sheet(medicos);
    const ws5 = reader.utils.json_to_sheet(endosco);
    const workBook = reader.utils.book_new();
    reader.utils.book_append_sheet(workBook, ws1, 'Información Final');
    reader.utils.book_append_sheet(workBook, ws2, 'Antecedentes Generales');
    reader.utils.book_append_sheet(workBook, ws3, 'Sintomatología');
    reader.utils.book_append_sheet(workBook, ws4, 'Antecedentes Médicos');
    reader.utils.book_append_sheet(workBook, ws5, 'Antecedentes Endoscópicos');
    reader.writeFile(workBook,require('path').join(__dirname,'./../../resources/files/listadoCuestionarios.xlsx'));

    res.download(require('path').join(__dirname,'./../../resources/files/listadoCuestionarios.xlsx'))
})


module.exports = router;