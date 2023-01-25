const Examen = require('../../models/otros/examen')

const { Op } = require('sequelize');

exports.crearExamen = async (examen) => {
    Examen.create(examen).then(data => {
        console.log("Examen creado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.editarExamen = async (examen) => {
    Examen.update({where: {id: examen.id}}).then(data => {
        console.log("Examen editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarExamen = async (examen) => {
    Examen.destroy({where: {id: examen.id}}).then(data => {
        console.log("Examen eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaExamens = async () => {
    return new Promise((resolve, reject) => {
        Examen.findAll().then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.listaExamensUsuario = async (rut) => {
    return new Promise((resolve, reject) => {
        Examen.findAll({where: {rutPaciente: rut}}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.encontrarExamen = async (id) =>{
    Examen.findByPk(data.id).then(data2 =>{
        console.log(data2)
    }).catch(err => {
        console.log(err.message || "Ha ocurrido un error")
    });
}