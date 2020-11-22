
// operation system detection
function osName() {
  var OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
  else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
  else if (navigator.appVersion.indexOf("X11") != -1) OSName = "Linux";
  else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
  return OSName
}

// Collapse/extend documentation tree
$('.li-item-icon').click(function () {
  $( this ).toggleClass("liOpened liClosed") ;
  $( this ).parent().children('ul').toggle() ;
  return false;
});
