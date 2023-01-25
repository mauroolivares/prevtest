const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const pacienteactions = require('./../../controllers/usuario/usuario_paciente');
const ubicacionactions = require('./../../controllers/otros/ubicacion');
const { isAuthenticated, isPaciente } = require("../../middleware/session");
const { generarID } = require('../../utils/various')

/*
GET:
*/

router.get("/Patient/login_Pat.html", (req, res) => {
    res.render('Patient/login_Pat.html');
});

/*
POST:
*/

router.post("/Patient/principal_Pat.html", async (req, res) => {
    try {
        const rut = req.body.rutLogin;
        const password = req.body.passwordLogin;
        const user = await pacienteactions.encontrarPaciente(rut)
        if (!user) {
            console.log("Credenciales incorrectas")
            res.redirect('/Patient/login_Pat.html')
            return;
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
                            res.redirect('/Patient/principal_Pat.html');
                            return;
                        });
                    });
                }
                else{
                    console.log("Contraseña incorrecta")
                    res.redirect('/Patient/login_Pat.html')
                    return;
                }
            });
        }
   
        
    } catch (err) {
      res.status(401).send(err.message);
    }
  });


router.post("/registrarPaciente", async (req, res) => {
    try {
        console.log("-------------")
        const nacimiento = new Date ("1997-09-19")
        const today = new Date ()
        const data = req.body
    
        // Extract email and password from the req.body object
        var paciente = {rut: data.rutPatient, password: data.passwordPatient, 
            email: data.emailModalPat, telefono: data.telefPatient, sexobiologico: data.sexoPatient,
            profesion: data.profPatient, nombre: data.namePatient}

        var ubicacion = {id: generarID(), comuna: data.ciudadPatient, rut: paciente.rut}
            
        paciente.fechanacimiento = nacimiento
        paciente.fechacreacion = today
        // Check if the email is already in use
        const yaExiste = await pacienteactions.encontrarPaciente(paciente.rut)
        if (yaExiste) {
            console.log("RUT ya existe")
            res.redirect('/Patient/login_Pat.html')
            return;
        }

        //ubicacionactions.crearUbicacion(ubicacion);
   
        // Define salt rounds
        const saltRounds = 5;
        
        // Hash password
        bcrypt.hash(paciente.password, saltRounds, (err, hash) => {
            if (err) throw new Error("Internal Server Error");
   
            // Create a new user
            paciente.password = hash;
            pacienteactions.crearPaciente(paciente).then(() =>{
              console.log("post: Paciente Creado")
            });
            ubicacionactions.crearUbicacion(ubicacion).then(() =>{
              console.log("post: Ubicación Creada")
            });
            res.send(paciente)
        });
    } catch (err) {
        res.status(401).send(err.message);
        return;
    }
});

//router.use("/pageX", domainXRoutes);
//router.use("/", listarUsuarios.showGraphQLData);

module.exports = router