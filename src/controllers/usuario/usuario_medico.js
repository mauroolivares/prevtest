const Medico = require('../../models/usuario/usuario_medico')

const { Op } = require('sequelize');
const { crearUsuario, encontrarUsuario, encontrarUsuarioMedico, listaUsuariosMedico, listaUsuariosPaciente } = require('./usuario');
const { listaPacientesCuestionario } = require('../cuestionario/cuestionario');

exports.crearMedico = async (medico) => {
    const resultado = await crearUsuario(medico)
    Promise.all([resultado]).then(
        Medico.create(medico).then(data => {
            console.log("Medico creado exitosamente")
        }).catch(err => {
            console.log(err.message);
        })
    )
}

exports.editarMedico = async (medico) => {
    Medico.update({where: {rut: medico.rut}}).then(data => {
        console.log("Medico editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarMedico = async (medico) => {
    Medico.destroy({where: {rut: medico.rut}}).then(data => {
        console.log("Medico eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaMedicos = async () => {
    return await listaUsuariosMedico()
}

exports.listaPacientes = async () => {
    return await listaUsuariosPaciente()
}

exports.listaPacientesCuestionario = async () => {
    return await listaPacientesCuestionario();
}


exports.encontrarMedico = async (rut) => {
    var resultado = null;
    await encontrarUsuarioMedico(rut).then(usuario =>{
        if(usuario != null){
            if(usuario.medicos[0] == undefined){
                console.log("Existe pero no es un Medico")
            }
            else{
                resultado = usuario;
            }
        }
    });
    return resultado;
};