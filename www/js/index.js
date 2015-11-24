var watchId,
    iniciar     = document.querySelector( '#iniciarCaptura' ),
    parar       = document.querySelector( '#pararCaptura' ),
    options     = {timeout : 30000};
        
    function inicarCaptura(){
        watchId= navigator.geolocation.watchPosition( mostrarTela, fail, options );
    } 
        
    function mostrarTela( position ){
        var html        = '';
        
        html = 'Latitude: '                 + position.coords.latitude          + '<br/>';
        html += 'Longitude: '               + position.coords.longitude         + '<br/>';
        html += 'Altitude: '                + position.coords.altitude          + '<br/>';
        html += 'Precisão: '                + position.coords.accuracy          + '<br/>';
        html += 'Precisão de Altitude: '    + position.coords.altitudeAccuracy  + '<br/>';
        html += 'Direção: '                 + position.coords.heading           + '<br/>';
        html += 'Velocidade: '              + position.coords.speed             + '<br/>';
        html += 'TimesTamp: '               + new Date( position.timestamp )    + '<br/>';
        
        var resultado   = document.querySelector( "#resultado" );
        resultado.innerHTML = html;
    }
        
    function fail( error ){
        alert( 'Erro:' + error.code +" Messagem: " + error.message );
    }
        
    function pararCaptura(){
       if( watchId ) {
           navigator.geolocation.clearWatch( watchId );
           watchId = null;
       }            
    }
    

iniciar.addEventListener( 'click', inicarCaptura, false );
parar.addEventListener( 'click', pararCaptura, false );