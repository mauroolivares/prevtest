const { escala, resultados } = require('./importarEscala');
const { calculateAge } = require('./various');

var alarmas = {alarmaA: 'false', alarmaM :'false', alarmaB :'false', alarmaNo :'false'}

async function calcularTotal(ge, si, me, en){
    const apartados = {
        a1:await antecedentesGenerales(ge),
        a2:await antecedentesSintomatologia(si),
        a3:await antecedentesMedicos(me),
        a4:await antecedentesEndoscopia(en)
    }
    const apContestados = await apartadosContestados(apartados);

    return new Promise((resolve, reject) => {
        try{
            console.log(alarmas)
            const total = apartados.a1+apartados.a2+apartados.a3+apartados.a4;
            resultados.forEach((res) => {
                console.log(res.rangomenor, total , res.rangomayor)
                if(total > res.rangomenor && total < res.rangomayor){
                    if(comprobarAlarmas(res)){
                        console.log(res.resultado)
                        resolve({puntajetotal: total, resultado: "Resultado "+res.resultado+": "+res.sugerencia})
                    }
                }
            })
            alarmas = {alarmaA: 'false', alarmaM :'false', alarmaB :'false', alarmaNo :'false'}
        }catch(err) {
            reject(err.message)
        }
    })
}

async function antecedentesGenerales(gen){
    var result = 0
    gen.edad = calculateAge(gen.fechanacimiento)

    escala.forEach((item) =>{
        if(item.apartado != "1"){
            return;
        }
        
        if(item.condicion != undefined){
            if(item.criterio != "edad"){
                if(seCumpleCondicion(item, gen)){
                    result += item.puntaje;
                    actualizarAlarma(item);
                    
                }

                return;
            }
            if(item.condicion < gen[item.criterio]){
                result += item.puntaje;
                actualizarAlarma(item);
                
            }

        }
        else{
            if(seCumpleCriterio(item, gen)){
                result += item.puntaje;
                actualizarAlarma(item);
                
            }

        }
    })
    
    console.log("General: "+result)
    return result;
}

async function antecedentesSintomatologia(sint)  {
    var result = 0

    escala.forEach((item) =>{
        if(item.apartado != "2"){
            return;
        }
        
        if(item.criterio != "nauseasvomitos"){
            if(seCumpleCriterio(item, sint)){
                result += item.puntaje;
                actualizarAlarma(item);
                
            }
            return;
        }
        if(sint["nauseas"] == "true" || sint["vomitos"] == 'true'){
            result += item.puntaje;
            actualizarAlarma(item);
            
        }

    })


    /* if(sint.nauseas == 'true' || sint.vomitos == 'true') {result += puntos.nauseasvomitos}
    if(sint.dolorabdominal == 'true'){result+= puntos.dolorabdominal }
    if(sint.acidezestomacal == 'true'){result+= puntos.acidezestomacal }
    if(sint.perdidapeso == 'true'){result+= puntos.perdidapeso }
    if(sint.perdidaapetito == 'true'){result+= puntos.perdidaapetito }
    if(sint.dolorbocaestomago == 'true'){result+= puntos.dolorbocaestomago }
    //vomitosangre
    //saciedadprecoz
    if(sint.hecesnegras == 'true'){result+= puntos.hecesnegras }
    if(sint.anemiadiagnosticada == 'true'){result+= puntos.anemiadiagnosticada }
    if(sint.dificultasolidos == 'true'){result+= puntos.dificultasolidos }
    //dificultaliquidos
    //edadsintomas
    //tiemposintomas */
    console.log("Sintomatologia: "+result)
    return result;
}

async function antecedentesMedicos(med)  {
    var result = 0
    escala.forEach((item) =>{
        if(item.apartado != "3"){
            return;
        }
        
        if(item.criterio != "nauseasvomitos"){
            if(seCumpleCriterio(item, med)){
                result += item.puntaje;
                actualizarAlarma(item);
                
            }

            return;
        }

    })

/*     if(med.helicobacterdiagnosticada == 'true'){result+= puntos.helicobacterdiagnosticada }
    if(med.tratamientoantibiotico == 'true'){result+= puntos.tratamientoantibiotico }
    if(med.erradicacionexitosa == 'true'){result+= puntos.erradicacionexitosa }
    //if(med.tiempohelicobacter == 'true'){result+= puntos.tiempohelicobacter } comparar la fecha? id
    if(med.antecedentesgastrectomia == 'true'){result+= puntos.antecedentesgastrectomia }
    if(med.anemiaperniciosa == 'true'){result+= puntos.anemiaperniciosa } */
    console.log("Medicos: "+result)
    return result;
}

async function antecedentesEndoscopia(endo)  {
    var result = 0
    escala.forEach((item) =>{
        if(item.apartado != "4"){
            return;
        }
        
        if(item.criterio != "nauseasvomitos"){
            if(seCumpleCriterio(item, endo)){
                result += item.puntaje;
                actualizarAlarma(item);
                
            }

            return;
        }

    })

/*     if(endo.displasiaalto == 'true'){result+= puntos.displasiaalto }
    if(endo.displasiabajo == 'true'){result+= puntos.displasiabajo }
    if(endo.gastritisatroficacronica == 'true'){result+= puntos.gastritisatroficacronica }
    if(endo.metaplasiaintestinalcronica == 'true'){result+= puntos.metaplasiaintestinalcronica }
    if(endo.poliposgastricos == 'true'){result+= puntos.poliposgastricos }
    if(endo.ulceragastricaorduodenal == 'true'){result+= puntos.ulceragastricaorduodenal } */
    console.log("Endoscopia: "+result)
    return result;
}

apartadosContestados = async (apartados) =>{
    var result = "("
    if(apartados.a1 > 0){
        result+="1"
    }
    if(apartados.a2 > 0){
        result+="-2"
    }
    if(apartados.a3 > 0){
        result+="-3"
    }
    if(apartados.a4 > 0){
        result+="-4"
    }
    result+=")"
    return result;
}


actualizarAlarma = (item) => {
    if(item.altaalarma == "1"){
        alarmas.alarmaA = 'true'
    }
    if(item.medianaalarma == "1"){
        alarmas.alarmaM = 'true'    
    }
    if(item.bajaalarma == "1"){
        alarmas.alarmaB = 'true'
    }
    if(item.noalarmante == "1"){
        alarmas.alarmaNo = 'true'
    }
    console.log(alarmas);
}

comprobarAlarmas = (resultado) => {
    if(resultado.altaalarma != alarmas.alarmaA){
        return;
    }
    if(resultado.medianaalarma != alarmas.alarmaM){
        return;  
    }
    if(resultado.bajaalarma != alarmas.alarmaB){
        return;
    }
    if(resultado.noalarmante != alarmas.alarmaNo){
        return;
    }
    return true;

}

seCumpleCriterio = (item, quest) => {
    if(quest[item.criterio] == 'true'){
        return true
    }
    return false
}

seCumpleCondicion = (item, quest) => {
    if(quest[item.criterio] == item.condicion){
        return true
    }
    return false
}

module.exports = {calcularTotal}