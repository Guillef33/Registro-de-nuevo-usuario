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



