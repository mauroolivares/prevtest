const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const Ubicacion = sequelize.define("ubicacion", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allownull: false,
        autoIncrement: true
    },
    comuna: {
        type: Sequelize.STRING(40),
        allownull: true
    },
    direccion:{
        type: Sequelize.STRING(40),
        allownull: true
    },
    rut: {
        type: Sequelize.STRING(10),
        allownull: false
    }

});

module.exports = Ubicacion;