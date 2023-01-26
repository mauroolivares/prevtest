const Cuestionario = require('../../models/cuestionario/cuestionario')

const {crearCuestionarioAnteGeneral} = require('./cuestionario_antegeneral')
const {crearCuestionarioAnteMedico} = require('./cuestionario_antemedico')
const {crearCuestionarioEndoscopia} = require('./cuestionario_endoscopia')
const {crearCuestionarioSintomatologia} = require('./cuestionario_sintomatologia')

const { Op } = require('sequelize');
const CuestionarioAnteMedico = require('../../models/cuestionario/cuestionario_antemedico')
const CuestionarioAnteGeneral = require('../../models/cuestionario/cuestionario_antegeneral')
const CuestionarioSintomatologia = require('../../models/cuestionario/cuestionario_sintomatologia')
const Paciente = require('../../models/usuario/usuario_paciente')
const Usuario = require('../../models/usuario/usuario')
const Ubicacion = require('../../models/otros/ubicacion')
const CuestionarioEndoscopia = require('../../models/cuestionario/cuestionario_endoscopia')

exports.crearCuestionario = async (cuestionario, general, sinto, medico, endoscopia) => {
    try{
        Cuestionario.create(cuestionario).then(async () => {
            const quest1 = await crearCuestionarioAnteGeneral(general);
            const quest2 = await crearCuestionarioSintomatologia(sinto);
            const quest3 = await crearCuestionarioAnteMedico(medico)
            const quest4 = await crearCuestionarioEndoscopia(endoscopia);
            Promise.all([quest1, quest2, quest3, quest4]).then(
                console.log("Se han creado todos los cuestionarios")
            );
        });
    }
    catch(err){
        console.log(err)
    }
}

exports.editarCuestionario = async (cuestionario) => {
    Cuestionario.update({where: {id: cuestionario.id}}).then(data => {
        console.log("Cuestionario editado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.eliminarCuestionario = async (cuestionario) => {
    Cuestionario.destroy({where: {id: cuestionario.id}}).then(data => {
        console.log("Cuestionario eliminado exitosamente")
    }).catch(err => {
        console.log(err.message);
    })
}

exports.listaCuestionarios = async () => {
    return new Promise((resolve, reject) => {
        Cuestionario.findAll({include: [{model: Paciente, include: {model: Usuario}}, CuestionarioAnteGeneral, CuestionarioSintomatologia, CuestionarioAnteMedico, CuestionarioEndoscopia]}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.listaPacientesCuestionario = async () => {
    return new Promise((resolve, reject) => {
        Usuario.findAll({include: [{model: Paciente, required: true, include: {model: Cuestionario, required: false}}, Ubicacion]}).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error intentando crear usuario.")
        });
    })
}


exports.listaCuestionariosPaciente = async (rut) => {
    return new Promise((resolve, reject) => {
        Cuestionario.findAll({include: [CuestionarioAnteGeneral, CuestionarioSintomatologia, CuestionarioAnteMedico, CuestionarioEndoscopia], where: {rutpaciente: rut}}).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error al buscar Médicos.")
        });
    })
}

exports.encontrarCuestionario = async (id) =>{
    return new Promise((resolve, reject) => {
        Cuestionario.findByPk(id, {include: [CuestionarioAnteGeneral, CuestionarioSintomatologia, CuestionarioAnteMedico, CuestionarioSintomatologia]}).then(data2 =>{
            resolve(data2)
        }).catch(err => {
            reject(err.message || "Ha ocurrido un error")
        });
    });
}