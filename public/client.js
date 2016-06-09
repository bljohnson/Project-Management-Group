var names = ["Beyonce", "LLCoolJ", "McBirdyPants", "Chancey", "LLBlueJay","Schmidt", "Angus", "Snoopy", "Captain FeatherBottom", "Princess CooCoo Poof"];
var studentName;

$(document).ready(function() {
  $('#ajaxGenName' ).click( function(){
    console.log( 'button clicked' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
          console.log( 'in ajax success' );
          console.log( data );
          studentName = data;
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button
});//end document ready
