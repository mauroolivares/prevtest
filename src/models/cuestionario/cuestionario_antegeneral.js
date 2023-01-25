const Sequelize = require('sequelize');
const sequelize = require('../../config/db').sequelize;

const CuestionarioAnteGeneral = sequelize.define("cuestionarioantegeneral", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allownull: false,
        autoIncrement: true
    },
    haceactividadfisica: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    actividadfisica: {
        type: Sequelize.STRING,
        allownull: true
    },
    hafumado: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    familiarconantecedentes: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },
    edadantecedentes: {
        type: Sequelize.STRING,
        allownull: true
    },
    dietanoideal: {
        type: Sequelize.BOOLEAN,
        allownull: false
    }
    //idencuestapadre
});

module.exports = CuestionarioAnteGeneral;