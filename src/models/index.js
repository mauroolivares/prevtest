const Usuario = require('./usuario/usuario')
const Paciente = require('./usuario/usuario_paciente')
const Medico = require('./usuario/usuario_medico')

const Cuestionario = require('./cuestionario/cuestionario')
const CuestionarioAnteGeneral = require('./cuestionario/cuestionario_antegeneral')
const CuestionarioAnteMedico = require('./cuestionario/cuestionario_antemedico')
const CuestionarioSintomatologia = require('./cuestionario/cuestionario_sintomatologia')
const CuestionarioEndoscopia = require('./cuestionario/cuestionario_endoscopia')

const Notificacion = require('./otros/notificacion')
const Ubicacion = require('./otros/ubicacion')
const Examen = require('./otros/examen')
//const Examen
//const Sede
//const Prevision

Usuario.hasMany(Paciente, { foreignKey: "rut" });
Usuario.hasMany(Medico, { foreignKey: "rut" });
Usuario.hasOne(Ubicacion, { foreignKey: "rut" });
Paciente.belongsTo(Usuario, { foreignKey: "rut" });
Paciente.hasMany(Cuestionario, { foreignKey: "rutpaciente" });
Paciente.hasMany(Notificacion, { foreignKey: "rutpaciente" });
Medico.belongsTo(Usuario, { foreignKey: "rut" });
Medico.hasMany(Notificacion, { foreignKey: "rutmedico" });
Paciente.hasMany(Examen, { foreignKey: "rutpaciente" });
Medico.hasMany(Examen, { foreignKey: "rutmedico" });

Notificacion.belongsTo(Paciente, { foreignKey: "rutpaciente" });
Notificacion.belongsTo(Medico, { foreignKey: "rutmedico"});
Examen.belongsTo(Paciente, { foreignKey: "rutpaciente" });
Examen.belongsTo(Medico, { foreignKey: "rutmedico"});
Ubicacion.belongsTo(Usuario, {foreignKey: "rut"});

Cuestionario.belongsTo(Paciente, { foreignKey: "rutpaciente" });
Cuestionario.hasOne(CuestionarioAnteGeneral, { foreignKey: "idencuestapadre" });
Cuestionario.hasOne(CuestionarioAnteMedico, { foreignKey: "idencuestapadre" });
Cuestionario.hasOne(CuestionarioSintomatologia, { foreignKey: "idencuestapadre" });
Cuestionario.hasOne(CuestionarioEndoscopia, { foreignKey: "idencuestapadre" });
CuestionarioAnteGeneral.belongsTo(Cuestionario, { foreignKey: "idencuestapadre" });
CuestionarioAnteMedico.belongsTo(Cuestionario, { foreignKey: "idencuestapadre" });
CuestionarioSintomatologia.belongsTo(Cuestionario, { foreignKey: "idencuestapadre" });
CuestionarioEndoscopia.belongsTo(Cuestionario, { foreignKey: "idencuestapadre" });