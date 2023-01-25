const Paciente = require('../../models/usuario/usuario_paciente')

const { Op } = require('sequelize');
const { crearUsuario, encontrarUsuario, encontrarUsuarioPaciente } = require('./usuario');
const Usuario = require('../../models/usuario/usuario');

exports.crearPaciente = async (paciente) => {
    const resultado = await crearUsuario(paciente)
    Promise.all([resultado]).then(
        Paciente.create(paciente).then(data => {
            console.log("Paciente creado exitosamente")
        }).catch(err => {
            console.log(err.message);
        })
    )
}

exports.editarPaciente = async (paciente) => {
    Paciente.update(paciente, { where: {rut: paciente.rut}}).then(data => {
        console.log(data)
        console.log("Paciente editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarPaciente = async (paciente) => {
    Paciente.destroy({where: {rut: paciente.rut}}).then(data => {
        console.log("Paciente eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaPacientes = async () => {
    return new Promise((resolve, reject) => {
        Paciente.findAll().then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Pacientes.")
        });
    })
}

exports.encontrarPaciente = async (rut) => {
    var resultado = null;
    await encontrarUsuarioPaciente(rut).then(usuario =>{
        if(usuario!=null){
            if(usuario.pacientes[0] == undefined){
                console.log("Existe pero no es un Paciente")
            }
            else{
                resultado = usuario;
            }
        }
    });
    return resultado;
};
