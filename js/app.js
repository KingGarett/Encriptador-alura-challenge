
//oculanto el recangulo del texto de salida

document.getElementById('salida').style.display = 'none';

// Conexion con las cajas de texto

function leerDatos(){
    const entrada = document.getElementById('entrada');
    const salida = document.getElementById('salida');
}

//Definiendo si existen CARACTERES ESPECIALES
var onlyLetter = /^[a-z\s]+$/;

//SECUENCIA EN LO BOTONES

function secuencia(){
    document.getElementById('segmento-derecho').style.display = 'none';
    document.getElementById('salida').style.display = 'block';
    document.getElementById('copy').style.display = 'block';
        leerDatos()
        
}
