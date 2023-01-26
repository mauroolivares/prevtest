const CuestionarioEndoscopia = require('../../models/cuestionario/cuestionario_endoscopia')

const { Op } = require('sequelize');

exports.crearCuestionarioEndoscopia = async (cuestionario) => {
    CuestionarioEndoscopia.create(cuestionario).then(data => {
        console.log("CuestionarioEndoscopia creado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.editarCuestionarioEndoscopia = async (cuestionario) => {
    CuestionarioEndoscopia.update({where: {id: cuestionario.id}}).then(data => {
        console.log("CuestionarioEndoscopia editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarCuestionarioEndoscopia = async (cuestionario) => {
    CuestionarioEndoscopia.destroy({where: {id: cuestionario.id}}).then(data => {
        console.log("CuestionarioEndoscopia eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaCuestionarioEndoscopias = async () => {
    return new Promise((resolve, reject) => {
        CuestionarioEndoscopia.findAll().then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.listaCuestionarioEndoscopiasUsuario = async (paciente) => {
    return new Promise((resolve, reject) => {
        CuestionarioEndoscopia.findAll({where: {rutPaciente: paciente.rut}}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.encontrarCuestionarioEndoscopia = async (idencuestapadre) =>{
    return new Promise((resolve, reject) =>{
        CuestionarioEndoscopia.findOne({where: idencuestapadre = idencuestapadre}).then(data =>{
            resolve(data);
        }).catch(err=>{
            reject(err.message);
        });
    })
}