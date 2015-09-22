/* global angular */
'use strict';


app.controller("ContactosController", ContactosController);


function ContactosController(ApiFactory) {
	var contacts = this;

    var edit = false;

	ApiFactory.contactsList().then(
        function (response) {
            contacts.todos = response.data;
        },
        function (errorResponse) {
            console.log("error");
        }
    );

    contacts.saveContact = function(){
        if(!edit){
            ApiFactory.saveContact(contacts.des).then(
                function (response) {
                    contacts.todos.push(response.data);
                    alert("Contacto Registrado");
                    contacts.des = newModel();
                },
                function (errorResponse) {
                    console.log("error");
                }
            );
        }else{
            ApiFactory.editContact(contacts.des).then(
                function (response) {
                    contacts.todos[contacts.todos.indexOf(contacts.des)] = response.data;
                    alert("Contacto Actualizado");
                    contacts.des = newModel();
                },
                function (errorResponse) {
                    console.log("error");
                }
            );
        }
    };

    contacts.removeContact = function(contacto){
        /*ApiFactory.removeContact(contacto).then(
            function (response) {
                contacts.todos.remove(response.data);
                alert("Contacto Eliminado");
                contacts.des = newModel();
            },
            function (errorResponse) {
                alert("Eres un pajuo");
            }
        );*/
        alert("NO TENEMOS PERSIMOS");
    };

    contacts.editContact = function(contacto){
        edit = true;
        contacts.des = contacto;
    }

    contacts.des = newModel();
}

function newModel(){
    var contacto = 
    {
        "ContactTypeID": 1,

        "ContactInfo" :

        {
            "FirstName":"",
            "LastName":"",
            "Email":"",
            "Phone1":"",
            "Phone2":"",
            "Title":"",
            "Info":"",
            "Company":""
        }
    }

    return contacto;
}

