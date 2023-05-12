console.log('readt----------.');

$(document).ready(function() {
    $.getJSON( "https://gist.githubusercontent.com/Rahmadjaya/4f766d046ee40fe80761116a0fc0955e/raw/a326ca23332609d7744b80efdde075c5bbd7a594/products.json", function( json ) {
        console.log(json);
    });
    
    
 
       
});