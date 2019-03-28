// function consultar()
// {
const url = = 'https://servicos.detran.ro.gov.br/auth/api/token';
//const url = 'https://reqres.in/api/users';

let usuario = {
    login:'otimisa',
    senha:'12345'
};

    fetch(url",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({usuario})
    })
    //.then(function(res){ console.log(res) })
    .then(resp =>res.json())
        .then(respObj =>{
            console.log('Iniciou');
            console.log(respObj)
        })
    .catch(error => console.log('Deu Erro '+error));

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