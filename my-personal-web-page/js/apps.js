// Picture becomes overlaid when thumbnail is clicked

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Image to Overlay
$overlay.append($image);

//Caption Overlay
$overlay.append($caption);

//Add the Overlay to body
$("body").append($overlay);

//Capturing the click of image
$("#imageGallery img").click(function(event){
   event.preventDefault();
    var imageLocation = $(this).attr("src");
    $image.attr("src", imageLocation);
    
    //Show the overlay
    $overlay.show();
    
    //Get the alt attribute and set the caption
    var imgCaption = $(this).attr("alt");
    $caption.text(imgCaption);
});
                              
//Hiding Overlay after clicking of Overlay
$overlay.click(function(){
    $overlay.hide();
});




//Dropdown Navigation??????????????????????????????



// Create the dropdown base
$("<select />").appendTo(".nav");

// Create default option "Menu"
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Menu"
}).appendTo(".nav select");

// Populate dropdown with menu items
$(".nav a").each(function() {
 var pop = $(this);
 $("<option />", {
     "value"   : pop.attr("href"),
     "text"    : pop.text()
 }).appendTo(".nav select");
});

$(".nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});