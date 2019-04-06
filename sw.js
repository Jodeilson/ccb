


importScripts('js/metodos.js');


const STATIC_CACHE    = 'static-v1';
const DYNAMIC_CACHE   = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';


const APP_SHELL = [
    '/',
    'index.html',
    'css/app.css',
    'js/app.js',
];

const APP_SHELL_INMUTABLE = [
    'css/bootstrap.min.css',
    'css/sb-admin-2.css',
    'css/toastr.min.css',
    'js/bootstrap.min.js',
    'js/jquery-3.3.1.min.js',
    'js/sb-admin-2.js',
    'js/toastr.min.js',

];

// self.addEventListener('install', e => {
//     const cacheStatic = caches.open( STATIC_CACHE ).then(cache =>
//         cache.addAll( APP_SHELL ));
//
//     const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache =>
//         cache.addAll( APP_SHELL_INMUTABLE ));
//
//
//
//     let result = (async function() {
//
//        await console.log('awit');
//     });
//
//
//
//
//     e.waitUntil(  Promise.all([ cacheStatic, cacheInmutable ])  );
//
// });


self.addEventListener('install', function(e) {
    console.log('instalando caches');
    e.waitUntil(
        caches.open('STATIC_CACHE').then(function(cache) {
            return cache.addAll(APP_SHELL);
        })
    );
});



self.addEventListener('activate', e => {

    const resposta = caches.keys().then( keys => {

        keys.forEach( key => {

            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

            if (  key !== DYNAMIC_CACHE && key.includes('dynamic') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( resposta );

});
self.addEventListener( 'fetch', e => {

    let resposta;

    if ( e.request.url.includes('/api') ) {

    } else {

        resposta = caches.match( e.request ).then( res => {

            if ( res ) {

                atualizaCacheStatico( STATIC_CACHE, e.request, APP_SHELL_INMUTABLE );
                return res;

            } else {

                return fetch( e.request ).then( newRes => {

                    return atualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );

                });

            }

        });

    }

    e.respondWith( resposta );

});

