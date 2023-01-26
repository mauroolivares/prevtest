const router = require("express").Router();

const pacienteactions = require('./../../controllers/usuario/usuario_paciente');
//Query Tests:

router.get("/Patient/listar", async (req, res) => {
    const pacientes = await pacienteactions.listaPacientes();
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(pacientes, null, 4));
})

module.exports = router;