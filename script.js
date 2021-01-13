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
