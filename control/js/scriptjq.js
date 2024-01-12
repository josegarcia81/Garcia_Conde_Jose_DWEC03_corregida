'use strict'

// -------- Carga de JQuery -------------------- //
$(document).ready(function(){
  console.log("JQuery cargado")


// ------------------- VARIABLES GLOBALES ------------------------ //
const formulario = $('#login') // variable para capturar el formulario
var boton = $("#butCompUsuario") // capturar el boton
var arrayUsuarios = []; // array para almacenar los usuarios

// ------------------- MAIN ------------------------

// cargar usuarios a local.estorage cuando empieza el programa //
cargarUsuariosJSON()

/*
  funcion para leer del JSON
*/
function cargarUsuariosJSON () {
    let path = '../model/usuarios.json'
  
    let request = new Request(path, {headers: new Headers({'Content-Type': 'text/json'}),method: 'GET'})
  
    fetch(request).then(response => {
      response.json().then(data => 
        {
        console.log(data)
        localStorage.setItem("userData",JSON.stringify(data));
        })
    })  
}
  //--- Accion del boton comprobar usuario ---//
  boton.click(comprobarUsuario);

function comprobarUsuario(){
    // recoger el usuario y contraseña del HTML
    // comprobar caracteres especiales
    // comprobar que existe usuario y contraseña
    var usuarioForm = $('#lognombre').val() // recoger valor usuario
    var contrasenaForm = $('#logcontrasena').val() // recoger valor contrasena
    
    var regexp = /[¡"#$%&'()**+,-./:;<=>¿@[\]\^_{}`]/g; // definicion de la expresion regular a comparar

    if(regexp.test(usuarioForm)){
      var caracter = usuarioForm.match(regexp)[0];
      alert("\""+caracter+"\""+" No se pueden poner caracteres especiales")
    }else if(regexp.test(contrasenaForm)){
      var caracter1 = contrasenaForm.match(regexp)[0];
      alert("\""+caracter1+"\""+" No se pueden poner caracteres especiales")
    }else{
      arrayUsuarios = JSON.parse(localStorage.getItem("userData")); // cargar daros del local.storage y pasarlo a array
      buscarUsuario(arrayUsuarios,usuarioForm,contrasenaForm);
    }
}
// Recorrer array para buscar usuario y contraseña //
function buscarUsuario(array,usuarioForm,contrasena){
    var cont = 0; // contador de control para saber si encuentra algun usuario
    for(let i=0; i <= array.length-1; i++){
      
      if(array[i].usuario == usuarioForm & array[i].contraseña == contrasena){
        console.log("usuario y contraseña ok")
        cont = 0;
        window.open("../../view/juego.html","_self") // abre en la misma ventana la url del juego
        
      }else{
        cont++;
      }
    }
    // controla si el usuario ha sido encontrado o no e imprimir en pantalla si no ha sido correcto //
    if(cont >= 1){
        $("#usuincorrecto").html("<p>USUARIO INCORRECTO</p>")
        console.log("usuario incorrecto")
        cont = 0;
    } // else{
    //     window.open("../../view/juego.html","_self") // abre en la misma ventana la url del juego
    // }
}

//--- Cierre JQuery ---//
});

