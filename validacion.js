export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",

];
const mensajesDeError = {
    //objeto, tipos de input
    nombre: {

        valueMissing: "El campo nombre no puede estar vacio"
    },
    email: {

        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    asunto: {

        valueMissing: "El campo asunto no puede estar vacio",
    },mensaje: {

        valueMissing: "El campo mensaje no puede estar vacio",
    }

};

const validadores = {
   // nacimiento: (input) => validarNacimiento(input),
};


function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    
    return mensaje;
}

