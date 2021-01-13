/*Selecionamos el elemento que queremos capturar evento click 
y luego para los elementos exteriores, le cambiamos el checked a false para sacarles la check
no es necesario ponerle checked true al elemento actual porque eso funciona por defecto. */

document.getElementById("dia").onclick = function(){
	document.getElementById("semana").checked = false;
	document.getElementById("mes").checked = false;
}
document.getElementById("semana").onclick = function(){
	document.getElementById("dia").checked = false;
	document.getElementById("mes").checked = false;
}
document.getElementById("mes").onclick = function(){
	document.getElementById("dia").checked = false;
	document.getElementById("semana").checked = false;
}


/*Selecionamos el select atraves de id, onchange es un evento que se activa cuando el elemento actual cambia su valor, en este caso selecionar otro option que no sea la actual por defecto.
luego le preguntamos si el valor del option actual es distinto a 0 (osea argentina,australia,etc)
-cambiamos a normal y color black

cuando el option actual es 0 o else(lo opuesto a distinto a 0)Este funciona solo para "selecionar pais" ya que es el unico con value="0"
-Volvemos a poner italic y color gray .
*/
document.querySelector("#country").onchange = function(){
	console.log(this.value);
	if (this.value != 0) {
		this.style.color = "black";
		this.style.fontStyle = "normal";
	}
	else{
		this.style.color = "gray";
		this.style.fontStyle = "italic";
	}
}
