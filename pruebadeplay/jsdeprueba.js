
CurrentCuestion = {
    namesala: "",
    question: "",
    time: null,
    responses: [],
    correct: null,
    score: null
}
respuestascodigo = [];
// aqui guardamos la pregunta en el currentcuestion
function guardarpregunta() {
    containinputdelapregunta = document.getElementById("pregunta").value
    CurrentCuestion.question = containinputdelapregunta
    console.log(CurrentCuestion.question)
}
// aqui se agregara el score

function guardarscore() {

    CurrentCuestion.score = 3
    console.log(CurrentCuestion.score)
}

// aqui agregaremos las posibles respuestas al CurrentCuestion y visualmente 
// con su animacion incluida y todas las validaciones

document.getElementById("aquiseagreganposiblesrespuestas").innerHTML = `<p class="aquilaspreguntas" id="aquilaspreguntas">Aqui se agregaran las respuestas</p>`
document.getElementById("aquiseagreganposiblesrespuestas").style = `display: flex;
justify-content: center;align-items: center;`
contar = 0;
function agg() {

    posiblerespuesta = document.getElementById("escribirposiblerespuesta").value
    validarquenoestevacio = posiblerespuesta.replaceAll(" ", "")
    document.getElementById("escribirposiblerespuesta").value = ""
    //    validacion de mas de un dijito en el input para añadir respuesta
    if (validarquenoestevacio.length > 0) {
        contar++;
        if (contar == 1) {
            eliminarcuandohayalgo = document.getElementById("aquilaspreguntas")
            eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);
            document.getElementById("aquiseagreganposiblesrespuestas").style = `display: flex;
            align-items:center; flex-direction: column;`



        }
        if (contar <= 6) {

            // agregar respuesta al CurrentCuestion
            CurrentCuestion.responses.push(posiblerespuesta)
            console.log(CurrentCuestion.responses)
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

}

function editarrespuestas(id, animacion) {

    ideprincipal=id
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



function guardarcorreccion(numero, lista,id) {
  
    i = document.getElementById("obtenertextarea" + numero).value
    CurrentCuestion.responses[lista] = i
    eliminarcuandohayalgo = document.getElementById(id)
    eliminarcuandohayalgo.parentNode.removeChild(eliminarcuandohayalgo);


    document.getElementById("animacion"+numero).innerHTML +=`<div class="edit" id="${ideprincipal}"   onclick="editarrespuestas(id,'animacion${numero}')"  title="editar respuesta">
            
    <ion-icon  title="editar respuesta" name="create-outline"></ion-icon>

    
    </div> `

    document.getElementById("textarea" + numero).innerHTML =`<p  id="editarrespuesta${numero}">${CurrentCuestion.responses[lista]}</p>`
}