const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const medicoactions = require('./../../controllers/usuario/usuario_medico')
const ubicacionactions = require('./../../controllers/otros/ubicacion');
const { isAuthenticated } = require("../../middleware/session");
const { generarID } = require('../../utils/various')

/*
GET:
*/

router.get("/Medical%20Staff/login_Med.html", (req, res) => {
    res.render('Medical Staff/login_Med.html');
})

/*
POST:
*/

router.post("/Medical%20Staff/principal_Med.html", async (req, res) => {
    try{
        const rut = req.body.rutLoginMedical; 
        const password = req.body.passLoginMedical;
        const user = await medicoactions.encontrarMedico(rut)
        if (!user) {
            console.log("Credenciales incorrectas")
            res.redirect('/Medical Staff/Login_Med.html')
        }
        else{
            // Compare passwords
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    req.session.regenerate(function(err){
                        if(err) next (err)
                        req.session.user = user;
                        req.session.save(function(err) {
                            if(err) return next(err)
                                res.redirect('/Medical%20Staff/principal_Med.html');
                            return;
                        });
                    });
                }
                else{
                    console.log("Credenciales incorrectas")
                    res.redirect('/Medical Staff/Login_Med.html')
                    return;
                }
            });
        }

        
    } catch (err) {
        res.status(401).send(err.message);
    }
});

router.post("/registrarMedico", async (req, res) => {
    try {
        console.log("-------------")
        const nacimiento = new Date ("1997-09-19")
        const today = new Date ()
        const data = req.body
        var medico = {rut: data.rutMedical, password: data.passwordMedical, 
            email: data.emailMedical, telefono: data.telefMedical, sexobiologico: data.sexoMedical,
            profesion: data.profMedical, nombre: data.nameMedical} 
        medico.fechanacimiento = nacimiento
        medico.fechacreacion = today
        
        var ubicacion = {id: generarID(), comuna: data.ciudadMedical, rut: medico.rut}

        // Check if the email is already in use
        const yaExiste = await medicoactions.encontrarMedico(medico.email)
        if (yaExiste) {
            console.log("Email ya existe")
            res.redirect('/Medical%20Staff/login_Med.html')
            return;
        }

        //ubicacionactions.crearUbicacion(ubicacion);
   
        // Define salt rounds
        const saltRounds = 5;
        
        // Hash password
        bcrypt.hash(medico.password, saltRounds, (err, hash) => {
            if (err) throw new Error("Internal Server Error");
            
            // Create a new user
            medico.password = hash;
            medicoactions.crearMedico(medico).then(() =>{
                console.log("post: Medico Creado")
                //vincular con ubicacion tambien
            });
            ubicacionactions.crearUbicacion(ubicacion).then(() =>{
                console.log("post: Ubicación Creada")
            });
            res.send(medico)
        });
    } catch (err) {
        res.status(401).send(err.message);
        return;
    }
});

module.exports = router;