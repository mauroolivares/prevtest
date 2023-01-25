const Ubicacion = require('../../models/otros/ubicacion')

const { Op } = require('sequelize');

exports.crearUbicacion = async (ubicacion) => {
    Ubicacion.create(ubicacion).then(data => {
        console.log("Ubicacion creada exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.editarUbicacion = async (ubicacion) => {
    Ubicacion.update({where: {id: ubicacion.id}}).then(data => {
        console.log("Ubicacion editada exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarUbicacion = async (ubicacion) => {
    Ubicacion.destroy({where: {id: ubicacion.id}}).then(data => {
        console.log("Ubicacion eliminada exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaUbicacions = async () => {
    return new Promise((resolve, reject) => {
        Ubicacion.findAll().then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.encontrarUbicacion = async (id) =>{
    Ubicacion.findByPk(data.id).then(data2 =>{
        console.log(data2)
    }).catch(err => {
        console.log(err.message || "Ha ocurrido un error")
    });
}