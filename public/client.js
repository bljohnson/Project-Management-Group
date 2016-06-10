<<<<<<< HEAD
// var employeeData;

$(document).ready(function() {
     $.ajax({
       url: 'http://localhost:3000/pathGet',
       type: "GET",
       dataType: 'text',
       success: function( response ){
         $('#createProject').click(function(){
          // console.log( 'in createProject success' );
          // console.log( response );
          $('.clickProjectButton').append('<button id="assignStaff">Assign Staff</button>');
          $('#assignStaff').click(function() {
            $('.employeeData').append( response );
          });
          // employeeData = data;
        }); // end click function
        }, // end success function
=======
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
>>>>>>> a06c29a2142f7164fddcd7c56e934873ee1a36fa
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
<<<<<<< HEAD
       }); // end ajax request
=======
       }); // end ajax  object
  }); // end click getJSONAjax button
>>>>>>> a06c29a2142f7164fddcd7c56e934873ee1a36fa
});//end document ready
