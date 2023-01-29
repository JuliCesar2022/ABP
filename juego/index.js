
        formato = null
        Validar=true
        console.log("funciona")
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch("https://preguntame.onrender.com/GetSalaById?id="+getParameterByName("id"), requestOptions)
            .then(response => response.text())
            .then(result => { 
                formato=JSON.parse(result)
                formato=formato.data
                if(formato==null){
                    location.href ="./..";
                }
            })

            

        Swal.fire({
            allowOutsideClick: false,

            title: "Elige un Apodo",
            
        input: 'text',
        
        confirmButtonText: 'Iniciar',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
        
        .then((result) => {
            
            /* Read more about isConfirmed, isDenied below */
            
            if (result.isConfirmed) {
            NombreJugador=result.value
            if(result.value.length>3){
                Validar=true
                console.log("funciona")
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                
                fetch("https://preguntame.onrender.com/GetSalaById?id="+getParameterByName("id"), requestOptions)
                    .then(response => response.text())
                    .then(result => { 
                        formato=JSON.parse(result)
                        formato=formato.data
                    
                        
                        console.log(formato)
                
                        preguntas = formato["preguntas"]
                correct= 0;
                incorrec=0;
                puntofinal=0;
                time = 25
                currentQuestion=0;
                currentTime = time
                
                
                
                
                
                
                
                
                
                
                    
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
                
                
                
                
                
                
                    })
                    .catch(error => console.log('error', error));
                
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                }).then((siono) => {
            
                    /* Read more about isConfirmed, isDenied below */
                    
                    if (siono.isConfirmed) {


                location.reload()
            }
                })
                }
            } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
            }
        })
        




        function esperar1s(){
            return new Promise(resolve=>{setTimeout(()=>{resolve("resolved")},1000)})
    } 


   function select1(a){
    if( preguntas[currentQuestion].responses[a] == preguntas[currentQuestion].responses[ preguntas[currentQuestion].correct ] ){
        console.log("RESPUETAS CORRECTA!!!!!!!")
        puntosbueno = document.getElementsByClassName("correct")[0].innerHTML = (parseInt(document.getElementsByClassName("correct")[0].innerHTML) || 0 )+ parseInt( preguntas[currentQuestion].vale )
     
        
    }else{
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

            width = screen.width;

            for(currentTime=time;currentTime>= 0;currentTime--){


                width = width - ( screen.width/time )


                document.getElementsByClassName("time")[0].style=`width: ${ width }px; `
                console.log(await esperar1s())
            }

        div.remove()    

        for (a=preguntas[i].responses.length-1;a>= 0;a--){
            
           document.getElementsByClassName("btn-resp")[0].remove()

       }
    }

}

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

