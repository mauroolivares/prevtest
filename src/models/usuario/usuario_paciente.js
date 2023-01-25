const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const Paciente = sequelize.define("paciente", {
    rut: {
        type: Sequelize.STRING(10),
        primaryKey: true,
        allownull: false
    },
    prevision: {
        type: Sequelize.STRING(40),
        allownull: true
    },
    sede: {
        type: Sequelize.STRING(30),
        allownull: true
    },
    peso: {
        type: Sequelize.FLOAT,
        allownull: true
    },
    altura: {
        type: Sequelize.FLOAT,
        allownull: true
    },
    presionarterial:{
        type: Sequelize.FLOAT,
        allownull: true
    },
    telefonoemergencia:{
        type: Sequelize.INTEGER,
        allownull: true
    }
});

module.exports = Paciente;