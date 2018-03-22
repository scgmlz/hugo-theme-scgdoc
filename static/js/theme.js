jQuery(document).ready(function($) {
  var OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
  else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
  else if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
  else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

  console.log('Your OS is: ' + OSName);
  if (OSName == "UNIX") {
    // $("#MyTab3").tabs("option", "active", 1 ); 
    $('#myTab3 li a[href="#Linux"]').tab('show') 
    console.log('CCCCC');
  }
  

});


// Collapse/extend documentation tree
$('.li-item-icon').click(function () {
  $( this ).toggleClass("liOpened liClosed") ;
  $( this ).parent().children('ul').toggle() ;
  return false;
});
