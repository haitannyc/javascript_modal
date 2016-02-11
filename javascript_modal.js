$(document).ready(function($) {
  // alert('okay')
  
// ---code runnning in invoke modal------

$(".lightbox-link").click(function(e){
    
    var link_element = $(e.currentTarget);
    var imageURL = link_element.data("img-url");

    var image = $("#lightbox-image");
    image.attr('src', imageURL);

    
    // centerImage(image);

    $('.lightbox-outer').show();

    $(".lightbox-outer").click(function(){    
      $(".lightbox-outer").hide();
    });

  });
 
 
// -------end of code modal----------

// function centerImage(image) {

//   image.load(function(){
//     // var page_height = $(window).height();
//     var image_height = image.height();
//     var image_height_offset = ( page_height - image_height ) / 2;
//     image.parent().css("margin-top", image_height_offset);
//   });
// }



});