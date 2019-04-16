
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


// window.addEventListener('offline', e=>{
//
//     $.mdtoast('Verifique sua Conexão com a internet!',{
//         type: 'error',
//         interaction: true,
//         interactionTimeout: 2000,
//         actionText: 'Ok'
//
//     });
//
// } );

// Detecta Conexão
function isOnline() {
    if ( navigator.onLine ) {
        $.mdtoast('Conexão restabelecida', {
            type: 'success',
            interaction: true,
            interactionTimeout: 2000,
            actionText: 'OK!'
        });


    } else{
        // Sem Conexão
        $.mdtoast('Verifique sua Conexão com a internet!', {
            type: 'error',
            interaction: true,
            actionText: 'OK',
            interactionTimeout: 20000
        });
    }

}

window.addEventListener('online', isOnline );
window.addEventListener('offline', isOnline );



$(document).ready(function () {

    //Camera
    $('#camera').on('click',()=>{

        if(navigator.mediaDevices)
        {
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: { width: 400, height: 300 }
            }).then( stream => {

                $('#player')[0].srcObject = stream;
                this.stream = stream;

            });

            $.mdtoast('Câmera Iniciada', {
                type: 'success',
                interaction: true,
                interactionTimeout: 2000,
                actionText: 'OK!'
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

    //Fechar Camera
    $('#fecharCamera').on('click',()=>{

        $('#player')[0].pause();

        if ( this.stream ) {
            this.stream.getTracks()[0].stop();
        }
    });

    //Gps
    $('#gps').on('click',()=>{

        $.mdtoast('Iniciando captura da localização',{
            type: 'success',
            interaction: true,
            interactionTimeout: 2000,
            actionText: 'Ok'

        });
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(position => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                $('#latitude').text(latitude);
                $('#longitude').text(longitude);
                $('#modal-mapa').remove();
                let keyGoogle = "AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU";
                let content = "<div id='modal-mapa' class='modal-mapa'>  <iframe width='100%' height='100%' frameborder='0' src='https://www.google.com/maps/embed/v1/view?key="+keyGoogle+"&center="+latitude+","+longitude+"&zoom=17' allowfullscreen></iframe> </div>";
                $('#mapa').prepend(content);
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
    function enviarNotificacao() {

        $.mdtoast('Iniciando o envio da Notificação',{
            type: 'success',
            interaction: true,
            interactionTimeout: 2000,
            actionText: 'Ok'
        });

        const notificationOpts = {
            body: 'Notificação enviada com sucesso!',
            icon: 'imagens/icons/72x72.png'
        };


        const n = new Notification('Notificação CCB', notificationOpts);

        n.onclick = () => {
            //console.log('Click');
            $.mdtoast('Notificação Lida',{
                type: 'info',
                interaction: true,
                interactionTimeout: 2000,
                actionText: 'Ok'
            });
        };

    }




    $('#notificacao').on('click',()=>{

        if (window.Notification)
        {
            if ( Notification.permission === 'granted' ) {
                enviarNotificacao();

            } else if ( Notification.permission !== 'denied' || Notification.permission === 'default' )  {

                Notification.requestPermission( function( permission ) {
                    //console.log( permission );
                    if ( permission === 'granted' ) {
                        enviarNotificacao();
                    }

                });

            }
            else
            {
                $.mdtoast('Notificação Negada',{
                    type: 'error',
                    interaction: true,
                    interactionTimeout: 2000,
                    actionText: 'Ok'

                });
            }

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


    //microfone
    $('#microfone').on('click',()=>{

        if(navigator.mediaDevices)
        {
            navigator.mediaDevices.getUserMedia({
                audio: true
            }).then( stream => {

                $('#audio')[0].srcObject = stream;
                this.stream = stream;

            });

            $.mdtoast('Microfone Iniciada', {
                type: 'success',
                interaction: true,
                interactionTimeout: 2000,
                actionText: 'OK!'
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

    //Fechar Audio
    $('#fecharMicrofone').on('click',()=>{

        $('#audio')[0].pause();

        if ( this.stream ) {
            this.stream.getTracks()[0].stop();
        }
    });



});


