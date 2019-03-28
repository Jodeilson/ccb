function consultar()
{

    fetch("https://servicos.detran.ro.gov.br/auth/api/token",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS'
        },
        method: "POST",
        body: JSON.stringify({login:'otimisa', senha:'12345'})
    })
    //.then(function(res){ console.log(res) })
    .then(resp =>res.json())
        .then(respObj =>{
            console.log('Iniciou');
            console.log(respObj)
        })
    .catch(function(res){ console.log(res) })

    console.log('Finalizou');
}


// var deleteLink = document.querySelector('.delete');
//
// deleteLink.addEventListener('click', function(event) {
//     event.preventDefault();

var btn = document.querySelector('#btnEnviar');
btn.addEventListener('click',function (event) {
   consultar();
});

// document.querySelector("#btnEnviar").click(function(){
//
//     alert('ok');
//
// });