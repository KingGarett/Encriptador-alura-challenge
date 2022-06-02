// ENCRIPTANDO el codigo
var valido = false;

function encriptador(texto){
    if (onlyLetter.test(texto)){
        valido = true;
    } else {
        alert('solo se aceptan letras en minusculas');
        entrada.value = '';
        entrada.focus();
        document.getElementById('salida').style.display = 'none';
        document.getElementById('segmento-derecho').style.display = 'block';
    }
    if (valido){
        let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
        for (let i=0; i < matrizCodigo.length; i++){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        return texto;
    }
}

// activando el boton de encriptar

function compresion(){
    secuencia();
    salida.value = encriptador(entrada.value);
}

//Botones encriptar

var btn_encriptar = document.getElementById('encriptador-btn');
btn_encriptar.onclick = compresion;