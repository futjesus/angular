/* global angular */
'use strict';

    app.factory('AuthFactory', ['$http', '$q', 'serviceBaseUrl', '$cookies', '$state', function ($http, $q, serviceBaseUrl, $cookies, $state) {
        var dateNow = new Date();
        return {
            login: function (loginData) {
                if($cookies.getObject('sesionToken') == undefined || dateNow > new Date($cookies.getObject('sesionToken')['.expires'])){
                    var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;
                    $http.post(serviceBaseUrl + 'token', data,
                        {
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        })
                        .then(
                            function (response) {
                                $cookies.putObject('sesionToken', response.data);
                                $state.go('dashboard');
                            },
                            function (errorResponse) {
                                console.log("error");
                            }
                        );
                } else {
                    console.log($cookies.getObject('sesionToken'));
                    $state.go('dashboard');
                }
            },
            isLogged : function(){
                if($cookies.getObject('sesionToken') != undefined && dateNow < new Date($cookies.getObject('sesionToken')['.expires'])){
                    return true;
                }else{
                    return false;
                }
            },
            removeLogin : function(){
                $cookies.remove('sesionToken');
                $state.go('login');
            }
        }
    }])

