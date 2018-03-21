// Collapse/extend documentation tree
$('.li-item-icon').click(function () {
  $( this ).toggleClass("liOpened liClosed") ;
  $( this ).parent().children('ul').toggle() ;
  return false;
});
