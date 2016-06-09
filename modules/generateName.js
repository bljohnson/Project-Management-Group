$(document).ready(function() {
  $('#ajaxGenName' ).click( function(){
    console.log( 'button clicked' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
          console.log( 'in ajax success' );
          console.log( data );
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button




var generateName = function(){

  // $.ajax({   url: 'https://randomuser.me/api/',   dataType: 'json',   success: function(data){   console.log(data);   } });

  //  http://api.randomuser.me/?inc=name
};//end generateName function

});//end document ready function
module.exports=generateName;
