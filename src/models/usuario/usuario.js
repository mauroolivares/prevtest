const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const Usuario = sequelize.define("usuario", {
    rut: {
        type: Sequelize.STRING(10),
        primaryKey: true,
        allownull: false
    },
    password: {
        type: Sequelize.STRING,
        allownull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allownull: true
    },
    fechanacimiento: {
        type: Sequelize.DATE,
        allownull: false
    },
    telefono: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    sexobiologico:{
        type: Sequelize.CHAR,
        allownull: true
    },
    profesion: {
        type: Sequelize.STRING(30),
        defaultValue: "Vacio"
    },
    fechacreacion: {
        type: Sequelize.DATE,
        allownull: false,
        defaultValue: new Date()
    },
    nombre: {
        type: Sequelize.STRING
    },
    lastlogin: {
        type: Sequelize.DATE,
        allownull: true,
        defaultValue: new Date()
    }
});

module.exports = Usuario;