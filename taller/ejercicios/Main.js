/*funcion*/
function convertirTextoAMinusculas() {
    let textoUsuario = document.getElementById("entradaTexto").value;
    let textoMinusculas = String(textoUsuario).toLowerCase();
    document.getElementById("textoUsuario").innerHTML += " " + textoMinusculas + "<br>";
}

function convertirTextoAMayusculas() {
    let textoUsuario = document.getElementById("entradaTexto").value;
    let textoMayusculas = String(textoUsuario).toUpperCase();
    document.getElementById("textoUsuario").innerHTML += " " + textoMayusculas + "<br>";
}

