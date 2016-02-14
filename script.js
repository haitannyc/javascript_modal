$(document).ready(function() {
// alert("okay");

  $('.modalClick').on('click', function() {
    $('#modalBox').show();
  })


  $('.closeModal').on('click', function() {
    $('#modalOverlay').hide();
  })

  $('.modalContent').on('click', function(event) {

    // display the modal with click
    $(event.currentTarget).show(); 

  //use to stop bubbling
     // event.stopPropagation(); 
  })


// close the modal when clicked on
  $('.closeModal').on('click', function() {
    $('#modalBox').hide();
  })




// ---------end of doc ready------------
}); 