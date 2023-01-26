const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const CuestionarioEndoscopia = sequelize.define("cuestionarioendoscopia", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allownull: false,
        autoIncrement: true
    },
    endoscopiadigestivaalta: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    displasiaalto: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    displasiabajo: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    gastritisatroficacronica: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    metaplasiaintestinalcronica: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    poliposgastricos: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    ulceragastricaorduodenal: {
        type: Sequelize.BOOLEAN,
        allownull: true
    }
    //idencuestapadre
});

module.exports = CuestionarioEndoscopia;