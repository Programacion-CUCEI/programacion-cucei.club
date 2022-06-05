// Créditos https://usefulangle.com/post/75/typing-effect-animation-javascript-css

var texto = "Próximamente...";
var caracter = 0;
var intervalo;
var elemento = document.querySelector("#texto");
var cursor = document.querySelector("#cursor");

function Escribir() {
    var cadena = texto.substring(0, caracter + 1);
    elemento.innerHTML = cadena;
    caracter++;

    if(cadena === texto) {
        cursor.style.display = "none";
        clearInterval(intervalo);

        setTimeout(function() {
			intervalo = setInterval(Borrar, 80);
		}, 1000);
    }
}

function Borrar() {
    var cadena = texto.substring(0, caracter - 1);
    elemento.innerHTML = cadena;
    caracter--;

    if(cadena === "") {
        clearInterval(intervalo);
        caracter = 0;
        
        setTimeout(function() {
			cursor.style.display = 'inline-block';
			intervalo = setInterval(Escribir, 150);
		}, 200);
    }
}

intervalo = setInterval(Escribir, 150);