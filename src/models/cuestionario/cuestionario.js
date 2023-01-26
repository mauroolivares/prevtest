const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const Cuestionario = sequelize.define("cuestionario", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allownull: false,
        autoIncrement: true
    },
    fechaencuesta: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    resultado: {
        type: Sequelize.STRING,
        allownull: false
    },
    puntajetotal: {
        type: Sequelize.FLOAT,
        allownull: true
    }

    //rutpaciente
});

module.exports = Cuestionario;