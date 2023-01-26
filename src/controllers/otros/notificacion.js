const Notificacion = require('../../models/otros/notificacion')

const { Op } = require('sequelize');
const Paciente = require('../../models/usuario/usuario_paciente');
const Usuario = require('../../models/usuario/usuario');
const Medico = require('../../models/usuario/usuario_medico');

exports.crearNotificacion = async (notificacion) => {
    Notificacion.create(notificacion).then(data => {
        console.log("Notificacion creado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.editarNotificacion = async (notificacion) => {
    Notificacion.update({where: {id: notificacion.id}}).then(data => {
        console.log("Notificacion editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarNotificacion = async (notificacion) => {
    Notificacion.destroy({where: {id: notificacion.id}}).then(data => {
        console.log("Notificacion eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaNotificacionMedico = async (rut) => {
    return new Promise((resolve, reject) => {
        Notificacion.findAll({include: [{model: Paciente, include: {model: Usuario}}], where: {rutmedico: rut}}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.listaNotificacionPaciente = async (rut) => {
    return new Promise((resolve, reject) => {
        Notificacion.findAll({include: [{model: Medico, include: {model: Usuario}}], where: {rutpaciente: rut}}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.encontrarNotificacion = async (id) =>{
    Notificacion.findByPk(data.id).then(data2 =>{
        console.log(data2)
    }).catch(err => {
        console.log(err.message || "Ha ocurrido un error")
    });
}