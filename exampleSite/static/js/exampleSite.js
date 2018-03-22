// add here your custom css

jQuery(document).ready(function($) {
  // operation system detection
  var OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
  else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
  else if (navigator.appVersion.indexOf("X11") != -1) OSName = "Linux";
  else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

  // Additional activation of first tab in tabs-nav.md example 
  // Activiation is necessary because of fade effect
  $('#myTab2 li:first-child a').tab('show')

  // Shows tab corresponding to operation system (thirs tab in tabs-nav.md example)
  console.log('Your OS is: ' + OSName);
  if (OSName == "Windows") {
    $('#myTab3 li a[href="#Windows"]').tab('show') 
  } else if(OSName == "MacOS") {
    $('#myTab3 li a[href="#MacOS"]').tab('show') 
  } else if(OSName == "Linux") {
    $('#myTab3 li a[href="#Linux"]').tab('show') 
  }

});
