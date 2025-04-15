
//const moment = require('moment'); // aqui importo moment que se gurda en la constante. 
import moment from "moment";                           
//fecha actual
const fechaActual = moment();

//fecha de nacimiento, te pasa una fecha y t4e dice como guardarla.
const FechaNAcimiento = moment('1990-09-13', 'YYYY-MM-DD');

//validar que la fecha de nacimiento sea valida
if(!FechaNAcimiento.isValid()) {
    console.log('LA fecha de nacimiento no es valida');
} else {
    //calculadora diferencia en dis
    const DiasdeNacimiento = fechaActual.diff(FechaNAcimiento, 'days');
    const SecondsdeNacimiento = fechaActual.diff(FechaNAcimiento, 'seconds');
    const YearsNacimiento = fechaActual.diff(FechaNAcimiento, 'years');

    console.log("Fecha actual", fechaActual.format('YYY-MM-DD'));
    console.log("Fecha de nacimiento", FechaNAcimiento.format('YYY-MM-DD'));
    console.log(`han pasado ${DiasdeNacimiento} días desde tu nacimiento`);
    console.log(`han pasado ${SecondsdeNacimiento} seconds desde tu nacimiento`);
    console.log(`han pasado ${YearsNacimiento} years desde tu nacimiento`);
    
}