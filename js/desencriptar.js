// DESENCRIPTANDO el codigo 
var valido = false;

function desencriptador(texto){
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
        let matrizCodigo = [['enter','e'],['imes','i'],['ai','a'],['ober','o'],['ufat','u']];
        for (let i=0; i < matrizCodigo.length; i++){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        return texto;
    }
}

// Activando el boton desencriptar

function descompresion(){
    secuencia();
    salida.value = desencriptador(entrada.value)

}

// Botones desencriptar
var btn_desencriptador = document.getElementById('desencriptador-btn');
btn_desencriptador.onclick = descompresion;