// Funcion COPIAR

function copy(){
    leerDatos();
    document.getElementById('salida').style.display = 'none';
    document.getElementById('segmento-derecho').style.display = 'block';
    entrada.value= '';
    entrada.focus();
    let datos = salida.value;
    if (navigator.clipboard){
        navigator.clipboard.writeText(datos);
    }
    document.getElementById('copy').style.display = 'none';
    
}

// Botones copiar
var btn_copy = document.getElementById('copy');
btn_copy.addEventListener('click',copy);