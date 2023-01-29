
for (let i = 1; i < 52; i++) {
    document.getElementById("estrellitas").innerHTML += `<div id="estrella" class="estrella${i}"></div>`

}




var clientWidth1 = document.getElementById('divpadre').clientWidth;
try {
    if (clientWidth1 < 900) {
        document.getElementsByClassName("cuadros")[0].remove()
    } else {

        document.getElementsByClassName("titulo")[0].innerHTML = `<div class="cuadros">
     <div class="cuad1 cuadritos"></div>
     <div class="cuad2 cuadritos"></div>
     <div class="cuad3 cuadritos"></div>
     <div class="cuad4 cuadritos"></div>
     <div class="cuad5 cuadritos"></div>
     <div class="cuad6 cuadritos"></div>
     </div>
     <span>este es un titulo para todos d</span>
     <div class="cuadros">
                    <div class="cuad1 cuadritos"></div>
                    <div class="cuad2 cuadritos"></div>
                    <div class="cuad3 cuadritos"></div>
                    <div class="cuad4 cuadritos"></div>
                    <div class="cuad5 cuadritos"></div>
                    <div class="cuad6 cuadritos"></div>
                </div>
     `


    }

} catch (error) {

}


window.addEventListener("resize", function () {
    // tu código aquí
    console.log('La pantalla ha cambiado de tamaño');

    clientHeight = document.getElementById('divpadre').clientHeight;
    var clientWidth1 = document.getElementById('divpadre').clientWidth;
    console.log(clientWidth1 + "X" + clientHeight)
    try {
        if (clientWidth1 < 900) {
            document.getElementsByClassName("cuadros")[0].remove()
            document.getElementsByClassName("cuadros")[1].remove()
        } else {

            document.getElementsByClassName("titulo")[0].innerHTML = `<div class="cuadros">
     <div class="cuad1 cuadritos"></div>
     <div class="cuad2 cuadritos"></div>
     <div class="cuad3 cuadritos"></div>
     <div class="cuad4 cuadritos"></div>
     <div class="cuad5 cuadritos"></div>
     <div class="cuad6 cuadritos"></div>
     </div>
     <span>este es un titulo para todos d</span>
     <div class="cuadros">
                <div class="cuad1 cuadritos"></div>
                <div class="cuad2 cuadritos"></div>
                <div class="cuad3 cuadritos"></div>
                <div class="cuad4 cuadritos"></div>
                <div class="cuad5 cuadritos"></div>
                <div class="cuad6 cuadritos"></div>
            </div>
     `


        }
    } catch (error) {

    }

});






// formato = null
// Validar = true
// console.log("funciona")
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("https://preguntame.onrender.com/GetSalaById?id=" + getParameterByName("id"), requestOptions)
//     .then(response => response.text())
//     .then(result => {
//         formato = JSON.parse(result)
//         formato = formato.data
//         if (formato == null) {
//             location.href ="./..";
//         }
//     })



// Swal.fire({
//     allowOutsideClick: false,

//     title: "Elige un Apodo",

//     input: 'text',

//     confirmButtonText: 'Iniciar',
//     showClass: {
//         popup: 'animate__animated animate__fadeInDown'

//     },
//     hideClass: {
//         popup: 'animate__animated animate__fadeOutUp'
//     }
// })

//     .then((result) => {

//         /* Read more about isConfirmed, isDenied below */

//         if (result.isConfirmed) {
//             NombreJugador = result.value
//             if (result.value.length > 3) {
//                 Validar = true
//                 console.log("funciona")
//                 var requestOptions = {
//                     method: 'GET',
//                     redirect: 'follow'
//                 };

//                 fetch("https://preguntame.onrender.com/GetSalaById?id=" + getParameterByName("id"), requestOptions)
//                     .then(response => response.text())
//                     .then(result => {
//                         formato = JSON.parse(result)
//                         formato = formato.data


//                         console.log(formato)

//                         preguntas = formato["preguntas"]
//                         correct = 0;
//                         incorrec = 0;
//                         puntofinal = 0;
//                         time = 25
//                         currentQuestion = 0;
//                         currentTime = time

















//                     })
//                     .catch(error => console.log('error', error));

//             }
//         }
//     })













// function getParameterByName(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//         results = regex.exec(location.search);
//     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }










