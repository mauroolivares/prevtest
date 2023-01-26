exports.isAuthenticated = (req, res, next) => {
    if (req.session.user) next()
    else res.redirect('/')
};
exports.isPaciente = (req, res, next) =>{
    
    if (req.session.user.pacientes != undefined) next();
    else res.redirect('/')
    
}

exports.isMedico = (req, res, next) =>{
    
    if (req.session.user.medicos != undefined) next();
    else res.redirect('/')
}