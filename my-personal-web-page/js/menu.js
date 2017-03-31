
//*****************************
//      Dropdown Menu
//**********************************



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

