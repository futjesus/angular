/* global angular */
'use strict';


app.controller("AuthController", AuthController);


function AuthController(AuthFactory, $cookies, $state) {
	//DEBUG: si la autenticacion funciona veremos la respuesta del token endpoint en el console
	//TO DO para participantes: borrar esto antes de terminar el reto
	
	if(AuthFactory.isLogged()){
		$state.go('dashboard');
	}
	
	console.log("---BIENVENIDO AL RETO ANGULAR---");
	
	this.loginData = {
		userName: "dev@nexsyscomputing.com",
		password: "retoAngular"
	}

	var credentials = this.loginData;


	this.doLogin = function(){
		AuthFactory.login(credentials);
	}
}