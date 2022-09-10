preguntas = [
    {
        question: "¿pregunta 1?",
        responses: ["respuesta 1","respuesta2","respuesta3"],
        correct: 3,
    },
    {

        question: "¿pregunta 2?",
        responses: ["respuesta 1","respuesta2","respuesta3"],
        correct: 2,

    },
    {

        question: "¿pregunta 3?",
        responses: ["respuesta 1","respuesta2","respuesta3"],
        correct:1,

    }

]
correct= 0;
incorrec=0;
puntofinal=0;
time = 10
currentQuestion=0;
currentTime = time




   function esperar1s(){
        return new Promise(resolve=>{setTimeout(()=>{resolve("resolved")},1000)})
   } 



function select1(a){
    if( preguntas[currentQuestion].responses[a] == preguntas[currentQuestion].responses[ preguntas[currentQuestion].correct - 1 ] ){
        console.log("RESPUETAS CORRECTA!!!!!!!")
puntosbueno = document.getElementsByClassName("correct")[0].innerHTML
puntosbueno = parseInt(puntosbueno);
document.getElementsByClassName("correct")[0].innerHTML= puntosbueno+1
        
    }else   
    {
        console.log("Brutooo!")
        puntosbueno = document.getElementsByClassName("nocorre")[0].innerHTML
puntosbueno = parseInt(puntosbueno);
document.getElementsByClassName("nocorre")[0].innerHTML= puntosbueno+1
    }

    currentTime = 0
    document.getElementsByClassName("time")[0].style=`width:0%; `
}

async function empezar(){
    console.log("empezaron los sergios a bobear")
    console.log(preguntas.length)
    for(i=0 ; i<=preguntas.length-1; i++){

        currentQuestion = i
        console.log(i)

        div = document.createElement("h1")

        div.innerHTML= preguntas[i].question

     
        //creando respuestas
        for (a=0;a<= preguntas[i].responses.length-1;a++){
            
             btn= document.createElement("div")
             btn.innerHTML= preguntas[i].responses[a]
             btn.classList.add("btn-resp");

             
             btn.setAttribute("onclick", `select1(${a})`);



             document.getElementById("resp").appendChild(btn)

        }

        papi = document.getElementsByClassName("hijito")[0]

        papi.appendChild(div)

            for(currentTime=time;currentTime>= 0;currentTime--){

                document.getElementsByClassName("time")[0].style=`width:${currentTime}0%; `
                console.log(await esperar1s())
            }

        div.remove()    

        for (a=preguntas[i].responses.length-1;a>= 0;a--){
            
           document.getElementsByClassName("btn-resp")[0].remove()

       }
    }

}
    
    for (let index = 3; index >= -1; index--) {
    
        setTimeout (
            ()=>{

                if(index==0) {
                    document.getElementById("numero").innerHTML= `GO!`;
                }else if(index==-1){
                    document.getElementById("mama").remove()
                    empezar();
                }else{
                    document.getElementById("numero").innerHTML= `${index}`;
                }

             
            },5000 - ( index * 1000) 
        )
    
        
       
    }


