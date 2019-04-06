
var url = window.location.href;
var swLocation = '/app/sw.js';

var swReg;

if (navigator.serviceWorker)
{

    if ( url.includes('localhost') ) {

        swLocation = '/sw.js';
    }

    navigator.serviceWorker.register(swLocation);

}

window.addEventListener('offline', e=>{

   alert('OffLine');

} );



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