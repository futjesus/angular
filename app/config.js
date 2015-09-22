/* global angular */
'use strict';

app.config(config);


function config($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){

	uiGmapGoogleMapApiProvider.configure({
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });

	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl: 'views/login.html',
			controller: "AuthController as auth"
		})
		.state('dashboard', {
			url: "/",
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardController as dashboard'
		})
		.state('dashboard.contactos', {
			url: 'contactos',
			templateUrl: 'views/dashboard.contactos.html',
			controller: 'ContactosController as contactos',
		})
		.state('dashboard.jobs', {
			url: 'jobs',
			templateUrl: 'views/dashboard.jobs.html',
			controller: 'JobsController as jobs',
		});

	$urlRouterProvider.otherwise('/login');
}