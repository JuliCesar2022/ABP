jsonData = {

    metododecalificacion: [true, false, false, false],
    namesala: "",

    ajustegeneraldeltiempo: [true, false, false,false],
    activotiempocompleto: { time:"00:10:00"},
    activotiempoigual: {time:""},
    preguntas: [

    ],

    tablaScore: [

    ],

    Tema: "violet:#c84ded"

}
let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
           
         }else {
            console.log("No estás usando un móvil");
        }

CurrentCuestion = {
    state: false,
    question: "",
    time: "",
    responses: [],
    correct: null,
    score: null
}


logica = false
respuestascodigo = [];
// aqui guardamos la pregunta en el currentcuestion
function guardarpregunta() {
    containinputdelapregunta = document.getElementById("pregunta").value
    CurrentCuestion.question = containinputdelapregunta

}
// aqui se agregara el score

function guardarscore() {
    var score = document.getElementById("score").value
    CurrentCuestion.score = score

}

// aqui agregaremos las posibles respuestas al CurrentCuestion y visualmente 
// con su animacion incluida y todas las validaciones

document.getElementById("aquiseagreganposiblesrespuestas").innerHTML = `<p class="aquilaspreguntas" id="aquilaspreguntas">Aqui se agregaran las respuestas</p>`
document.getElementById("aquiseagreganposiblesrespuestas").style = `display: flex;
justify-content: center ;align-items: center;`
var activador = true
Maxrespuestas = true
contar = 0;

function agg() {


    posiblerespuesta = document.getElementById("escribirposiblerespuesta").value
    validarquenoestevacio = posiblerespuesta.replaceAll(" ", "")
    document.getElementById("escribirposiblerespuesta").value = ""
    //    validacion de mas de un dijito en el input para añadir respuesta
    if (validarquenoestevacio.length > 0) {
        contar++;

        if (Maxrespuestas) {
            if (activador) {
                eliminarcuandohayalgo = document.getElementById("aquilaspreguntas")
                eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);

                document.getElementById("aquiseagreganposiblesrespuestas").style = `display: flex;
                align-items:center; flex-direction: column; `
                activador = false
            }
            if (contar == 6) {
                Maxrespuestas = false

            }
            // agregar respuesta al CurrentCuestion
            CurrentCuestion.responses.push(posiblerespuesta)

            respuestascodigo = []
            i = 0
            CurrentCuestion.responses.forEach(element => {

                i++
                pushenrespuestascodigo = ` <div id="animacion${i}" class="alinear"> 
            <div class="respuesta" id="textarea${i}">
            <p id="editarrespuesta${i}">${element}</p>
            </div>
            <div class="edit" id="chulito${i}" onclick="editarrespuestas(id,'animacion${i}')" title="editar respuesta">
            
            <ion-icon  title="editar respuesta" name="create-outline"></ion-icon>
            
            </div> 
            </div>`
                respuestascodigo.push(pushenrespuestascodigo)


            })
            document.getElementById("aquiseagreganposiblesrespuestas").innerHTML = ""
            respuestascodigo.forEach(element => {
                document.getElementById("aquiseagreganposiblesrespuestas").innerHTML += element
            })
            document.getElementById("animacion" + i).style = `opacity: 0;
            animation: fade-in 3s forwards;`



            // se elimina el div que contiene el texto del id aquilaspreguntas

        }



    }
    var countt = 0
    CurrentCuestion.correct = null
    document.getElementById('respuestasparaseleccionar').innerHTML = `<option value="1">--Escoja la respuesta correcta--</option>`

    CurrentCuestion.responses.forEach(element => {
        document.getElementById('respuestasparaseleccionar').innerHTML += `<option value="${countt} ">${element}  </option>`
        countt++
    });

}

function editarrespuestas(id, animacion) {

    ideprincipal = id
    obtenerelnumero = animacion.split("animacion")
    numero = obtenerelnumero[1]
    listoparausarenlista = numero - 1







    eliminarcuandohayalgo = document.getElementById(id)
    eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);

    document.getElementById(animacion).innerHTML += `<div class="edit" id="chulito${id}" onclick="guardarcorreccion(${numero},${listoparausarenlista},id)" title="guardar">
            
    <ion-icon name="save-outline"></ion-icon>

    
    </div> `
    document.getElementById("textarea" + numero).innerHTML = `<textarea  id="obtenertextarea${numero}" class="textarestylo" autofocus>${CurrentCuestion.responses[listoparausarenlista]}</textarea>`

}



function guardarcorreccion(numero, lista, id) {

    i = document.getElementById("obtenertextarea" + numero).value
    CurrentCuestion.responses[lista] = i
    eliminarcuandohayalgo = document.getElementById(id)
    eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);


    document.getElementById("animacion" + numero).innerHTML += `<div class="edit" id="${ideprincipal}"   onclick="editarrespuestas(id,'animacion${numero}')"  title="editar respuesta">
            
    <ion-icon  title="editar respuesta" name="create-outline"></ion-icon>

    
    </div> `

    document.getElementById("textarea" + numero).innerHTML = `<p  id="editarrespuesta${numero}">${CurrentCuestion.responses[lista]}</p>`
    document.getElementById('respuestasparaseleccionar').innerHTML = `<option value="1">Escoja la respuesta correcta</option>`
    var count = 0
    CurrentCuestion.responses.forEach(element => {
        document.getElementById('respuestasparaseleccionar').innerHTML += `<option value="${count} ">${element}  </option>`
        count++
    });
}

function ponerenfoque() {
    document.getElementById("timer").style = "border:2px solid black;"

}

function quitarenfoque() {
    document.getElementById("timer").style = "border:1px solid black;"

}

function Numeros(string) { //Solo numeros
    var out = '';
    var filtro = '1234567890'; //Caracteres validos

    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            //Se añaden a la salida los caracteres validos
            out += string.charAt(i);

    //Retornar valor filtrado
    return out;
}


function autofocu() {

    document.getElementById("ss").focus()
}


function selecionartime() {


    document.getElementById('selecion').innerHTML = `
    <div class="padredelec" id="ventanadelinput">

        <div class="selecioesdeopciones ">

        <div class="elegirhora" id="elegirhora">
        <p>min</p>
        <select class="selec" onchange="colocartiempoeninput(CurrentCuestion)" size="7" id="select2">
        
        
        
        </select>
        </div>
        <div class="elegirhora" id="elegirhora">
        <p>ss</p>
        <select class="selec" size="7" onchange="colocartiempoeninput(CurrentCuestion)" id="select3">
        
        
        
        </select>
        
        </div>
        <div class="elegirhora" id="elegirhora" onclick="infotime()">
        <ion-icon name="information-circle-outline"></ion-icon>
        <div id="elegirhora1"></div>
            
        </div>



    </div>
</div>`



    document.getElementById("select2").innerHTML = ``
    document.getElementById("select3").innerHTML = ``

    var listadedondecolocarnumeros = {
        seleccion3: "",
        hora: "",
        seleccion1: "select2",
        minutos: "min",
        seleccion2: "select3",
        segundos: "ss",


    }

    colocarnumerostime(listadedondecolocarnumeros)

    if (document.getElementById('selecion')) {

        document.querySelector("body").addEventListener('click', function borrarfuncion(e) {
            /*2. Si el div con id clickbox contiene a e. target*/
            agarrarloqueundio = document.getElementById('ventanadelinput')
            agarrarrelog = document.getElementById('temporizador')
            if (agarrarloqueundio.contains(e.target) || agarrarrelog.contains(e.target)) {

                console.log(agarrarloqueundio)

            } else {
                console.log(agarrarloqueundio)
                agarrarloqueundio = document.getElementById('ventanadelinput').innerHTML = ""
                document.querySelector("body").removeEventListener("click", borrarfuncion);
            }
        })
    }
}

function colocarnumerostime(listadedondecolocarnumeros) {
    console.log(listadedondecolocarnumeros)
    for (let i = 0; i < 60; i++) {


        if (i < 10) {
            document.getElementById(listadedondecolocarnumeros.seleccion1).innerHTML += `<option  class="styloiption" value="0${i}">0${i}</option> `
        } else {

            document.getElementById(listadedondecolocarnumeros.seleccion1).innerHTML += `<option  class="styloiption" value="${i}">${i}</option> `
        }
        if (document.getElementById(listadedondecolocarnumeros.minutos).value.length > 0) {
            document.getElementById(listadedondecolocarnumeros.seleccion1).value = document.getElementById(listadedondecolocarnumeros.minutos).value

        }


        if (i < 10) {
            document.getElementById(listadedondecolocarnumeros.seleccion2).innerHTML += `<option  class="styloiption" value="0${i}">0${i}</option> `
        } else {

            document.getElementById(listadedondecolocarnumeros.seleccion2).innerHTML += `<option  class="styloiption" value="${i}">${i}</option> `
        }

        if (document.getElementById(listadedondecolocarnumeros.segundos).value.length > 0) {
            document.getElementById(listadedondecolocarnumeros.seleccion2).value = document.getElementById(listadedondecolocarnumeros.segundos).value

        }

        if (listadedondecolocarnumeros.seleccion3 != "" || listadedondecolocarnumeros.hora != "") {

            if (i < 10) {
                document.getElementById(listadedondecolocarnumeros.seleccion3).innerHTML += `<option  class="styloiption" value="0${i}">0${i}</option> `
            } else {

                document.getElementById(listadedondecolocarnumeros.seleccion3).innerHTML += `<option  class="styloiption" value="${i}">${i}</option> `
            }
            if (document.getElementById(listadedondecolocarnumeros.hora).value.length > 0) {
                document.getElementById(listadedondecolocarnumeros.seleccion3).value = document.getElementById(listadedondecolocarnumeros.hora).value
    
            }


        }


    }
}

function colocartiempoeninput(aquiseguard) {

    minuto = document.getElementById("select2").value
    document.getElementById("min").value = minuto
    min = document.getElementById("min").value

    segundo = document.getElementById("select3").value

    document.getElementById("ss").value = segundo

    ss = document.getElementById("ss").value
    if (min.length > 0 && ss.length > 0) {

        aquiseguard.time = min + ":" + ss
    }


}





function infotime() {
    if (logica) {
        logica = false
    } else if (!logica) {
        logica = true
    }

    if (logica) {
        document.getElementById('elegirhora1').innerHTML = `<div id="textstyloinfo" class="textstyloinfo" >podra editar el tiempo mas adelante </br> o configurarlo como global o sin tiempo</div>`
    } else {
        document.getElementById('elegirhora1').innerHTML = ``
    }

}

function subiralalist(listadevaloresacomular,aquiseguardalavariable) {
    console.log(aquiseguardalavariable)




    Timer = ""
    
    for(let rl=0;rl<listadevaloresacomular.length;rl++){

        Timer+= document.getElementById(listadevaloresacomular[rl]).value
        if(rl!=listadevaloresacomular.length-1){
            Timer+=":"
        }




    }


    aquiseguardalavariable.time=Timer


    console.log(Timer+"este es el timer")


}

function respuestasparaseleccionar() {

    var respuestacorrecta = document.getElementById("respuestasparaseleccionar").value


    CurrentCuestion.correct = respuestacorrecta




}


function ledioclickalbotonagregar() {

    validarquestion = (CurrentCuestion.question.length > 0) ? true : false
    variablelogica = false
    if (validarquestion) {

        variablelogica = true

        if (CurrentCuestion.score != null && CurrentCuestion.score > 0) {
            variablelogica = true

            if (CurrentCuestion.responses.length > 1) {
                variablelogica = true

                if (CurrentCuestion.correct != null && CurrentCuestion.correct != '1') {
                    variablelogica = true
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Indique le respuesta correcta!',
                    }).then((result) => {
                        if (result) {
                            document.getElementById("respuestasparaseleccionar").focus()

                        }
                    })
                    variablelogica = false
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese mas de una respuesta!',
                }).then((result) => {
                    if (result) {
                        document.getElementById("min").focus()

                    }
                })
                variablelogica = false
            }

        } else {


            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese un score!',
            }).then((result) => {
                if (result) {
                    document.getElementById("min").focus()

                }
            })
            variablelogica = false
        }


    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese una pregunata!',
        }).then((result) => {
            if (result) {
                document.getElementById("pregunta").focus()

            }
        })



    }

    if (variablelogica) {



        Swal.fire({
            title: 'Desea agregar esta pregunta a la sala?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgba(4, 243, 68, 0.721)',
            cancelButtonColor: 'rgba(255, 0, 0, 0.721)',
            confirmButtonText: 'Agregar'
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire(
                    'Agregado exitosamente',
                    'La pregunta a sido agregada',
                    'success'
                )

                posision++
                jsonData.preguntas.push({ ...CurrentCuestion })

                CurrentCuestion.responses = []
                document.getElementById("aquiseagreganposiblesrespuestas").innerHTML = ""

                document.getElementById("aquiseagreganposiblesrespuestas").innerHTML = `<p class="aquilaspreguntas" id="aquilaspreguntas">Aqui se agregaran las respuestas</p>`
                document.getElementById("aquiseagreganposiblesrespuestas").style = `display: flex;align-items:center; flex-direction: column; justify-content: center`
                CurrentCuestion.question = ""
                document.getElementById('pregunta').value = ""

                CurrentCuestion.time = ""
                document.getElementById("min").value = ""
                document.getElementById("ss").value = ""
                CurrentCuestion.score = null
                document.getElementById("score").value = ""

                CurrentCuestion.correct = null
                document.getElementById("respuestasparaseleccionar").innerHTML = '  <option value="1">--Escoja la respuesta correcta--</option>'
                agregarvisualmentealasala()


                activador = true
                Maxrespuestas = true
                contar = 0
                jsonData.preguntas.forEach(element => {
                    console.log(element)
                });


            }
        })
    }




}








acoculadordelaspreguntasagregadas = 0


function agregarvisualmentealasala() {


    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "respuestaagregada" + acoculadordelaspreguntasagregadas);
    document.querySelector("#cuadrodondeseagreganlaspreguntas").appendChild(newDiv);
    newDiv.classList.add("respuestaagregada");

    document.getElementById("respuestaagregada" + acoculadordelaspreguntasagregadas).innerHTML = `  
    
    <div class="row">
    <div id="preguntaagregadaenlositems${acoculadordelaspreguntasagregadas}" class="preguntaadentrodesupadre">
    <p>${jsonData.preguntas[jsonData.preguntas.length - 1].question} </br>Score: ${jsonData.preguntas[jsonData.preguntas.length - 1].score}<p>
    </div>    
    <div  id="basura${acoculadordelaspreguntasagregadas}" title="borrar" class="tresitems" onclick="eliminacion(id)">
    <ion-icon name="trash-outline"></ion-icon>
    </div>
    <div  id="desplegar${acoculadordelaspreguntasagregadas}"  title="Expandir"class="tresitemsfinal" onclick="desplegaryeditar(id)" >

    <ion-icon name="chevron-down-outline"></ion-icon>
    </div>
    
    </div>
    <div><hr/> </div>
    `



    // document.getElementById("respuestaagregada"+acoculadordelaspreguntasagregadas).innerHTML=`<div class="pregunta" id="pregunta${acoculadordelaspreguntasagregadas  }"`


    acoculadordelaspreguntasagregadas++



}

var posision = 0

function eliminacion(idio) {

    Swal.fire({
        title: '¿Desea eliminar la pregunta?',
        text: "no se podran revertir los cambios",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, borrar!',
        cancelButtonText: "cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'la pregunta a sido borrada exitosamente.',
                'success'


            )


            padredelaeliminacion = document.getElementById(idio).parentNode.parentNode

            obtenerposision = document.getElementById(idio).parentNode.id.split("respuestaagregada")

            obtenerposision = obtenerposision[1]

            jsonData.preguntas[obtenerposision] = ""

            jsonData.preguntas.forEach(element => {

                console.log("la de abajo es")
                console.log(element)
            });


            padredelaeliminacion.parentNode.removeChild(padredelaeliminacion);


        }
    })


}






var disparador = false

function desplegaryeditar(id) {

    selector = document.getElementById(id).parentNode.parentNode.id
    console.log(selector)
    jsonData.preguntas
    var lista = id.split("desplegar")
    list = lista[1]

    state = (jsonData.preguntas[list].state == false) ? jsonData.preguntas[list].state = true : jsonData.preguntas[list].state = false

    if (state) {
        document.getElementById(id).title = 'Recoger'

        if (document.getElementById("poscicion" + list)) {
            var largo = getComputedStyle(document.documentElement).getPropertyValue('--largo');
            var larg = document.getElementById('poscicion' + list).clientHeight;
            document.documentElement.style.setProperty('--largo', larg + 'px');

            largo = getComputedStyle(document.documentElement).getPropertyValue('--largo');
            console.log(largo)

            eliminarcuandohayalgo = document.getElementById("poscicion" + list)
            eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);

        }




        document.getElementById(id).style = `transform: rotate(180deg);transition:1s;`

        undivnuevo = document.createElement("div")
        undivnuevo.setAttribute("id", "poscicion" + list);


        undivnuevo.classList.add("cuadrodesplegable")

        console.log(undivnuevo)
        document.querySelector("#" + selector).appendChild(undivnuevo);


        document.getElementById("poscicion" + list).innerHTML = ` 
    <div class="contenodoredit textoedit" id="textoedit${list}">
    <div class="preguntaeditartext ">${jsonData.preguntas[list].question}</div>
    <div class="preguntaediticon" title="Editar"> 
        <ion-icon  title="editar respuesta" name="create-outline"></ion-icon>
    </div>
</div>
<div class="contenodoredit scoreoedit" id="scoreoedit${list}">
    <div class="preguntaeditartext">${jsonData.preguntas[list].score}</div>
    <div class="preguntaediticon" title="Editar"> 
        <ion-icon  title="editar respuesta" name="create-outline"></ion-icon>
    </div>
</div>
<div class="contenodoredit timetoedit" id="timetoedit${list}">
    <div class="preguntaeditartext"> ${retornatiempo(list)} </div>

    <div class="preguntaediticon" title="Editar"> 
        <ion-icon  title="editar respuesta" name="create-outline"> </ion-icon>
    </div>
</div>
<div class="contenedorrespuestasedit respoedit" id="respoedit${list}"> 
<div class="contieneflechayrespuesta"> 
<div class="texto">Respuestas...</div>
<div id="desplegarrespuestaseditensala${list}" class="desplegarrespuestaseditensala" onclick="colocarrespenlasala(${list},id)">
<ion-icon name="chevron-down-outline"></ion-icon>
</div>  

</div>
<div><hr/></div>
</div>
<div class="contenodoredit correctoedit" id="correctoedit${list}">
<select name="" class="Stylocambiar" id="cambiar${list}">
        <option value="${jsonData.preguntas[list].correct}" >${jsonData.preguntas[list].responses[parseInt(jsonData.preguntas[list].correct)]}</option>
        
    </select>
</div>`

        var variable1 = document.getElementById("cambiar" + list).value
        console.log(variable1)
        for (let i = 0; i < jsonData.preguntas[list].responses.length; i++) {
            if (i == variable1) {

            } else {
                document.getElementById("cambiar" + list).innerHTML += ` <option value="${jsonData.preguntas[list].responses[i]}" >${jsonData.preguntas[list].responses[i]}</option>`

            }

        }




    } else {
        document.getElementById(id).title = 'Expandir'
        disparador = false

        document.getElementById(id).style = `transform: rotate(0deg);transition:1s;`
        clientHeight = document.getElementById('poscicion' + list).clientHeight;

        var color = getComputedStyle(document.documentElement).getPropertyValue('--heigh');

        document.documentElement.style.setProperty('--heigh', clientHeight + 'px');

        color = getComputedStyle(document.documentElement).getPropertyValue('--heigh');
        console.log(color)
        document.getElementById("poscicion" + list).style = ' animation: cerrar 2s forwards'

    }

    console.log(state)





    console.log(id)



}


function retornatiempo(list, id) {
    repla = jsonData.preguntas[list].time.replaceAll(" ", "")
    var timeautoormanual = (repla.length > 1) ? jsonData.preguntas[list].time : "0:25"
    return timeautoormanual

}


function colocarrespenlasala(list, id) {
    var iter = (disparador == false) ? disparador = true : disparador = false;

    var largoderespuestas = jsonData.preguntas[list].responses.length

    var color = getComputedStyle(document.documentElement).getPropertyValue('--altp');

    document.documentElement.style.setProperty('--altp', largoderespuestas + '9%');

    color = getComputedStyle(document.documentElement).getPropertyValue('--altp');

    if (disparador) {
        if (document.getElementById("nuevoelemento" + list)) {

            eliminarcuandohayalgo = document.getElementById("nuevoelemento" + list)
            eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);
        }
        document.getElementById("desplegarrespuestaseditensala" + list).style = `transform: rotate(180deg);transition:1s;`
        document.getElementById("textoedit" + list).style = `animation:animaciondelcuadroderespsala 1s forwards`
        document.getElementById("scoreoedit" + list).style = `animation:animaciondelcuadroderespsala 1.5s forwards`
        document.getElementById("timetoedit" + list).style = `animation:animaciondelcuadroderespsala 2s forwards`
        document.getElementById("respoedit" + list).style = `animation:animaciondelcuadroderespsala 2.5s forwards`
        document.getElementById("correctoedit" + list).style = `animation:animaciondelcuadroderespsala 3s forwards`


        idpadre = document.getElementById(id).parentNode.parentNode.id

        console.log(idpadre)
        nuevodiv = document.createElement("div")
        nuevodiv.setAttribute("id", "nuevoelemento" + list)

        document.querySelector("#" + idpadre).appendChild(nuevodiv);
        nuevodiv.classList.add("responsesaddsala");



        for (let i = 0; i < jsonData.preguntas[list].responses.length; i++) {

            document.getElementById("nuevoelemento" + list).innerHTML += `<p>${jsonData.preguntas[list].responses[i]}</p>`
        }


    } else {



        document.getElementById("desplegarrespuestaseditensala" + list).style = `transform: rotate(180deg);transition:1s;`
        document.getElementById("textoedit" + list).style = `animation:animaciondesplegar2 4s forwards`
        document.getElementById("scoreoedit" + list).style = `animation:animaciondesplegar2 3.5s forwards`
        document.getElementById("timetoedit" + list).style = `animation:animaciondesplegar2 3s forwards`
        document.getElementById("respoedit" + list).style = `animation:animaciondesplegar2 2.5s forwards`
        document.getElementById("correctoedit" + list).style = `animation:animaciondesplegar3 2s forwards`
        document.getElementById("desplegarrespuestaseditensala" + list).style = `transform: rotate(0deg);transition:1s;`
        var larg = document.getElementById('nuevoelemento' + list).clientHeight;
        console.log(larg)
        var color2 = getComputedStyle(document.documentElement).getPropertyValue('--otravar');

        document.documentElement.style.setProperty('--otravar', larg + 'px');

        color2 = getComputedStyle(document.documentElement).getPropertyValue('--otravar');

        document.getElementById("nuevoelemento" + list).style = `animation:cerrarrespuestasa 1s forwards`

    }

}



function guardarnamesala() {

    jsonData.namesala = document.getElementById("namesala").value

    console.log(jsonData.namesala)

}



var settingvalid = false

function desplegarajust() {
    if (settingvalid) {
        settingvalid = false
    } else {
        settingvalid = true
    }



    if (settingvalid) {


        document.getElementById("desplegarsetting").innerHTML = `<div class="moresetting" title="Configurar tiempo" onclick="condigurartiempodeljuego()" id="timesetting"><ion-icon name="stopwatch-outline"></ion-icon></div>
    
    <div class="moresetting" title="configurar metodo de calificacion" id="calificacion" onclick="imgcalificacion()"><img class="icoimagecalificar"  src="imgcalificacion.png"   alt="no se pudo cargar"></div>
    <div class="moresetting" onclick="temasetting()" title="configurar tema" id="temasetting" ><ion-icon name="color-palette-outline"></ion-icon></div>`
        var clientWidth1 = document.getElementById('desplegarsetting').clientWidth;
        var color = getComputedStyle(document.documentElement).getPropertyValue('--anchoinicialsetting');

        document.documentElement.style.setProperty('--anchoinicialsetting', clientWidth1 + 'px');

        color = getComputedStyle(document.documentElement).getPropertyValue('--anchoinicialsetting');

        document.getElementById("desplegarsetting").style = `animation: abrirsetting 2s forwards;height:30px;`
    } else {
        var clientWidth = document.getElementById('desplegarsetting').clientWidth;
        var color2 = getComputedStyle(document.documentElement).getPropertyValue('--anchosetting');

        document.documentElement.style.setProperty('--anchosetting', clientWidth + 'px');

        color2 = getComputedStyle(document.documentElement).getPropertyValue('--anchosetting');

        document.getElementById("desplegarsetting").style = `animation: cerrarsetting 2s forwards;height:30px;`
    }



    console.log(settingvalid)



}


function temasetting() {
    document.getElementById("calificacion").onclick = imgcalificacion
    document.getElementById("temasetting").onclick = ""

    var splitvariableiddecolor = jsonData.Tema.split(":")[0]

    document.getElementById("barradeasignacionsetting").style = ' width: 100%;display:flex;justify-content:end;'
    document.getElementById("barradeasignacionsetting").innerHTML = ``
    document.getElementById("barradeasignacionsetting").innerHTML = `
    <div id="settingtheme" class="settingtheme">
    
    <p>Tema del Quiz</p>
    <div class="coloresdisponibles">
    <div class="azul" id="azul"  onclick="subircolor('#00d6f9',id)"></div>
    <div class="azul amarillo" id="amarillo" onclick="subircolor('#e6ff84',id)"></div>
    <div class="azul verde" id="verde" onclick="subircolor('#7bf958',id)"></div>
    <div class="azul violet" id="violet" onclick="subircolor('#c84ded',id)"></div>
    <div class="azul duraz" id="duraz" onclick="subircolor('#edaba1',id)"></div>
    <div class="azul rojo" id="rojo" onclick="subircolor('#ff9c53',id)"></div>
    
    </div>
    <p class="ajustartext">Color personalizado</p>
    
    <input type="color" id="color_perzonalizado" onchange="subircolor(color_perzonalizado.value,id)" class="color_perzonalizado" value="#a544f0" >
    </div>
    `

    document.getElementById(splitvariableiddecolor).style = "animation: identifier 1s forwards;"

    if (document.getElementById('settingtheme')) {


        window.addEventListener('click', function borrarthema(a) {
            try {

                /*2. Si el div con id clickbox contiene a e. target*/
                agarrarloqueundio = document.getElementById('settingtheme')
                agarrarrelog = document.getElementById('temasetting')
                var otrasopciones = document.getElementById("calificacion")

                if (agarrarloqueundio.contains(a.target) || agarrarrelog.contains(a.target)) {


                    console.log(a.target)

                }
                else {
                    console.log(agarrarloqueundio)
                    document.getElementById("temasetting").onclick = temasetting
                    agarrarloqueundio = document.getElementById('barradeasignacionsetting').innerHTML = ""
                    window.removeEventListener("click", borrarthema);

                }
            } catch (e) {
                window.removeEventListener("click", borrarthema);

            }



        })
    }




}




function subircolor(color, id) {

    document.getElementById("verde").style = ""
    document.getElementById("azul").style = ""
    document.getElementById("amarillo").style = ""
    document.getElementById("violet").style = "border: 1px solid black;"
    document.getElementById("duraz").style = ""
    document.getElementById("rojo").style = ""
    document.getElementById("color_perzonalizado").style = ""
    document.getElementById(id).style = "animation: identifier 1s forwards;"
    jsonData.Tema = `${id}:${color}`

    console.log(color)


}


function imgcalificacion() {
    document.getElementById("calificacion").onclick = ""
    document.getElementById("temasetting").onclick = temasetting
    console.log("hola")
    document.getElementById("barradeasignacionsetting").innerHTML = ``
    document.getElementById("barradeasignacionsetting").style = ' width: 65%;display:flex;justify-content:end;'
    document.getElementById("barradeasignacionsetting").innerHTML = `
    <div id="settingcalificacion" class="settingtheme">
    <div class="metododecalifique">
    <p class="title"> Metodo de calificacion</p>
    </div>
    <div id="interruptor1"  class="interruptor">

    <div class="encerrartextodeopccalificacion">
        <p>Calificar por score<p>
        </div>
        <div id="circuloprincipaldelinterruptor1" class="circuloprincipaldelinterruptor" onclick="interruptoractivar(id)"> 
            <div id="circulodentrodelinterruptor"></div>
        </div>
    </div>        
    <div id="interruptor2" class="interruptor">
    <div class="encerrartextodeopccalificacion"> 
        <p>Calificar con promedio de 1-5<p>
        </div>
        <div id="circuloprincipaldelinterruptor2" class="circuloprincipaldelinterruptor" onclick="interruptoractivar(id)"> 
            <div id="circulodentrodelinterruptor"></div>
            
        </div>
    </div>        
    <div id="interruptor3" class="interruptor"> 
    <div class="encerrartextodeopccalificacion">
        <p>Calificar con promedio de 1-10<p>
        </div>
        <div id="circuloprincipaldelinterruptor3"  class="circuloprincipaldelinterruptor" onclick="interruptoractivar(id)"> 
            <div id="circulodentrodelinterruptor"></div>
        </div>
    </div>        
    <div id="interruptor4" class="interruptor"> 
    <div class="encerrartextodeopccalificacion">
        <p>Sin calificacion<p>
        </div>
        <div id="circuloprincipaldelinterruptor4" class="circuloprincipaldelinterruptor" onclick="interruptoractivar(id)"> 
            <div id="circulodentrodelinterruptor"></div>
        </div>
    </div>        
    </div>
     `
    if (document.getElementById('settingcalificacion')) {


        window.addEventListener('click', function borrmetodoecalificacion(d) {

            try {

                /*2. Si el div con id clickbox contiene a e. target*/
                agarrarloqueundio = document.getElementById('settingcalificacion')
                var otrasopciones = document.getElementById("calificacion")

                if (agarrarloqueundio.contains(d.target) || otrasopciones.contains(d.target)) {


                    console.log(d.target)

                }
                else {
                    console.log(agarrarloqueundio)
                    document.getElementById("calificacion").onclick = imgcalificacion
                    agarrarloqueundio = document.getElementById('barradeasignacionsetting').innerHTML = ""
                    window.removeEventListener("click", borrmetodoecalificacion);

                }
            } catch (e) {
                console.log("error")
                window.removeEventListener("click", borrmetodoecalificacion);

            }



        })
    }

    if (jsonData.metododecalificacion[0]) {
        document.getElementById("circuloprincipaldelinterruptor1").style = `background: #00D43A;`
        document.getElementById("circuloprincipaldelinterruptor1").childNodes[1].style = `transform: translate(100%) scale(1.23);`
    }


    if (jsonData.metododecalificacion[1]) {

       

        

        document.getElementById("circuloprincipaldelinterruptor2").style = `background: #00D43A;`
        document.getElementById("circuloprincipaldelinterruptor2").childNodes[1].style = `transform: translate(100%) scale(1.23);`
    }
    if (jsonData.metododecalificacion[2]) {
        document.getElementById("circuloprincipaldelinterruptor3").style = `background: #00D43A;`
        document.getElementById("circuloprincipaldelinterruptor3").childNodes[1].style = `transform: translate(100%) scale(1.23);`
    }
    if (jsonData.metododecalificacion[3]) {
        document.getElementById("circuloprincipaldelinterruptor4").style = `background: #00D43A;`
        document.getElementById("circuloprincipaldelinterruptor4").childNodes[1].style = `transform: translate(100%) scale(1.23);`
    }

}
function interruptoractivar(id) {

    console.log(id)

    var numerodelalistametodosdecalificacion = id.split('circuloprincipaldelinterruptor')
    var textoconvertirenentero = parseInt(numerodelalistametodosdecalificacion[1])
    if (!jsonData.metododecalificacion[textoconvertirenentero - 1]) {
        jsonData.metododecalificacion[textoconvertirenentero - 1] = true
        document.getElementById(id).style = 'background: #00D43A;'
        document.getElementById(id).childNodes[1].style = '   animation: interrubtoractivar 1s forwards;'

        if (jsonData.metododecalificacion[3]) {
            jsonData.metododecalificacion[0] = false
            document.getElementById("circuloprincipaldelinterruptor1").style = "#0303036f;"
            document.getElementById("circuloprincipaldelinterruptor1").childNodes[1].style = "animation: interrubtoractivarreversa 1s forwards;"
            jsonData.metododecalificacion[1] = false
            document.getElementById("circuloprincipaldelinterruptor2").style = "#0303036f;"
            document.getElementById("circuloprincipaldelinterruptor2").childNodes[1].style = "animation: interrubtoractivarreversa 1s forwards;"
            jsonData.metododecalificacion[2] = false
            document.getElementById("circuloprincipaldelinterruptor3").style = "#0303036f;"
            document.getElementById("circuloprincipaldelinterruptor3").childNodes[1].style = "animation: interrubtoractivarreversa 1s forwards;"

        }
    } else {
        jsonData.metododecalificacion[textoconvertirenentero - 1] = false
        document.getElementById(id).style = 'background: #0303036f;'

        document.getElementById(id).childNodes[1].style = 'animation: interrubtoractivarreversa 1s forwards      ;'


        if (!jsonData.metododecalificacion[0] && !jsonData.metododecalificacion[1] && !jsonData.metododecalificacion[2] && !jsonData.metododecalificacion[3]) {
            console.log("ninguna activa")
            jsonData.metododecalificacion[0] = true
            document.getElementById("circuloprincipaldelinterruptor1").style = 'background: #00D43A;'
            document.getElementById("circuloprincipaldelinterruptor1").childNodes[1].style = 'animation: interrubtoractivar 1s forwards;'


        }

    }



}





function condigurartiempodeljuego() {
    document.getElementById("temasetting").onclick = temasetting
    document.getElementById("calificacion").onclick = imgcalificacion
    // document.getElementById("timesetting").onclick = ""
    document.getElementById("barradeasignacionsetting").innerHTML = ``
    document.getElementById("barradeasignacionsetting").style = ' width: 30%;display:flex;justify-content:end;'
    document.getElementById("barradeasignacionsetting").innerHTML = `
    <div id="settingtiempodelasala" class="settingtheme"> 
    
    <div> <p class="title">Ajustar el tiempo  </p></div>
    
    <div id="interruptor1"  class="interruptor">
    
    <div class="encerrartextodeopccalificacion">
    <p>tiempo por preguntas ajustado manualmente<p>
    </div>
    <div id="circuloprincipaldelinterruptor1" class="circuloprincipaldelinterruptor" onclick="interruptortimesetting(id)"> 
    <div id="circulodentrodelinterruptor"></div>
    </div>
    </div>        
    <div id="interruptor2" class="interruptor">
    <div class="encerrartextodeopccalificacion"> 
    <p>tiempo para terminar el examen completo<p>
    </div>
    <div id="circuloprincipaldelinterruptor2" class="circuloprincipaldelinterruptor" onclick="interruptortimesetting(id)"> 
    <div id="circulodentrodelinterruptor"></div>
    
    </div>
    
    </div>  



<div id="tiempo1setting1" class="tiempo1setting"></div>






       
    <div id="interruptor4" class="interruptor">
    <div class="encerrartextodeopccalificacion"> 
    <p>Sin tiempo limite<p>
    </div>
    <div id="circuloprincipaldelinterruptor4" class="circuloprincipaldelinterruptor" onclick="interruptortimesetting(id)"> 
    <div id="circulodentrodelinterruptor"></div>
    
    </div>
    </div>        
    
   
    <div id="timenotes">
        
    </div>
    
    </div>`
    document.getElementById("settingtiempodelasala").style = 'height:225px'

    if (jsonData.ajustegeneraldeltiempo[0]) {
        document.getElementById("timenotes").innerHTML=`<p><b>Nota: </b> Esta opcion ajustara el tiempo para responder una pregunta segun lo indicado en el formulario. si no encuentra tal formulario.  <a href="#linkcuadro2">click aqui</a></p>`
        document.getElementById("circuloprincipaldelinterruptor1").style = `background: #00D43A;`
        document.getElementById("circuloprincipaldelinterruptor1").childNodes[1].style = `transform: translate(100%) scale(1.23);`
    }


    if (jsonData.ajustegeneraldeltiempo[1]) {

        document.getElementById("timenotes").innerHTML=`<p><b>Nota: </b> Esta opcion fijara el tiempo para terminar todo el Quiz</p>`

        document.getElementById("tiempo1setting1").innerHTML=`
                        <div class="scoretime sore1" id="timersetting" title="Tiempo">
                        <input type="text" maxLength="2"  autocomplete="off" onkeydown="  validaciondelosinputtime(id,event, 'ajsutesminutos ajustessegundos' ); subiralalist(['ajsuteshora','ajsutesminutos','ajustessegundos'],jsonData.activotiempocompleto); return (event.key >= 48 && event.key <= 53)" id="ajsuteshora" onfocus="" onblur="" placeholder="Hr" pattern="[0-9]*">

                        <label onclick="" for="">:</label>

                        <input type="text" maxLength="2" " autocomplete="off" onkeydown="  validaciondelosinputtime(id,event, 'ajsuteshora ajustessegundos' ); subiralalist(['ajsuteshora','ajsutesminutos','ajustessegundos'],jsonData.activotiempocompleto); return (event.key >= 48 && event.key <= 53)" id="ajsutesminutos" onfocus="" onblur="" placeholder="min" pattern="[0-9]*">
                        <label onclick="" for="">:</label>
                        <input type="text" class="segundos"  autocomplete="off" onkeydown=" validaciondelosinputtime(id,event,'ajsuteshora ajsutesminutos'); subiralalist(['ajsuteshora','ajsutesminutos','ajustessegundos'],jsonData.activotiempocompleto); return (event.key >= 46 && event.key <= 57)" id="ajustessegundos" onfocus="" onblur="" maxLength="2" placeholder="ss" pattern="[0-9]*">
                        <div class="relog" onclick="">
        
                            <div id="contenedordelrelogensetting" class="contenedordelrelog" onclick="mostrarcuadroconselectsetting()">
                                <ion-icon name="timer-outline"></ion-icon>
        
                            </div>
                            </div>
                        </div>`
                        document.getElementById("tiempo1setting1").style='animation: nameanimationtiempo 1s forwards'
                        
document.getElementById("ajsuteshora").focus()


        var hrminss= jsonData.activotiempocompleto.time.split(":")

        document.getElementById("ajsuteshora").value= hrminss[0]
        document.getElementById("ajsutesminutos").value=hrminss[1]
        document.getElementById("ajustessegundos").value=hrminss[2]

        console.log(jsonData.activotiempocompleto.time+"hacer porfavorrororooro")



        document.getElementById("circuloprincipaldelinterruptor2").style = `background: #00D43A;`
        document.getElementById("circuloprincipaldelinterruptor2").childNodes[1].style = `transform: translate(100%) scale(1.23);`
    }
    if (jsonData.ajustegeneraldeltiempo[3]) {
        document.getElementById("timenotes").innerHTML=`<p><b>Nota: </b>esta opcion desactivara el tiempo para terminar el Quiz </p>`
        document.getElementById("circuloprincipaldelinterruptor4").style = `background: #00D43A;`
        document.getElementById("circuloprincipaldelinterruptor4").childNodes[1].style = `transform: translate(100%) scale(1.23);`
    }





}






function interruptortimesetting(id) {
    console.log(id)


    var numerodelalistametodosdecalificacion = id.split('circuloprincipaldelinterruptor')
    var textoconvertirenentero = parseInt(numerodelalistametodosdecalificacion[1])
    if (!jsonData.ajustegeneraldeltiempo[textoconvertirenentero - 1]) {


        jsonData.ajustegeneraldeltiempo[textoconvertirenentero - 1] = true
        document.getElementById(id).style = 'background: #00D43A;'
        document.getElementById(id).childNodes[1].style = '   animation: interrubtoractivar 1s forwards;'
        for (let contadorsttingtiempo = 0; contadorsttingtiempo < jsonData.ajustegeneraldeltiempo.length; contadorsttingtiempo++) {
            var contadordentrodeestefor = contadorsttingtiempo + 1
            if (textoconvertirenentero != contadorsttingtiempo + 1) {
                
                if (jsonData.ajustegeneraldeltiempo[contadorsttingtiempo]) {

                    
                   

                    if(jsonData.ajustegeneraldeltiempo[1]){
                        
                        document.getElementById("tiempo1setting1").innerHTML=`
                        <div class="scoretime sore1" id="timersetting" title="Tiempo">
                        <input type="text" maxLength="2"  autocomplete="off"  onkeydown="  validaciondelosinputtime(id,event, 'ajsutesminutos ajustessegundos' );subiralalist(['ajsuteshora','ajsutesminutos','ajustessegundos'],jsonData.activotiempocompleto); return (event.key >= 48 && event.key <= 53)" id="ajsuteshora" onfocus="" onblur="" placeholder="Hr" pattern="[0-9]*">
                        
                        <label onclick="" for="">:</label>
                        
                        <input type="text" maxLength="2"  autocomplete="off" onkeydown="  validaciondelosinputtime(id,event, 'ajsuteshora ajustessegundos' );subiralalist(['ajsuteshora','ajsutesminutos','ajustessegundos'],jsonData.activotiempocompleto); return (event.key >= 48 && event.key <= 53)" id="ajsutesminutos" onfocus="" onblur="" placeholder="min" pattern="[0-9]*">
                        <label onclick="" for="">:</label>
                        <input type="text" class="segundos" autocomplete="off" onkeydown=" validaciondelosinputtime(id,event,'ajsuteshora ajsutesminutos');subiralalist(['ajsuteshora','ajsutesminutos','ajustessegundos'],jsonData.activotiempocompleto); return (event.key >= 46 && event.key <= 57)" id="ajustessegundos" onfocus="" onblur="" maxLength="2" placeholder="ss" pattern="[0-9]*">
                        <div class="relog" onclick="">
                        
                        <div id="contenedordelrelogensetting" class="contenedordelrelog" onclick="mostrarcuadroconselectsetting()">
                        <ion-icon name="timer-outline"></ion-icon>
                        
                        </div>
                        </div>
                        </div>`
                        var hrminss= jsonData.activotiempocompleto.time.split(":")
                        
                        document.getElementById("ajsuteshora").value= hrminss[0]
                        document.getElementById("ajsutesminutos").value=hrminss[1]
                        document.getElementById("ajustessegundos").value=hrminss[2]
                        document.getElementById("tiempo1setting1").style='animation: nameanimationtiempo 1s forwards'
                        
                        
                        
                        document.getElementById("ajsuteshora").focus()
                        document.getElementById("timenotes").innerHTML=`<p><b>Nota: </b> Esta opcion fijara el tiempo para terminar todo el Quiz</p>`

                    }

                    jsonData.ajustegeneraldeltiempo[contadorsttingtiempo] = false
                    console.log("se hace")
                    document.getElementById("circuloprincipaldelinterruptor" + contadordentrodeestefor).style = 'background: #0303036f;'
                    document.getElementById("circuloprincipaldelinterruptor" + contadordentrodeestefor).childNodes[1].style = 'animation: interrubtoractivarreversa 1s forwards;'




                    
        if(!jsonData.ajustegeneraldeltiempo[1]){
            document.getElementById("tiempo1setting1").style='animation: nameanimationtiemporever 1s forwards'


        }

        if (jsonData.ajustegeneraldeltiempo[0]) {
            document.getElementById("timenotes").innerHTML=`<p><b>Nota: </b> Esta opcion ajustara el tiempo para responder una pregunta segun lo indicado en el formulario. si no encuentra tal formulario.  <a href="#linkcuadro2">click aqui</a></p>`
        }
        if (jsonData.ajustegeneraldeltiempo[3]) {
            document.getElementById("timenotes").innerHTML=`<p><b>Nota: </b>esta opcion desactivara el tiempo para terminar el Quiz </p>`
        }
                }
            }
        }




    } else {

        

        jsonData.ajustegeneraldeltiempo[textoconvertirenentero - 1] = false
        document.getElementById(id).style = 'background: #0303036f;'

        document.getElementById(id).childNodes[1].style = 'animation: interrubtoractivarreversa 1s forwards      ;'

        if(!jsonData.ajustegeneraldeltiempo[1]){
            document.getElementById("tiempo1setting1").style='animation: nameanimationtiemporever 1s forwards'

        }
        if (!jsonData.ajustegeneraldeltiempo[0] && !jsonData.ajustegeneraldeltiempo[1] && !jsonData.ajustegeneraldeltiempo[2] && !jsonData.ajustegeneraldeltiempo[3]) {
            if(!jsonData.ajustegeneraldeltiempo[1]){
                document.getElementById("tiempo1setting1").style='animation: nameanimationtiemporever 1s forwards'
    
            }
            
            
            
            console.log("ninguna activa")
            jsonData.ajustegeneraldeltiempo[0] = true
            document.getElementById("circuloprincipaldelinterruptor1").style = 'background: #00D43A;'
            document.getElementById("circuloprincipaldelinterruptor1").childNodes[1].style = 'animation: interrubtoractivar 1s forwards;'
            document.getElementById("timenotes").innerHTML=`<p><b>Nota: </b> Esta opcion ajustara el tiempo para responder una pregunta segun lo indicado en el formulario. si no encuentra tal formulario.  <a href="#linkcuadro2">click aqui</a></p>`


        }


    }


}
var logicallogvariableactivecuadrorelog=false

function validaciondelosinputtime(id, event, inputtime) {
    console.log("hola")
    var codigo = event.which || event.key;
    var tecla = String.fromCharCode(codigo)




    if (codigo >= 48 && codigo <= 57) {
        
        var cortarporspacios= inputtime.split(" ")

        if(cortarporspacios.length==2){
            console.log("fueigualados")
            if (document.getElementById(cortarporspacios[0]).value == "") {
                document.getElementById(cortarporspacios[0]).value = "00"
            }
            if (document.getElementById(cortarporspacios[1]).value == "") {
                document.getElementById(cortarporspacios[1]).value = "00"
            }


        }else{
            console.log("fue igual a dos")
            if (document.getElementById(inputtime).value == "") {
                document.getElementById(inputtime).value = "00"
            }
        }


        

        var acomularvaluemastecla = document.getElementById(id).value + "" + tecla

        console.log(acomularvaluemastecla)
        if (acomularvaluemastecla.length == 3) {
            console.log("hacerlooo")

            if (document.getElementById(id).value.length == 2) {



                if (document.getElementById(id).value.includes("9") || document.getElementById(id).value.includes("8") || document.getElementById(id).value.includes("7") || document.getElementById(id).value.includes("6")) {
                    acomularvaluemastecla = 0 + "" + tecla

                    var acomularvaluemastecla = document.getElementById(id).value = acomularvaluemastecla

                } else {

                    var hacersplit = acomularvaluemastecla.split("")

                    document.getElementById(id).value = hacersplit[1] + "" + hacersplit[2]
                    acomularvaluemastecla = hacersplit[1] + "" + hacersplit[2]

                }



            }


        }

        if (acomularvaluemastecla.length == 1) {
            document.getElementById(id).value = 0 + "" + acomularvaluemastecla
            console.log("es igual a 1")
        }

    }


    console.log("Presionada: " + codigo);


    if (codigo === 13) {
        console.log("Tecla ENTER");
    }

    if (codigo >= 65 && codigo <= 90) {
        console.log(String.fromCharCode(codigo));
    }




}


function mostrarcuadroconselectsetting(){
    var logicallogvariableactivecuadrorelog=true
var guardarelcontenedor= document.createElement("div")

guardarelcontenedor.setAttribute("id","escojertiempo1" )
guardarelcontenedor.classList.add("padredelec")

document.querySelector("#tiempo1setting1").appendChild(guardarelcontenedor);

    console.log("holaa")
    document.getElementById("escojertiempo1").innerHTML+=`

    <div class="selecioesdeopciones ">

    <div class="elegirhora" id="elegirahorasetting">
    <p>hr</p>
    <select class="selec" onchange="ajsuteshora(id,'ajsuteshora',['selecttimeseting1','selecttimeseting2','selecttimeseting3'],jsonData.activotiempocompleto)" size="6" id="selecttimeseting1">
    
    
    
    </select>
</div>
    <div class="elegirhora" id="elegirahorasetting">
    <p>min</p>
    <select class="selec" onchange="ajsuteshora(id,'ajsutesminutos',['selecttimeseting1','selecttimeseting2','selecttimeseting3'],jsonData.activotiempocompleto)" size="6" id="selecttimeseting2">
    
    
    
    </select>
    </div>
    <div class="elegirhora" id="elegirahorasetting">
    <p>ss</p>
    <select class="selec" size="6" onchange="ajsuteshora(id,'ajustessegundos',['selecttimeseting1','selecttimeseting2','selecttimeseting3'],jsonData.activotiempocompleto)" id="selecttimeseting3">
    
    
    
    </select>
    
   



</div>`


var listadedondecolocarnumeros = {
    seleccion3: "selecttimeseting1",
    hora: "ajsuteshora",
    seleccion1: "selecttimeseting2",
    minutos: "ajsutesminutos",
    seleccion2: "selecttimeseting3",
    segundos: "ajustessegundos",


}

colocarnumerostime(listadedondecolocarnumeros)

document.getElementById("contenedordelrelogensetting").onclick=""




window.addEventListener('click', function tiemposettingsla(b) {
    try {

        /*2. Si el div con id clickbox contiene a e. target*/
        agarrarloqueundio = document.getElementById('escojertiempo1')
        agarrarrelog = document.getElementById('contenedordelrelogensetting')
        var otrasopciones = document.getElementById("calificacion")

        if (agarrarloqueundio.contains(b.target) || agarrarrelog.contains(b.target)) {


            console.log(b.target)

        }
        else {
            console.log(agarrarloqueundio)
            
            agarrarloqueundio = document.getElementById('contenedordelrelogensetting').onclick=mostrarcuadroconselectsetting
            agarrarloqueundio = document.getElementById('escojertiempo1').innerHTML = ""
            window.removeEventListener("click", tiemposettingsla);

        }
    } catch (e) {
        window.removeEventListener("click", tiemposettingsla);

    }



})


    
}




function ajsuteshora(id,dondecolocar,lista,dondeguardar){

var guardardatosdelselec=document.getElementById(id).value


document.getElementById(dondecolocar).value=guardardatosdelselec

Timer=""

for(let rl=0;rl<lista.length;rl++){
  Timer+=  document.getElementById(lista[rl]).value

  if(rl!=lista.length-1){
    Timer+=":"
  }
}


dondeguardar.time=Timer




}












    //     <div class="scoretime" id="timer" title="Tiempo">

//     <input type="text" maxLength="2" onchange="" autocomplete="off" onkeydown="  validaciondelosinputtime(id,event ); return (event.key >= 48 && event.key <= 53)" id="ajustesminutos2" onfocus="" onblur="" placeholder="min" pattern="[0-9]*">
//     <label onclick="" for="">:</label>
//     <input type="text" class="segundos" onchange="" autocomplete="off" onkeydown="validaciondelosinputtime(id,event); return (event.key >= 46 && event.key <= 57)" id="ajustessegundos2" onfocus="" onblur="" maxLength="2" placeholder="ss" pattern="[0-9]*">
//     <div class="relog" onclick="">

//         <div id="" class="contenedordelrelog" onclick="">
//             <ion-icon name="timer-outline"></ion-icon>
            
//         </div>
//     </div>
// </div>