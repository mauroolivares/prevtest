const CuestionarioAnteMedico = require('../../models/cuestionario/cuestionario_antemedico')

const { Op } = require('sequelize');

exports.crearCuestionarioAnteMedico = async (cuestionario) => {
    CuestionarioAnteMedico.create(cuestionario).then(data => {
        console.log("CuestionarioAnteMedico creado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.editarCuestionarioAnteMedico = async (cuestionario) => {
    CuestionarioAnteMedico.update({where: {id: cuestionario.id}}).then(data => {
        console.log("CuestionarioAnteMedico editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarCuestionarioAnteMedico = async (cuestionario) => {
    CuestionarioAnteMedico.destroy({where: {id: cuestionario.id}}).then(data => {
        console.log("CuestionarioAnteMedico eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaCuestionarioAnteMedicos = async () => {
    return new Promise((resolve, reject) => {
        CuestionarioAnteMedico.findAll().then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.listaCuestionarioAnteMedicosUsuario = async (rut) => {
    return new Promise((resolve, reject) => {
        CuestionarioAnteMedico.findAll({where: {rutpaciente: rut}}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.encontrarCuestionarioAnteMedico = async (idencuestapadre) =>{
    return new Promise((resolve, reject) =>{
        CuestionarioAnteMedico.findOne({where: idencuestapadre = idencuestapadre}).then(data =>{
            resolve(data);
        }).catch(err=>{
            reject(err.message);
        });
    })
}