const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const Examen = sequelize.define("examen", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allownull: false,
        autoIncrement: true
    },
    fecha: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allownull: false
    },
    observacion:{
        type: Sequelize.STRING,
        allownull: true
    },
    estado: {
        type: Sequelize.STRING,
        allownull: true
    },
    //rutpaciente
});

module.exports = Examen;