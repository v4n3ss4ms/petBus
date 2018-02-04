var server = 'https://servicios.emtmadrid.es:8443/';
var data = {
    'idClient': idClient,
    'passKey': passKey,
    'latitude': '40.439755831562',
    'longitude': '-3.6142271125227',
    'Radius':'500',
    'url': 'https://openbus.emtmadrid.es:9443/emt-proxy-server/last/geo/GetStopsFromXY.php'
};

var data2 = {
    'idClient': idClient,
    'passKey': passKey,
    'idStop': '608',
    'url':'https://openbus.emtmadrid.es:9443/emt-proxy-server/last/geo/GetArriveStop.php'
};

var data3 = {
    'idClient': idClient,
    'passKey': passKey,
    'idStop': '4423',
    'Radius':'500',
    'url':'https://openbus.emtmadrid.es:9443/emt-proxy-server/last/geo/GetStopsFromStop.php'
};
var datosmios = {
  x:33,
  y:44,
};

var sendData = data;

var jqxhr = $.ajax({
        method: 'POST',
        url: sendData.url,
        data: sendData,
    })
    .done(function(response, textStatus, jqXHR) {
        var templateBusResponse = _.template($('#apiResponseTmpl').html());
         $('#apiResponse').append(templateBusResponse(response.stop));
        //$('#apiResponse').append(templateBusResponse(datosmios));
        //alert( "success" );
    });
    //.fail(function() {
        //alert( "error" );
    //})
    //.always(function() {
        //alert( "complete" );
    //});


