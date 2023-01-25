const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const CuestionarioAnteMedico = sequelize.define("cuestionarioantemedico", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allownull: false,
        autoIncrement: true
    },
    helicobacterdiagnosticada: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    tratamientoantibiotico: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    examenerradicacion: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    erradicacionexitosa: {
        type: Sequelize.BOOLEAN,
        allownull: true
    },
    fechaerradicacion: {
        type: Sequelize.DATE,
        allownull: true
    },
    antecedentesgastrectomia: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    anemiaperniciosa: {
        type: Sequelize.BOOLEAN,
        allownull: false
    }
    //idencuestapadre
});

module.exports = CuestionarioAnteMedico;