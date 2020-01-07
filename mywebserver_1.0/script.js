$(document).ready(function(){

$('a').on('click', function(e){
e.preventDefault();
var pageRef = $(this).attr('href');

callPage(pageRef);

});

function callPage(pageRefInput){

    $.ajax({
        url: pageRefInput,

        type: "GET",

        dataType: 'text',

        success: function( response ) {
            console.log('The page is loaded', response);
            $('.content').html(response);
        },

        error: function( error ) {
             console.log('The page was not loaded', error);
        },

        complete: function( xhr , status ) {
            console.log('The request is complete');

        }
    });

}


});