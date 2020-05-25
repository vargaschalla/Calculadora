function suma(){
	var numero1=document.getElementById('numero1').value;
	var numero2=document.getElementById('numero2').value;
	total=0;
	total=parseFloat(numero1)+parseFloat(numero2);
	document.getElementById("salida").innerHTML=total;
}
function resta(){
	var numero1=document.getElementById('numero1').value;
	var numero2=document.getElementById('numero2').value;
	total=0;
	total=parseFloat(numero1)-parseFloat(numero2);
	document.getElementById("salida").innerHTML=total;
}
function multiplicacion(){
	var numero1=document.getElementById('numero1').value;
	var numero2=document.getElementById('numero2').value;
	total=0;
	total=parseFloat(numero1)*parseFloat(numero2);
	document.getElementById("salida").innerHTML=total;
}
function divicion(){
	var numero1=document.getElementById('numero1').value;
	var numero2=document.getElementById('numero2').value;
	total=0;
	total=parseFloat(numero1)/parseFloat(numero2);
	document.getElementById("salida").innerHTML=total;
}

