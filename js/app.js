
var url = window.location.href;
var swLocation = '/ccb/sw.js';

var swReg;

if (navigator.serviceWorker)
{

    if ( url.includes('localhost') ) {

        swLocation = '/sw.js';
    }

    window.addEventListener('load', function() {

        navigator.serviceWorker.register( swLocation ).then( function(reg){
            console.log('sw registrado');
            swReg = reg;
            //swReg.pushManager.getSubscription().then( verificaSuscripcion );

        });

    });


    navigator.serviceWorker.ready.then(function(registration) {
        console.log('Service work pronto');
    });


}


window.addEventListener('offline', e=>{

    $.mdtoast('Verifique sua Conexão com a internet!',{
        type: 'error',
        interaction: true,
        interactionTimeout: 2000,
        actionText: 'Ok'

    });

} );



$(document).ready(function () {


    //Camera
    $('#camera').on('click',()=>{

        alert('ok');


    });

    //Gps
    $('#gps').on('click',()=>{

        $.mdtoast('Iniciando captura da localização',{
            type: 'info',
            interaction: true,
            interactionTimeout: 2000,
            actionText: 'Ok'

        });
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(position => {

                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                var msg ='Latitude: '+latitude +' Longitude '+longitude;

                $.mdtoast(msg,{
                    type: 'success',
                    interaction: true,
                    interactionTimeout: 20000,
                    actionText: 'Ok'

                });


            });
        }
        else {

            $.mdtoast('Navegador não suporta a ação',{
                type: 'error',
                interaction: true,
                interactionTimeout: 2000,
                actionText: 'Ok'

            });

        }



    });


    //Notificacao
    $('#notificacao').on('click',()=>{

        alert('ok');


    });


    //microfone
    $('#microfone').on('click',()=>{

        alert('ok');


    });



});



// function consultar()
// {
// //const url = 'https://servicos.detran.ro.gov.br/auth/api/token';
// const url = "https://servicos.detran.ro.gov.br/renavam/api/vistoria/consulta/aaa9999";
// const get_token = "https://servicos.detran.ro.gov.br/auth/api/token";
//
// let token;
// let html;
//
// let usuario = [
//      login ='otimisa',
//      senha = '12345'
// ];
//
//
// fetch(get_token,
//     {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         method: "POST",
//        // body: JSON.stringify(usuario)
//         //body: JSON.stringify(usuario)
//         body: 'login=administrador&senha=12345'
//     })
// //.then(function(res){ console.log(res) })
//     .then(resp => resp.json())
//     .then(respObj =>{
//         token = respObj.access_token;
//         //console.log(respObj)
//
//
//         fetch(url,
//             {
//                 headers: {
//                     'Authorization': token,
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 method: "GET",
//                 //body: JSON.stringify({usuario})
//             })
//         //.then(function(res){ console.log(res) })
//             .then(resp => resp.json())
//             .then(respObj =>{
//                 //console.log(token);
//                 respObj.forEach(function (result) {
//                      html += "<tr><td>"+result.Placa+"</td> <td>"+result.UFPlaca+"</td> </tr>";
//
//                 });
//                 $('#tabela').append(html);
//                 //console.log(respObj)
//             })
//             .catch(error => console.log('Deu Erro '+error));
//
//
//     })
//     .catch(error => console.log('Deu Erro '+error));
//
//



    //console.log('Finalizou');
//}


// var deleteLink = document.querySelector('.delete');
//
// deleteLink.addEventListener('click', function(event) {
//     event.preventDefault();

// var btn = document.querySelector('#btnEnviar');
// btn.addEventListener('click',function (event) {
//    consultar();
// });

// document.querySelector("#btnEnviar").click(function(){
//
//     alert('ok');
//
// });