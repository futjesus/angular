/* global angular */
'use strict';


app.controller("DashboardController", DashboardController);


function DashboardController(AuthFactory) {
	this.logout = function(){
		AuthFactory.removeLogin();
	}
}