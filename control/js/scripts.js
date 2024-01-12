'use strict'

// -------- Carga de JQuery -------------------- //
$(document).ready(function(){
  console.log("JQuery cargado")
})
// ------------------- VARIABLES GLOBALES ------------------------ //
const formulario = document.querySelector('#login')

var arrayUsuarios = [];

// ------------------- MAIN ------------------------

// cargar usuarios a local.estorage cuando empieza el programa
// TODO: array para añadir los socios
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
        //arrayUsuarios = data;
        //console.log(arrayUsuarios)
        //var usuarios = JSON.stringify(data);
        //console.log(usuarios)
        localStorage.setItem("userData",JSON.stringify(data));
        //arrayUsuarios = JSON.parse(localStorage.getItem("userData"));
        //console.log(arrayUsuarios[0].nombre);
        //    aniadirSociosInicialesArray(data)
        })
      })  
  }

  function comprobarUsuario(){
    // recoger el usuario y contraseña del HTML
    // comprobar caracteres especiales
    // comprobar que existe usuario y contraseña
    var usuarioForm = formulario.querySelector('#lognombre').value
    var contrasenaForm = formulario.querySelector('#logcontrasena').value
    //console.log(usuarioForm);
    var regexp = /[¡"#$%&'()**+,-./:;<=>¿@[\]\^_{}`]/g;

    if(regexp.test(usuarioForm)){
      var caracter = usuarioForm.match(regexp)[0];
      alert("\""+caracter+"\""+" No se pueden poner caracteres especiales")
    }else if(regexp.test(contrasenaForm)){
      var caracter1 = contrasenaForm.match(regexp)[0];
      alert("\""+caracter1+"\""+" No se pueden poner caracteres especiales")
    }else{
      arrayUsuarios = JSON.parse(localStorage.getItem("userData"));
      buscarUsuario(arrayUsuarios,usuarioForm,contrasenaForm);
      //alert("Ok")
    }
    
  }
  function buscarUsuario(array,usuarioForm,contrasena){
    
    // console.log(array)
    // console.log(usuarioForm)
    // console.log(contrasena)
    // console.log(array[0].usuario)
    // console.log(array[0].contraseña)
    //var indice = array.includes(usuario)
    // console.log(indice)
    //console.log(array[2].usuario)
    //crearArray(array)
  
    //console.log(nuevoArray)

    for(let i=0; i <= array.length-1; i++){
      // console.log(typeof(array[i].usuario))
      // console.log(typeof(array[i].contraseña))
      //console.log(array[i].contraseña)
      if(array[i].usuario == usuarioForm & array[i].contraseña == contrasena){
        console.log("si")
        window.open("../../view/juego.html","_self")
      }else{
        
        console.log("No")
      }
    
    
    } 
  }
