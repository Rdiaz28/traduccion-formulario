/*segun yo en primera instancia para manipular
 el dom esto deberia funcionar, pero al abrir en el browser realmente no funcionoo,
 y no entiendo por que.

 function traducir(){
	document.getElementById ('form-signin-heading').innerHTML = "Por favor inicia sesión";
	document.getElementById ('inputEmail').placeholder = "Correo Electronico";
	document.getElementById ('inputPassword').placeholder = "Contraseña";
	document.querySelector ('span').innerHTML = "Recordar datos";
	document.querySelector ('button').innerHTML = "Iniciar Sesión";

}*/

//segunda prueba creando variables


var titulo=function(){
	var mi_titulo=document.getElementById("form-signin-heading");
	mi_titulo.innerHTML="Por favor inicia sesión";
};
titulo();//se invoca function creada

var correo=function(){
	var mail= document.getElementById("inputEmail").placeholder="Correo Electronico";
};
correo();//se invoca function creada

var contr=function(){
	var ingreso=document.getElementById("inputPassword").placeholder="Contraseña";
};
contr();//se invoca function creada

var chekear=function(){
		var marcar=document.getElementsByTagName("span")[0]; //devuelve una matriz de objetos y [0] hace referencia al primero
		marcar.textContent="Recordar datos";
	};
chekear();//se invoca function creada

var boton=function(){
		var boton1=document.getElementsByTagName("button")[0];//devuelve una matriz de objetos y [0] hace referencia al primero
		boton1.textContent="Iniciar Sesión";
	};
boton();//se invoca function creada	



