const express = require("express");
const router = express.Router();

const useractions = require('../../controllers/usuario/usuario')


router.post('/cerrarSesion', function (req, res, next) {
    // logout logic
  
    // clear the user from the session object and save.
    // this will ensure that re-using the old session id
    // does not have a logged in user
    req.session.user = null
    req.session.save(function (err) {
      if (err) next(err)
  
      // regenerate the session, which is good practice to help
      // guard against forms of session fixation
      req.session.regenerate(function (err) {
        if (err) next(err)
        res.redirect('/')
      })
    })
})

router.get("/User/listar", async (req, res) => {
    const usuarios = await useractions.listaUsuarios();
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(usuarios, null, 4));
})

//const dbConnectionEx = require('./../domains/db_connection_ex')

//const domainXRoutes = require("./../domains/domainX");

//const listarUsuarios = require("../config/script")

//router.use("/pageX", domainXRoutes);
//router.use("/", listarUsuarios.showGraphQLData);

module.exports = router;