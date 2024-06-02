const formulario = document.querySelector('.form_contenido');

document.addEventListener('DOMContentLoaded', ()=> {
    
const mostrarError = (input, mensaje)  => {
    const divPadre = input.parentNode;
    const errorText = divPadre.querySelector('.error-text');

    divPadre.classList.add('error');
    errorText.innerText = mensaje;
}

const input = document.getElementById('nombre');
const mensaje = 'campo obligatorio';

/*----------------------------------------------------------------*/

const eliminarError = input =>{
    const divPadre = input.parentNode;
    divPadre.classList.remove('error');

    const errorText = divPadre.querySelector('.error-text');
    errorText.innerText = '';
}

// FUNCION PARA CORROBORAR QUE LOS CAMPOS ESTEN COMPLETOS

formulario.querySelectorAll('input').forEach(input =>{

    input.addEventListener('change', ()=>{
        const valor = input.value.trim();
        if(valor !== ''){
            eliminarError(input);
        }
    })
})

// FUNCION VALIDAR CAMPO

function validarCampo (campoId, mensaje){
    const campo = document.getElementById(campoId);
    const valor = campo.value.trim();

    if(valor == ''){
        mostrarError(campo, mensaje)
        return false;
    } else {
        eliminarError(campo);
        return true;
    }
}

function isEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return expresionRegular.test(email);
}

function validarEmail(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const email = campo.value.trim();

    if (email === ''){
        mostrarError(campo, 'el correo electrónico es obligatorio');
        return false;
    }else if (!isEmail(email)){
        mostrarError(campo,mensaje);
        return false;
    } else {
        eliminarError(campo);
        return true;
    }
}

// FUNCION PARA VALIDAR FORMULARIO

const valForm = () => {
    let validar = true;

    validar = validarEmail('email', 'el correo electrónico no es válido') && validar;
    validar = validarCampo('contrasenia', 'la contraseña es obligatoria') && validar;
    validar = validarCampo('nombre', 'Campo obligatorio') && validar;
    validar = validarCampo('apellido', 'Campo obligatorio') && validar;
    validar = validarCampo('fechaDeNacimiento', 'Campo obligatorio') && validar;
    validar = validarCampo('pais', 'Campo obligatorio') && validar;

    return validar;
}


// -------------------------------------------------- //

formulario.addEventListener('submit', event =>{
    event.preventDefault();

    if (!valForm()){
        event.preventDefault();
        console.log('El formulario no es válido')
    } else {
        event.preventDefault();
        console.log('El formulario es válido')
    }
})
})









// // CAPTURA DE INPUT DEL DOM
// const formulario = document.getElementById('formulario');
// const botonRegistro = document.getElementById('botonRegistro');

// formulario.addEventListener('submit', evento =>{
//     evento.preventDefault();
    
//     if (validarFormulario()){
//         formulario.submit();
//     }
// })

// // -------------------- VALIDAR LOS CAMPO DEL FORMULARIO ---------------------

// function validarFormulario(){
//     const nombre = document.getElementById('nombre').value;
//     const apellido = document.getElementById('apellido').value;
//     const email = document.getElementById('email').value;

//     if(nombre === ''){
//         mostrarError('nombre', 'Ingresa tu nombre.')
//         return false;
//     }
// }

// // ------------------------------------------

// function mostrarError(campo, mensaje){
//     const campoError = document.getElementById(`${campo}-error`);
//     campoError.innerText = mensaje;
// }

// /*function validarEmail (email){
//     const expresionRegular = //
// }*/