const express = require("express");
const router = express.Router();

const { calcularTotal } = require('../../utils/calculoEscala')
const { generarID, returnDate } = require('../../utils/various')
const {userExample} = require('./../../utils/various')
 

const { isAuthenticated, isMedico } = require("../../middleware/session");
const { crearCuestionario, listaCuestionarios } = require("../../controllers/cuestionario/cuestionario");
const { crearNotificacion } = require("../../controllers/otros/notificacion");
const { editarPaciente } = require("../../controllers/usuario/usuario_paciente");
const { editarUsuario } = require("../../controllers/usuario/usuario");

router.get("/Medical%20Staff/cuestionarios_Med.html", async (req, res) => {
    var usuario = userExample()
    const cuestionarios = await listaCuestionarios();
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/cuestionarios_Med.html', {usuario, cuestionarios});
})

router.get("/Medical%20Staff/cuestionario-0_Med.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/cuestionario-0_Med.html', {usuario});
})

router.get("/Medical%20Staff/cuestionario-1_Med.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/cuestionario-1_Med.html', {usuario});
})

router.get("/Medical%20Staff/cuestionario-2_Med.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/cuestionario-2_Med.html', {usuario});
})

router.get("/Medical%20Staff/cuestionario-3_Med.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Medical Staff/cuestionario-3_Med.html', {usuario});
})

router.get("/Medical%20Staff/cuestionario-4_Med.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    var quests = {antGenerales, sintomatologia, antMedicos} = req.app.locals;

    res.render('Medical Staff/cuestionario-4_Med.html',{usuario, cuestionarios: quests});
})

router.post("/Medical%20Staff/cuestionario-0_Med.html", (req, res) => {
    const infoPaciente = req.body;
    req.app.locals.infoPaciente = infoPaciente
    //para qué escribir denuevo esos datos?
    //ah sí, para determinar el paciente lol
    res.redirect('/Medical%20Staff/cuestionario-1_Med.html');
})

router.post("/Medical%20Staff/cuestionario-1_Med.html", async (req, res) => {
    const antGenerales = req.body;
    req.app.locals.antGenerales = antGenerales
    //peso y altura en paciente
    //presionarterial ?
    //actividadfisica tiempo
    //edadantecedentes?
    console.log(antGenerales)

    res.redirect('/Medical%20Staff/cuestionario-2_Med.html');
})

router.post("/Medical%20Staff/cuestionario-2_Med.html", async (req, res) => {
    const sintomatologia = req.body
    req.app.locals.sintomatologia = sintomatologia

    res.redirect('/Medical%20Staff/cuestionario-3_Med.html');
})

router.post("/Medical%20Staff/cuestionario-3_Med.html", async (req, res) => {
    const antMedicos = req.body
    req.app.locals.antMedicos = antMedicos

    console.log(antMedicos)
    res.redirect('/Medical%20Staff/cuestionario-4_Med.html');
})

router.post("/Medical%20Staff/cuestionario-4_Med.html", async (req, res) => {
    try{    
        const endoscopia = req.body
        console.log(endoscopia)
        req.app.locals.endoscopico = endoscopia;
        
        var quests = {antGenerales, sintomatologia, antMedicos, endoscopico} = req.app.locals;

        var {puntajetotal, resultado} = await calcularTotal(quests.antGenerales, quests.sintomatologia, quests.antMedicos, quests.endoscopico)

        var quest0 = {id: generarID(), fechaencuesta: new Date(), 
            resultado: resultado, puntajetotal: puntajetotal, 
            rutpaciente: req.app.locals.infoPaciente.rut}

        console.log(quest0);

        quests.antGenerales.idencuestapadre = quest0.id;
        quests.antGenerales.fechanacimiento = await returnDate(quests.antGenerales.fechanacimiento);
        quests.antGenerales.rut = req.app.locals.infoPaciente.rut;
        quests.sintomatologia.idencuestapadre = quest0.id;
        quests.antMedicos.idencuestapadre = quest0.id;
        if(quests.antMedicos.fechaerradicacion != null){
            quests.antMedicos.fechaerradicacion = await returnDate(quests.antMedicos.fechaerradicacion);
        } 
        quests.endoscopico.idencuestapadre = quest0.id;

        req.app.locals.datosAlerta = quest0;
        
        //Actualizar Datos de Paciente (peso, altura, etc)
        editarPaciente(antGenerales).then(
            console.log("Paciente editado")
        )
        editarUsuario(antGenerales).then(
            console.log("Usuario editado")
        ) 
        
        crearCuestionario(quest0, quests.antGenerales, quests.sintomatologia, quests.antMedicos, quests.endoscopico).then(
            console.log("post: encuestas creadas")
        )
        var notificacion = {id: generarID(), fechacreacion: new Date(), tipo: "Automatica", 
        observacion: resultado, rutpaciente: req.app.locals.infoPaciente.rut, rutmedico: req.session.user.rut }
        crearNotificacion(notificacion).then(
            console.log("Notificacion creada")
        );
       

        res.redirect('/Medical%20Staff/principal_Med.html');
    } catch (err) {
        res.status(401).send(err.message);
        return;
    }

});

module.exports = router;