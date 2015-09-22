/* global angular */
'use strict';

app.controller("JobsController", JobsController);

function JobsController(ApiFactory, uiGmapGoogleMapApi, $filter, $scope) {
	var jobs = this;
	var edit = false;
	jobs.markers = [];

	jobs.allJobs = function(){
		ApiFactory.jobsList().then(
       		function (response) {
	            jobs.todos = response.data;

	            jobs.todos.forEach(function(job){
	            	jobs.markers.push(jobs.getMarkertObject(job));
	            });
	        },
	        function (errorResponse) {
	            
	        }
	    );
	}

    ApiFactory.contactsList().then(
        function (response) {
            jobs.contacts = response.data;
            jobs.allJobs();
        },
        function (errorResponse) {
        	// Acciones que se debe hacer en caso de que ocurra un error
        }
    );

	jobs.map = { 
		center: { 
			latitude: 40.1451, 
			longitude: -99.6680 
		}, 
		zoom: 8,
		refresh: true,
      	options:{
      		scrollwheel: false
      	},
      	events:{ 
          	click: function(mapModel, eventName, originalEventArgs){
				var e = originalEventArgs[0];
                jobs.map.center.latitude = e.latLng.lat();
                jobs.map.center.longitude = e.latLng.lng();
                jobs.tarea.Lat = e.latLng.lat();
				jobs.tarea.Lng = e.latLng.lng();
				$scope.$apply();
            }
        }
	};
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.$apply(function(){
				jobs.map.center.latitude = position.coords.latitude;
				jobs.map.center.longitude = position.coords.longitude;
				jobs.tarea.Lat = position.coords.latitude;
				jobs.tarea.Lng = position.coords.longitude;
			});
		});
	}

    uiGmapGoogleMapApi.then(function(maps) {});

    jobs.saveJob = function(){
        if(!edit){
            ApiFactory.saveJob(jobs.tarea).then(
                function (response) {
                    jobs.todos.push(response.data);
                    alert("Tarea Registrado");
                    jobs.tarea = newModel();
                },
                function (errorResponse) {
                    console.log("error");
                }
            );
        }else{
            ApiFactory.editJob(jobs.tarea).then(
                function (response) {
                    jobs.todos[jobs.todos.indexOf(jobs.tarea)] = response.data;
                    alert("Tarea Actualizada");
                    jobs.tarea = newModel();
                },
                function (errorResponse) {
                    console.log("error");
                }
            );
        }
    };

    jobs.editJob = function(job){
    	job.ContactID = job.ContactID+""; 
        edit = true;
        jobs.tarea = job;
    }


    jobs.getMarkertObject = function(job){
    	var marker = {
    		id: job['JobID'],
    		content: {
    			name: job['Name'],
    			info: job['Info'],
    			user: jobs.nameUser(job['ContactID'])
    		},
    		coords : {
	    		latitude: $filter('number')(job['Lat'], 4),
				longitude: $filter('number')(job['Lng'], 4)
    		},
    		windowOptions : 
    		{
		        visible: false
		    }
    	}

    	return marker;
    }

    jobs.deleteJob = function(job){
    	alert("NO TENEMOS PERMISOS");
    }

    jobs.onClickMarker = function(marker) {
    	jobs.markers.forEach(function(marca){
	    	marca.windowOptions.visible = false;
        	marker.windowOptions.visible = !marker.windowOptions.visible;
        });
    };

    jobs.closeClickMarker = function(marker) {
    	// console.log(marker);
        marker.windowOptions.visible = false;
    };

    jobs.nameUser = function(idUser){
    	var nameUser;
    	jobs.contacts.forEach(function(contact){
	    	if(contact.ContactID == idUser){
	    		nameUser = contact.ContactInfo.FirstName+" "+contact.ContactInfo.LastName;
	    	}
        });
        return nameUser;
    }

    jobs.formato = function(medida){
    	var valor = $filter('number')(medida, 4);
    	return valor;
    }

    jobs.tarea = newModel();
}

function newModel(){
    var job = 
    {
		"JobID": "0",
		"Name": "",
		"Info": "",
		"Lat": "",
		"Lng": "",
		"ContactID" : "0"
    }

    return job;
}