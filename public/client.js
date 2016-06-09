var employeeData;

$(document).ready(function() {
  $('#ajaxGenName' ).click( function(){
    console.log( 'button clicked' );
     $.ajax({
       url: 'http://localhost:3000/pathGet',
       dataType: 'text',
       success: function( data ){
          console.log( 'in ajax success' );
          console.log( data );
          employeeData = data;
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button
});//end document ready
