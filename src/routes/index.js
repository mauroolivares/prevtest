const express = require("express");
const router = express.Router();

router.use(require('./medico/index'));
router.use(require('./paciente/index'));
router.use(require('./usuario/index'));


router.get("/", (req, res) => {
    res.render('index.html');
})

//Patient/principal_Pat.html
//const dbConnectionEx = require('./../domains/db_connection_ex')

//const domainXRoutes = require("./../domains/domainX");

//const listarUsuarios = require("../config/script")

//router.use("/pageX", domainXRoutes);
//router.use("/", listarUsuarios.showGraphQLData);

module.exports = router;