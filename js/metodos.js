

//Guarda Cache Dinamico
function atualizaCacheDinamico( dynamicCache, req, res ) {


    if ( res.ok ) {

        return caches.open( dynamicCache ).then( cache => {

            cache.put( req, res.clone() );

            return res.clone();

        });

    } else {
        return res;
    }

}

// Cache Statico
function atualizaCacheStatico( staticCache, req, APP_SHELL_INMUTABLE ) {


    if ( APP_SHELL_INMUTABLE.includes(req.url) ) {


    } else {
        return fetch( req )
            .then( res => {
                return atualizaCacheDinamico( staticCache, req, res );
            });
    }


}