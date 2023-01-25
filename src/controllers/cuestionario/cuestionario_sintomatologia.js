const CuestionarioSintomatologia = require('../../models/cuestionario/cuestionario_sintomatologia')

const { Op } = require('sequelize');

exports.crearCuestionarioSintomatologia = async (cuestionario) => {
    CuestionarioSintomatologia.create(cuestionario).then(data => {
        console.log("CuestionarioSintomatologia creado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.editarCuestionarioSintomatologia = async (cuestionario) => {
    CuestionarioSintomatologia.update({where: {id: cuestionario.id}}).then(data => {
        console.log("CuestionarioSintomatologia editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarCuestionarioSintomatologia = async (cuestionario) => {
    CuestionarioSintomatologia.destroy({where: {id: cuestionario.id}}).then(data => {
        console.log("CuestionarioSintomatologia eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaCuestionarioSintomatologias = async () => {
    return new Promise((resolve, reject) => {
        CuestionarioSintomatologia.findAll().then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.listaCuestionarioSintomatologiasUsuario = async (paciente) => {
    return new Promise((resolve, reject) => {
        CuestionarioSintomatologia.findAll({where: {rutPaciente: paciente.rut}}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.encontrarCuestionarioSintomatologia = async (idencuestapadre) =>{
    return new Promise((resolve, reject) =>{
        CuestionarioSintomatologia.findOne({where: idencuestapadre = idencuestapadre}).then(data =>{
            resolve(data);
        }).catch(err=>{
            reject(err.message);
        });
    })
}