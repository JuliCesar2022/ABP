jsonData = {
    namesala: "",

    preguntas: [

    ],

    tablaScore: [

    ]

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
    var countt=0
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
     var count=0
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

function Numeros(string) {//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos

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
        <select class="selec" onchange="colocartiempoeninput()" size="7" id="select2">
        
        
        
        </select>
        </div>
        <div class="elegirhora" id="elegirhora">
        <p>ss</p>
        <select class="selec" size="7" onchange="colocartiempoeninput()" id="select3">
        
        
        
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
 
    for (let i = 0; i < 60; i++) {
        document.getElementById("select2").innerHTML += `<option  class="styloiption" value="${i}">${i}</option> `
        if (document.getElementById("min").value.length > 0) {
            document.getElementById("select2").value = document.getElementById("min").value

        }
        document.getElementById("select3").innerHTML += `<option  class="styloiption" value="${i}">${i}</option> `

        if (document.getElementById("ss").value.length > 0) {
            document.getElementById("select3").value = document.getElementById("ss").value

        }
    }

    if (document.getElementById('selecion')) {

        window.addEventListener('click', function (e) {
            /*2. Si el div con id clickbox contiene a e. target*/
            agarrarloqueundio = document.getElementById('ventanadelinput')
            agarrarrelog = document.getElementById('temporizador')
            if (agarrarloqueundio.contains(e.target) || agarrarrelog.contains(e.target)) {



            } else {

                agarrarloqueundio = document.getElementById('ventanadelinput').innerHTML = ""
            }
        })
    }
}


function colocartiempoeninput() {

    minuto = document.getElementById("select2").value
    document.getElementById("min").value = minuto
    min = document.getElementById("min").value

    segundo = document.getElementById("select3").value

    document.getElementById("ss").value = segundo

    ss = document.getElementById("ss").value
    if (min.length > 0 && ss.length > 0) {

        CurrentCuestion.time = min + ":" + ss
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

function subiralalist(valueid) {
    Timer = ""
    min = document.getElementById("min").value
    ss = document.getElementById("ss").value





    if (min.length > 0 && ss.length > 0) {
        Timer += min + ":" + ss

        CurrentCuestion.time = Timer
    
    }


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
    <p>${jsonData.preguntas[jsonData.preguntas.length-1].question} </br>Score: ${ jsonData.preguntas[jsonData.preguntas.length-1].score}<p>
    </div>    
    <div  id="basura${acoculadordelaspreguntasagregadas}" class="tresitems" onclick="eliminacion(id)">
    <ion-icon name="trash-outline"></ion-icon>
    </div>
    <div  id="desplegar${acoculadordelaspreguntasagregadas}"  class="tresitemsfinal" onclick="desplegaryeditar(id)" >

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

function desplegaryeditar(id){
    
    selector=document.getElementById(id).parentNode.parentNode.id
    console.log(selector)
 jsonData.preguntas
var lista= id.split("desplegar")
    list= lista[1]

state= (jsonData.preguntas[list].state==false)? jsonData.preguntas[list].state=true: jsonData.preguntas[list].state=false

if(state){
   
        if(document.getElementById("poscicion"+list)){
            var largo = getComputedStyle(document.documentElement).getPropertyValue('--largo');
            var larg = document.getElementById('poscicion'+list).clientHeight;
             document.documentElement.style.setProperty('--largo', larg+'px');
            
              largo = getComputedStyle(document.documentElement).getPropertyValue('--largo');
             console.log(largo)
    
            eliminarcuandohayalgo = document.getElementById("poscicion"+list)
            eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);

            }   
           
            
    

    document.getElementById(id).style=`transform: rotate(180deg);transition:1s;`

    undivnuevo=document.createElement("div")
    undivnuevo.setAttribute("id", "poscicion"+list);

    
    undivnuevo.classList.add("cuadrodesplegable")

    console.log(undivnuevo)
    document.querySelector("#"+selector).appendChild(undivnuevo);
   

    document.getElementById("poscicion"+list).innerHTML=` 
    <div class="contenodoredit textoedit" id="textoedit${list}">
    <div class="preguntaeditartext ">${jsonData.preguntas[list].question}</div>
    <div class="preguntaediticon"> 
        <ion-icon  title="editar respuesta" name="create-outline"></ion-icon>
    </div>
</div>
<div class="contenodoredit scoreoedit" id="scoreoedit${list}">
    <div class="preguntaeditartext">${jsonData.preguntas[list].score}</div>
    <div class="preguntaediticon"> 
        <ion-icon  title="editar respuesta" name="create-outline"></ion-icon>
    </div>
</div>
<div class="contenodoredit timetoedit" id="timetoedit${list}">
    <div class="preguntaeditartext"> ${retornatiempo(list)} </div>

    <div class="preguntaediticon"> 
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
        <option value="${jsonData.preguntas[list].correct}" >${jsonData.preguntas[list].responses[parseInt(jsonData.preguntas[list].correct) ]}</option>
        
    </select>
</div>`

var variable1=  document.getElementById("cambiar"+list).value
console.log(variable1)
for (let i = 0; i < jsonData.preguntas[list].responses.length; i++) {
    if (i == variable1) {
        
    }else{
        document.getElementById("cambiar"+list).innerHTML+=` <option value="${jsonData.preguntas[list].responses[i]}" >${jsonData.preguntas[list].responses[i]}</option>`
        
    }

}
    
    


}else{
    disparador = false
    
    document.getElementById(id).style=`transform: rotate(0deg);transition:1s;`
    clientHeight = document.getElementById('poscicion'+list).clientHeight;
    
    var color = getComputedStyle(document.documentElement).getPropertyValue('--heigh');

    document.documentElement.style.setProperty('--heigh', clientHeight+'px');
   
     color = getComputedStyle(document.documentElement).getPropertyValue('--heigh');
    console.log(color)
    document.getElementById("poscicion" +list).style=' animation: cerrar 2s forwards'

}

console.log(state)





console.log(id)

    

}


 function retornatiempo(list,id){
repla= jsonData.preguntas[list].time.replaceAll(" ","")
    var timeautoormanual= (repla.length>1)?  jsonData.preguntas[list].time :  "0:25"
    return timeautoormanual

 }


 function colocarrespenlasala(list,id){
  var  iter= (disparador==false)? disparador=true:disparador=false;

    var largoderespuestas=jsonData.preguntas[list].responses.length

 var color = getComputedStyle(document.documentElement).getPropertyValue('--altp');

    document.documentElement.style.setProperty('--altp', largoderespuestas+'9%');
   
     color = getComputedStyle(document.documentElement).getPropertyValue('--altp');

if(disparador){
    if(document.getElementById("nuevoelemento"+list)){
        
        eliminarcuandohayalgo = document.getElementById("nuevoelemento"+list)
        eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);
    }
        document.getElementById("desplegarrespuestaseditensala"+list).style=`transform: rotate(180deg);transition:1s;`
        document.getElementById("textoedit"+list).style=`animation:animaciondelcuadroderespsala 1s forwards`
        document.getElementById("scoreoedit"+list).style=`animation:animaciondelcuadroderespsala 1.5s forwards`
        document.getElementById("timetoedit"+list).style=`animation:animaciondelcuadroderespsala 2s forwards`
        document.getElementById("respoedit"+list).style=`animation:animaciondelcuadroderespsala 2.5s forwards`
        document.getElementById("correctoedit"+list).style=`animation:animaciondelcuadroderespsala 3s forwards`
        
    
    idpadre=document.getElementById(id).parentNode.parentNode.id
    
    console.log(idpadre)
    nuevodiv= document.createElement("div")
    nuevodiv.setAttribute("id","nuevoelemento"+list)
    
    document.querySelector("#"+idpadre).appendChild(nuevodiv);
    nuevodiv.classList.add("responsesaddsala");
        
 
    
    for (let i = 0; i < jsonData.preguntas[list].responses.length; i++) {
        
        document.getElementById("nuevoelemento"+list).innerHTML+= `<p>${jsonData.preguntas[list].responses[i]}</p>`
    }
    

}else{



    document.getElementById("desplegarrespuestaseditensala"+list).style=`transform: rotate(180deg);transition:1s;`
    document.getElementById("textoedit"+list).style=`animation:animaciondesplegar2 4s forwards`
    document.getElementById("scoreoedit"+list).style=`animation:animaciondesplegar2 3.5s forwards`
    document.getElementById("timetoedit"+list).style=`animation:animaciondesplegar2 3s forwards`
    document.getElementById("respoedit"+list).style=`animation:animaciondesplegar2 2.5s forwards`
    document.getElementById("correctoedit"+list).style=`animation:animaciondesplegar3 2s forwards`
    document.getElementById("desplegarrespuestaseditensala"+list).style=`transform: rotate(0deg);transition:1s;`
    var larg = document.getElementById('nuevoelemento'+list).clientHeight;
    console.log(larg)
    var color2 = getComputedStyle(document.documentElement).getPropertyValue('--otravar');

    document.documentElement.style.setProperty('--otravar', larg+'px');
   
     color2 = getComputedStyle(document.documentElement).getPropertyValue('--otravar');

    document.getElementById("nuevoelemento"+list).style=`animation:cerrarrespuestasa 1s forwards`
    
}

 }

 

 function guardarnamesala(){

    jsonData.namesala= document.getElementById("namesala").value

console.log(jsonData.namesala)

 }