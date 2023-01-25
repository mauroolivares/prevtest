const router = require("express").Router();
//Query Tests:

router.get("/Medical%20Staff/listar", async (req, res) => {
    const medicos = await medicoactions.listaMedicos()
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(medicos, null, 4));
})

module.exports = router;