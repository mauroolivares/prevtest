const CuestionarioAnteGeneral = require('../../models/cuestionario/cuestionario_antegeneral')

const { Op } = require('sequelize');

exports.crearCuestionarioAnteGeneral = async (cuestionario) => {
    CuestionarioAnteGeneral.create(cuestionario).then(data => {
        console.log("CuestionarioAnteGeneral creado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.editarCuestionarioAnteGeneral = async (cuestionario) => {
    CuestionarioAnteGeneral.update({where: {id: cuestionario.id}}).then(data => {
        console.log("CuestionarioAnteGeneral editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarCuestionarioAnteGeneral = async (cuestionario) => {
    CuestionarioAnteGeneral.destroy({where: {id: cuestionario.id}}).then(data => {
        console.log("CuestionarioAnteGeneral eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaCuestionarioAnteGenerals = async () => {
    return new Promise((resolve, reject) => {
        CuestionarioAnteGeneral.findAll().then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.listaCuestionarioAnteGeneralsUsuario = async (paciente) => {
    return new Promise((resolve, reject) => {
        CuestionarioAnteGeneral.findAll({where: {rutPaciente: paciente.rut}}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.encontrarCuestionarioAnteGeneral = async (idencuestapadre) =>{
    return new Promise((resolve, reject) =>{
        CuestionarioAnteGeneral.findOne({where: idencuestapadre = idencuestapadre}).then(data =>{
            resolve(data);
        }).catch(err=>{
            reject(err.message);
        });
    })
}