const express = require("express");
const router = express.Router();

//const { calcularTotal } = require('../../utils/calculoEscala')
const { generarID } = require('../../utils/various')
const {userExample} = require('./../../utils/various')
 

const { isAuthenticated, isMedico } = require("../../middleware/session");

router.get("/Patient/cuestionario_Pat.html", async (req, res) => {
    var usuario = userExample()
    
    if(req.session.user){
        usuario = req.session.user
    }
    
    if(req.app.locals.cuestionariorealizado == false){
        res.redirect('principal_Pat.html')
    }
    else{
        res.render('Patient/cuestionario_Pat.html', {usuario});
    }
    
})

router.get("/Patient/cuestionario-1_Pat.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }

    if(req.app.locals.cuestionariorealizado == false){
        res.redirect('principal_Pat.html')
    }
    else{
        res.render('Patient/cuestionario-1_Pat.html', {usuario, cuestionario: req.app.locals.cuestionario.cuestionarioantegeneral});
    }
    

})

router.get("/Patient/cuestionario-2_Pat.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    if(req.app.locals.cuestionariorealizado == false){
        res.redirect('principal_Pat.html')
    }
    else{
        res.render('Patient/cuestionario-2_Pat.html', {usuario, cuestionario: req.app.locals.cuestionario.cuestionariosintomatologium});
    }
    
})

router.get("/Patient/cuestionario-3_Pat.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    if(req.app.locals.cuestionariorealizado == false){
        res.redirect('principal_Pat.html')
    }
    else{
        res.render('Patient/cuestionario-3_Pat.html', {usuario, cuestionario: req.app.locals.cuestionario.cuestionarioantemedico});
    }
})

router.get("/Patient/cuestionario-4_Pat.html", (req, res) => {
    var usuario = userExample()
    if(req.session.user){
        usuario = req.session.user
    }
    if(req.app.locals.cuestionariorealizado == false){
        res.redirect('principal_Pat.html')
    }
    else{
        res.render('Patient/cuestionario-4_Pat.html',{usuario, cuestionario: req.app.locals.cuestionario.cuestionarioendoscopium});
    }
});

module.exports = router;