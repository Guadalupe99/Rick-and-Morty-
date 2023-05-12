//import Form from './Form';

const validation = (userData) => {
    const errors = {};

    if (!/\S+@\S+\.\S/.test(userData.email)){
        errors.email = 'por favor, revise su email';
        
    if(!userData.email){
            errors.email = 'debe ingresar un email';
        }

    if (userData.email.length > 35 ) {
            errors.email = 'el mail no puede superar los 35 digitos'
        }
    }
    if(!/.*\d+.*/.test(userData.password)) {
        errors.password = 'la contraseña debe tener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10 ) {
        errors.password = ' la contraseña debe tener entre mas de 6 caracteres y menos de 10'
    }
    
    return errors;
}

export default validation;
