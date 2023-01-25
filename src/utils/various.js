exports.delay = ms => new Promise(resolve => setTimeout(resolve, ms))
exports.calculateAge =  (date) => {
    var dob = new Date(String(date[0]+"/"+date[1]+"/"+date[2]));  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    return age = Math.abs(year - 1970);
}
exports.returnDate = async (date) =>{
    var result = new Date((date[2]+"-"+date[1]+"-"+date[0]));
    return result
}
exports.generarID = () => { return (Math.round(Math.random() * (65536 - 1) + (1))).toString(); }
exports.userExample = () => { return {rut: "19000000-1", email: "example@gmail.com", telefono: 87654321, sexobiologico: "M",
    nombre: "Example Name", ubicacion: {comuna: "La Serena", direccion: "Larrondo 123"}, pacientes: [{sede: "Centro Clinico"}],
medicos: [{sede: "Centro Clínico"}]};}