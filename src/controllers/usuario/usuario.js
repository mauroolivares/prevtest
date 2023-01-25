const Usuario = require('../../models/usuario/usuario')

const { Op } = require('sequelize');
const Paciente = require('../../models/usuario/usuario_paciente');
const Medico = require('../../models/usuario/usuario_medico');
const Ubicacion = require('../../models/otros/ubicacion');
const Cuestionario = require('../../models/cuestionario/cuestionario');

exports.crearUsuario = async (usuario) => {
    Usuario.create(usuario).then(data => {
        console.log("Usuario creado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.editarUsuario = async (usuario) => {
    Usuario.update(usuario, {where: {rut: usuario.rut}}).then(data => {
        console.log("Usuario editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarUsuario = async (usuario) => {
    Usuario.destroy({where: {rut: usuario.rut}}).then(data => {
        console.log("Usuario eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.encontrarUsuarioPaciente = async (rut) =>{
    return new Promise((resolve, reject) =>{
        Usuario.findByPk(rut, {include: [{model: Paciente, require: true}, Ubicacion]}).then(async data =>{
            resolve(data);
        }).catch(err=>{
            reject(err.message);
        });
    })
}

exports.encontrarUsuarioMedico = async (rut) =>{
    return new Promise((resolve, reject) =>{
        Usuario.findByPk(rut, {include: [{model: Medico, require: true}, Ubicacion]}).then(data =>{
            resolve(data);
        }).catch(err=>{
            reject(err.message);
        });
    })
}


exports.listaUsuarios = async () => {
    return new Promise((resolve, reject) => {
        Usuario.findAll().then(data => {
            resolve(data);
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error intentando crear usuario.")
        });
    })
}

exports.listaUsuariosPaciente = async () => {
    return new Promise((resolve, reject) => {
        Usuario.findAll({include: [{model: Paciente, required: true }, Ubicacion]}).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error intentando crear usuario.")
        });
    })
}

exports.listaUsuariosMedico = async () => {
    return new Promise((resolve, reject) => {
        Usuario.findAll({include: [{model: Medico, required: true}, Ubicacion]}).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error intentando crear usuario.")
        });
    })
}