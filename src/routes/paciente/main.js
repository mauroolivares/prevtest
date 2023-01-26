const express = require("express");
const router = express.Router();

const pacienteactions = require('./../../controllers/usuario/usuario_paciente');
const ubicacionactions = require('./../../controllers/otros/ubicacion');
const { isAuthenticated, isPaciente } = require("../../middleware/session");
const {userExample} = require('./../../utils/various');
const { listaNotificacionPaciente } = require("../../controllers/otros/notificacion");
const { listaCuestionariosPaciente } = require("../../controllers/cuestionario/cuestionario");

router.get("/Patient/principal_Pat.html", isAuthenticated, isPaciente, async (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    req.app.locals.cuestionario = (await listaCuestionariosPaciente(usuario.rut))[0];

    res.render('Patient/principal_Pat.html',{usuario, realizado: req.app.locals.cuestionario});
});

//WIP:

router.get("/Patient/notificaciones_Pat.html", async (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }

    const notificaciones = await listaNotificacionPaciente(usuario.rut);
    res.render('Patient/notificaciones_Pat.html',{usuario, notificaciones});
})

router.get("/Patient/examenes_Pat.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Patient/examenes_Pat.html',{usuario});
})

router.get("/Patient/perfil_Pat.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    res.render('Patient/perfil_Pat.html',{usuario});
})

module.exports = router;