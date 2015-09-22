/* global angular */
'use strict';

    app.factory('ApiFactory', ['$http', 'serviceBaseUrl', '$cookies', function ($http, serviceBaseUrl, $cookies) {
        
        var token = $cookies.getObject('sesionToken')['access_token'];

        var con =   {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        }
                    };
        var conProtected =  {
                                headers: {
                                    'Authorization': 'Bearer ' + token
                                }
                            };

        return{
            contactsList : function(){
                return $http.get(serviceBaseUrl+"api/contacts", conProtected);
            },
            jobsList : function(){
                return $http.get(serviceBaseUrl+"api/jobs", conProtected);
            },
            saveJob : function(data){
                return $http.post(serviceBaseUrl+"api/jobs", data, con);
            },
            editJob : function(data){
                return $http.put(serviceBaseUrl+"api/jobs", data, con);
            },
            saveContact : function(data){
                // console.log(data);
                return $http.post(serviceBaseUrl+"api/contacts", data, con);
            },
            editContact : function(data){
                return $http.put(serviceBaseUrl+"api/contacts", data, con);
            },
            removeContact : function(data){
                return $http.delete(serviceBaseUrl+"api/contacts", data, con);
            }
        }
    }])