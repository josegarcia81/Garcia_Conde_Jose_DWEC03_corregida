'use strict'

$(document).ready(function(){
    console.log("JQuery cargado")

    // VARIABLES PARA RECOGER LOS BOTONES POR ID //
    var botonRojo = $("#butrojo");
    var botonAzul = $("#butazul");

    // VARIABLES DE LOS COLORES //
    var rojo = "rojo";
    var azul = "azul";

    // VARIABLE PARA RECOGER LOS VALORES QUE HAY MARCADO //
    var arrayJugadas = [];
    // CONTROL DE JUGADOR //
    var jugador1 = "";
    var jugador2 = "";
    // CONTROL DE PARTIDAS GANADAS //
    var contadorrojo = 0;
    var contadorazul = 0;

    // generacion dinamica de los objetos div //
    var texto = ""
    var objetoDiv = ""
    for(let i = 1; i <= 9; i++){
        texto = "<div id=" + i +""+ "></div>"
        objetoDiv += texto
    }
    $("#tablero").append(objetoDiv)
    
    // PRIMERA OPCION PROBADA LLAMANDO A LAS FUNCIONES POR SEPARADO //
    // PROBADO CON FUNCION "PINTAR" COMUN Y CON FUNCIONES POR SEPARADO PINTARROJO Y PINTARAZUL//
    // botonRojo.click(pintar(rojo))
    // botonAzul.click(pintar(azul))

    // CLICK DEL BOTON ROJO //
    botonRojo.click(function(){
        console.log("boton rojo activado")
        jugador1 = rojo;
        jugador2 = azul;
        $("#gana").removeClass().addClass("esconder").empty()
    })
    
    // CLICK DEL BOTON ROJO //
    botonAzul.click(function(){
        console.log("boton azul activado")
        jugador1 = azul;
        jugador2 = rojo;
        $("#gana").removeClass().addClass("esconder").empty()
    })

    // CLICK DE LAS CASILLAS //
    $("div").click(function(){
        var nombreClase1 = $(this).attr("class");
        console.log(nombreClase1);

        var nombreId = $(this).attr("id");
        console.log(nombreId);
        
        if($(this).hasClass(jugador2)){
            
            alert("casilla marcada por jugador: " + jugador2)
        
        }else{
            //pintar(nombreId,color)
            $("#"+nombreId).removeClass().addClass(jugador1)
            arrayJugadas[nombreId-1] = jugador1
            //arrayJugadas.push(rojo)

            comprobarGanador(jugador1)
        }

    })
    // COMPROBAR CON IF ELSE SI HAY GANADOR //
    // si se le llama desde las funciones despues de poner color //
    function comprobarGanador(color){

        // if(color == rojo){
        //     contadorrojo++
        //     console.log(contadorrojo)
        // } else{
        //     contadorazul++
        //     console.log(contadorazul)
        // }

        if(arrayJugadas[0] === color && arrayJugadas[1] === color && arrayJugadas[2] === color){
            alert("Has ganado la partida: Jugador " + color)
            //$(".esconder").removeClass().addClass("ver")
            arrayJugadas = [];
            $("div").removeClass()
            contadorPartidas(color)

        }else if(arrayJugadas[3] === color && arrayJugadas[4] === color && arrayJugadas[5] === color){
            alert("Has ganado la partida: Jugador " + color)
            $("#esconder").html("<p>gana " + color + "</p>").attr("visibility","visible")
            arrayJugadas = [];
            $("div").removeClass()
            contadorPartidas(color)

        }else if(arrayJugadas[6] === color && arrayJugadas[7] === color && arrayJugadas[8] === color){
            alert("Has ganado la partida: Jugador " + color)
            $("#esconder").html("<p>gana " + color + "</p>").attr("visibility","visible")
            arrayJugadas = [];
            $("div").removeClass()
            contadorPartidas(color)

        }else if(arrayJugadas[0] === color && arrayJugadas[3] === color && arrayJugadas[6] === color){
            alert("Has ganado la partida: Jugador " + color)
            $("#esconder").html("<p>gana " + color + "</p>").attr("visibility","visible")
            arrayJugadas = [];
            $("div").removeClass()
            contadorPartidas(color)

        }else if(arrayJugadas[1] === color && arrayJugadas[4] === color && arrayJugadas[7] === color){
            alert("Has ganado la partida: Jugador " + color)
            $("#esconder").html("<p>gana " + color + "</p>").attr("visibility","visible")
            arrayJugadas = [];
            $("div").removeClass()
            contadorPartidas(color)

        }else if(arrayJugadas[2] === color && arrayJugadas[5] === color && arrayJugadas[8] === color){
            alert("Has ganado la partida: Jugador " + color)
            $("#esconder").html("<p>gana " + color + "</p>").attr("visibility","visible")
            arrayJugadas = [];
            $("div").removeClass()
            contadorPartidas(color)

        }else if(arrayJugadas[0] === color && arrayJugadas[4] === color && arrayJugadas[8] === color){
            alert("Has ganado la partida: Jugador " + color)
            $("#esconder").html("<p>gana " + color + "</p>").attr("visibility","visible")
            arrayJugadas = [];
            $("div").removeClass()
            contadorPartidas(color)

        }else if(arrayJugadas[2] === color && arrayJugadas[4] === color && arrayJugadas[6] === color){
            alert("Has ganado la partida: Jugador " + color)
            $("#esconder").html("<p>gana " + color + "</p>").attr("visibility","visible")
            arrayJugadas = [];
            $("div").removeClass()
            contadorPartidas(color)

        }
        console.log(arrayJugadas)
    }

    function contadorPartidas(color){
            
        if(color == rojo){
            contadorrojo++
            console.log("partidas ganadas "+color+ " "+contadorrojo)
        } else{
            contadorazul++
            console.log("partidas ganadas "+color+ " "+contadorazul)
        }

        if(contadorrojo == 3){
            alert("GANADOR ABSOLUTO COLOR: "+color)
            //toUpperCase(color)
            $("#gana").removeClass().addClass("ver").append("HA GANADO EL: " + color)
            //$("#ganador").append("GANADOR JUGADOR ROJO").attr("visibility","visible")
            contadorrojo = 0;
        } else if(contadorazul == 3){
            alert("GANADOR ABSOLUTO COLOR: "+color)
            $("#gana").removeClass().addClass("ver").append("HA GANADO EL: " + color)
            contadorazul = 0;
        }
    }
    // FUNCION COMUN DONDE LE PASABA LA ID DEL DIV Y EL COLOR FUNCIONA PERO GENERA EL MISMO ERROR //
    //  function pintar(nombreId,color){
    //      $("#"+nombreId).removeClass().addClass(color)
    //      //$("#"+nombreId).attr("class",color)
    //      // aniadir color al array para comparar ganador
    //      arrayJugadas.push(color)
    //  } 

    // FUNCION COMUN PARA HACER SOLO UNA LLAMADA AL CLICK CON UNA VARIABLE COLOR //
    // function pintar(color){
    //     console.log("boton " +color+ " activado")
    //     var contrario = azul

    //     // controlar el color para definir el contrario //
    //     if(color != rojo){
    //         contrario = rojo;
    //     } else {
    //      contrario = azul
    //     }

        //  PARA CONTROLAR QUE LA CASILLA NO SE PINTE UN COLOR ENCIMA DE OTRO //
    //     $("div").click(function(){
    //     var nombreClase1 = $(this).attr("class");
    //     console.log(nombreClase1);

    //     var nombreId = $(this).attr("id");
    //     console.log(nombreId);
        
    //     $("#"+nombreId).removeClass().addClass(color)
    //     //$("#"+nombreId).attr("class","rojo")
        
    //     if($(this).hasClass(contrario)){
            
    //         alert("casilla marcada por el azul")
        
    //     }else{
    //         //pintar(nombreId,color)
    //         $("#"+nombreId).removeClass().addClass(color)
    //     }
    // })
    // }
    // FUNCION DE RESET DEL TABLERO //
    var botonReset = $("#resetpartida");
    botonReset.click(function(){
        $("div").removeClass()
        arrayJugadas = [];
        console.log(arrayJugadas)
        //window.location.reload()// AÑADIDO PARA RESETEAR COMPLETO PORQUE ME REPITE CLICK-S
    })

});