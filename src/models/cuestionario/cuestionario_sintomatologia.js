const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const CuestionarioSintomatologia = sequelize.define("cuestionariosintomatologia", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allownull: false,
        autoIncrement: true
    },
    nauseas: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    vomitos: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    dolorabdominal: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    acidezestomacal: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    perdidapeso: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    fuevoluntario: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    perdidaapetito: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    dolorbocaestomago: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    vomitosangre: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    saciedadprecoz: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    hecesnegras: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    anemiadiagnosticada: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    dificultasolidos: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    dificultaliquidos: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    edadsintomas:{
        type: Sequelize.STRING,
        allownull: true
    },
    tiemposintomas:{
        type: Sequelize.STRING,
        allownull: true
    }
    //idencuestapadre
});

module.exports = CuestionarioSintomatologia;