/* global angular */
'use strict';

var app = angular.module('app',['ngCookies', 'ui.router', 'uiGmapgoogle-maps']);
	
	app.constant("serviceBaseUrl", "http://beta.maptasking.com/");