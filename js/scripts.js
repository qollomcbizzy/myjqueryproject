jQuery(document).ready(function(){
jQuery("h1").click(function(){
  alert("this is the header");
});
jQuery("img").click(function(){
  alert("you have clicked the image");
  alert("this is an image");
});
jQuery("p").click(function()
{
  $("#house-showing").show();
  $("#house-hidden").hide();
  $(document).ready(function(){
    $(".clickable").click(function() {
    $("#house-showing").toggle(7200);
    $("#house-hidden").toggle();
  });
});
});
$(document).ready(function(){
$("button#green").click(function(){
  $("body").removeClass();
  $("body").addClass("green-background");
});
$("button#yellow").click(function(){
  $("body").removeClass();
  $("body").addClass("yellow-background");
});
$("button#red").click(function(){
  $("body").removeClass();
  $("body").addClass("red-background");
});
/* another way to change the css elements is shown below
$("button#green").click(function() {
        $("body").css("background-color", "green");
      });
    
*/
});
});
