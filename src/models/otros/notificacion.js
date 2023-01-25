const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const Notificacion = sequelize.define("notificacion", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allownull: false,
        autoIncrement: true
    },
    fechacreacion: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allownull: false
    },
    tipo: {
        type: Sequelize.STRING(10),
        allownull: false
    },
    observacion:{
        type: Sequelize.STRING,
        allownull: true
    },
    leido:{
        type: Sequelize.BOOLEAN,
        allownull: false,
        defaultValue: false
    }
});

module.exports = Notificacion;