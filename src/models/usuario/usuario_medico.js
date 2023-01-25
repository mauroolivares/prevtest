const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const Medico = sequelize.define("medico", {
    rut: {
        type: Sequelize.STRING(10),
        primaryKey: true,
        allownull: false
    },
    especialidad: {
        type: Sequelize.STRING(40),
        allownull: true
    },
    sede: {
        type: Sequelize.STRING(30),
        allownull: true
    },
    rol:{
        type: Sequelize.STRING,
        allownull: false,
        defaultValue: "Medico Terreno"
    }
});

module.exports = Medico;