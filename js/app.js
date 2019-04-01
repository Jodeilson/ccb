// function consultar()
// {
//const url = 'https://servicos.detran.ro.gov.br/auth/api/token';
const url = "https://servicos.detran.ro.gov.br/renavam/api/vistoria/consulta/ncz2550";
//const url = 'https://reqres.in/api/users';

let usuario = {
    login:'otimisa',
    senha:'12345'
};

    fetch(url,
    {
        headers: {
           'Authorization':'v-aXEmCzBK50BXWA3uMcaHiOOmo4YaNz1EIZIIRktA7hD7jv-KBIsMU9RWihHNea2yPs6fOMbEcUbLEtUV0sXCcniNkIGPf8iZNLswxmeaQKygmArwU6l5DjUtCRnlgQaCBA-Br-vglrH1nEJpOh40EUfPD79L_A_0MM23QSFHx6yQIPCg5ELf0o-E2ybE2i6l8YGO_YBk2kl2_Wraoqt70MA-8HqeUagwDGzO_YuOSZxff4cKd_WGMXWebtTcIIID47rsIR_nGIb8WY1iXqnRoeqaEqILwVOBqgyz0Ky0I2gjudFXeTvJKOb98IQaH8',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET",
        //body: JSON.stringify({usuario})
    })
    //.then(function(res){ console.log(res) })
    .then(resp => resp.json())
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