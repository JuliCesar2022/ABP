var limitar=0;

jsonData = {

    preguntas:[
        
    ],

    tablaScore: [
         
    ]

}


CurrentCuestion = {
    question: "",
    responses: [],
    correct: null,
    vale: null
}



Swal.fire({
    icon: 'warning',
    title: 'Advertencia',
    text: 'Esta pagina aun esta en desarrollo',
  })

if(jsonData.preguntas.length==0){
    document.getElementById("interna").innerHTML+='<div class="sinitems"><h1>NO HAY ITEMS</h1></div>'
}


contar=0
function agg(){

CurrentCuestion.correct=null;

    h= document.getElementById("respuestass").value
   vallidar= h.replaceAll(" ","")

    if(vallidar==""){
        console.log("ingrese la respuesta")
    
        }else{
            limitar+=1
            if(limitar<5){
                CurrentCuestion.responses.push(h)
                
                
                reloadPage()

                
               
                  
                
                
                
                
                
           
        }
    } 
    
    

    document.getElementById("respuestass").value=""

}


function reloadPage(){
   
    
    
  
    document.getElementById("lang").innerHTML=`<option value="escoja">-Escoja la respuesta correcta-</option>`
    for( i = contar; i< CurrentCuestion.responses.length;i++ ){
        
        document.getElementById("resp"+i).innerHTML=`<p id="respuestaaparecer${i}">${CurrentCuestion.responses[i]}</p>`
        document.getElementById("resp"+i).style=`margin: 10px;padding:0; background: rgba(0, 0, 0, 0.1);display: flex;
        justify-content: center;
        align-items: center;border-radius:20px;height:45px;opacity: 0;
        animation: fade-in 1s forwards;"`
          document.getElementById("respuestaaparecer"+i).style=`opacity: 0;
        animation: fade-in 3s forwards;`


       
        
        
    }
    contar++
   
    for( i = 0; i< CurrentCuestion.responses.length;i++ ){
        document.getElementById("lang").innerHTML+=` <option value="${i}" >${CurrentCuestion.responses[i]}</option>`
    }
}



function myFunction(){
    CurrentCuestion.correct=null

    var r= document.getElementById("lang").value
if(r!="escoja"){
    CurrentCuestion.correct=r
}else{

    console.log("seleccione una opcion porfavor")
    CurrentCuestion.correct=null
}

  

   console.log(CurrentCuestion.correct)
   
   
}


function actualizar(){

    CurrentCuestion.question= ""
    m=document.getElementById("questions").value
    vallidar= m.replaceAll(" ","")

    if(vallidar==""){
        console.log("ingrese una pregunta valida")
    
        }else{
            CurrentCuestion.question= ""
            m=document.getElementById("questions").value
            CurrentCuestion.question = m
            console.log(CurrentCuestion.question)
           
        }
    } 
    
function score(){

    CurrentCuestion.vale= null
    m=document.getElementById("scoree").value
    vallidar= m.replaceAll(" ","")

    if(vallidar==""){

        console.log("ingrese un score valido")
    
        }else{
            CurrentCuestion.vale= ""
            m=document.getElementById("scoree").value
            CurrentCuestion.vale= m
            console.log(CurrentCuestion.vale)
           
        }
    } 
    

    contemos=0
    contemos2=0
    function BotonAgregar(){


       
        
        if(CurrentCuestion.question.length>0){
            if(CurrentCuestion.responses.length>1){
               if (CurrentCuestion.vale>0 && CurrentCuestion.vale.length>0 ){
                if(CurrentCuestion.correct==0 || CurrentCuestion.correct==1 || CurrentCuestion.correct==2 || CurrentCuestion.correct==3 ){
                
                    if(contemos2==3)contemos2=0

                    jsonData.preguntas.push({...CurrentCuestion})   

                    if(jsonData.preguntas.length>0){
                        document.getElementsByClassName("sinitems")[0].style="z-index:0;opacity:0; "
                    }
                    console.log(jsonData.preguntas)
                    document.getElementById("Preguntasagregadas"+contemos).innerHTML+=`
            
                    <div class= "visible" id="visible${contemos}">
                    
                    <div class="secion" >
                
                            <p>${ CurrentCuestion.question}<br/>${CurrentCuestion.vale}</p>
                
                        
                        </div>
            
                    <div class="icono">
                    <ion-icon id="icono${contemos}" name="chevron-down-outline" onclick="flechita(`+contemos+`)"></ion-icon>
                    </div>
                    </div>
                    </div>
                    <visibilidad id="visibilidad" class="visibilidad`+contemos+`"></visibilidad>
                    `
                    document.getElementById("Preguntasagregadas"+contemos).style=`opacity: 0; animation: fade-in-Item 1s forwards;`
            
                    for( i = 0; i< CurrentCuestion.responses.length;i++ ){
                                document.getElementsByClassName("visibilidad"+contemos)[0].innerHTML+=`<p class="mejoras">${CurrentCuestion.responses[i]} </p>`
                    
                    
                    
                }
                contemos++

                reseteartodoesto()

            }
        } 
     }

     console.log(jsonData)



    }

       
}


function reseteartodoesto(){
    
    document.getElementById("questions").value=""
    CurrentCuestion.question = ""
    CurrentCuestion.vale= null
    document.getElementById("scoree").value=""
   
    contar=0
    limitar=0
    for( i = 0; i< CurrentCuestion.responses.length;i++ ){
        
        document.getElementById("resp"+i).innerHTML=`<p id="respuestaaparecer${i}"></p>`
        document.getElementById("resp"+i).style=`margin: 10px;padding:0; background: rgba(0, 0, 0, 0.0);display: flex;
        justify-content: center;
        align-items: center;border-radius:20px;height:45px;opacity: 0;
        animation: fade-in 1s forwards;"`
          document.getElementById("respuestaaparecer"+i).style=`opacity: 0;
        animation: fade-in 3s forwards;`


       
        
        
    }
    CurrentCuestion.responses=[]

   
    
    

}
    
    function flechita(id){
       
            console.log(id)

                resp = document.getElementsByClassName("visibilidad"+id)[0].className
        
                console.log(resp)
                if(resp.includes("active")){
                  document.getElementById("icono"+id).style="transform: rotate(0deg); transition: .7s;"
                    console.log("si")
                    // document.getElementsByClassName("visibilidad"+id)[0].parentElement.firstChild.style = " border-radius: 20px;"
                    document.getElementsByClassName("visibilidad"+id)[0].className = "visibilidad"+id
                    document.getElementsByClassName("visibilidad"+id)[0].className= "visibilidad"+id +" des"
                    document.getElementById("visible"+id ).style = " border-radius:20px;" 


                   
        
                }else{
                    
                    document.getElementById("visible"+id ).style = " border-radius:20px 20px 0 0;"
                    // document.getElementsByClassName("visibilidad"+id)[0].parentElement.firstChild.firstChild.style = " border-radius:20px 20px 0px 0px;"

                    document.getElementById("icono"+id).style="transform: rotate(180deg);  transition: .7s;"
                    
                    document.getElementsByClassName("visibilidad"+id)[0].className = "visibilidad"+id + " active"
                    
                    console.log("no")
                }
            }


            function crearsala() {
                
if(jsonData.preguntas.length>0){
console.log("se hace")

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      console.log(location.href)
      
       fetch("https://preguntame.onrender.com/CrearSala?preguntas="+JSON.stringify(jsonData), requestOptions)
        .then(response => response.text())
        .then(result => {
               decode= JSON.parse(result)
               linkidsala= decode.data.idSala
               Swal.fire({
                html:` <div class="link">
                <div class="link1"> <a id="copiartexto" href="${location.href.replaceAll("#tab1","").replaceAll("#tab2","").replaceAll("#contact","")}juego/?id=${linkidsala}">${location.href.replaceAll("#tab1","").replaceAll("#tab2","").replaceAll("#contact","")}juego/?id=${linkidsala}</a> </div>
                <div class="copy" onclick="copiar()"><ion-icon name="copy-outline"></ion-icon></div>
            </div>`,
            style:`margin:0;padding:0;`,
            

                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
         

        })
        .catch(error => console.log('error', error));

    
      
    console.log(jsonData)
 }
                
            }
           




            function Juego(){
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                  };
                  

              var idsala= document.getElementById("idsala").value
                if(idsala.length>0){
                  
                    fetch("https://preguntame.onrender.com/GetSalaById?id="+idsala, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        decode= JSON.parse(result)
                        linkidsala= decode.data
                        // preguntasdata=decode.data.preguntas
                        
                        console.log(linkidsala)
                        if(linkidsala!=null ){
                             location.href =`${location.href.replaceAll("#tab1","").replaceAll("#tab2","")}juego/?id=${idsala}`;
                        }else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                                footer: '<a href="">Why do I have this issue?</a>'
                              })
                        }
                    })
                    .catch(error => console.log('error', error));
                        
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                      })
                }
               
            }

            function copiar(){
                var codigoACopiar = document.getElementById('copiartexto');
navigator.clipboard.writeText(codigoACopiar.innerHTML)
            }
// TODO ESTA MALO, TODO ESO ESTA MALISIMO, MALOOOOO BONIFACIO, QUE COSA MALA, BUUUUUUUUUU