/* 
   This is the javascript file for WCD webpage, rentform.html and feedback.html page
	File name: script.js
	Name: Foo Tze Ern, Shirlyn
	Admission number: 1714823
	Class: DBIT/FT/1A/01 
 */

var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
}

$(document).ready(function() {
	$(".fancybox").fancybox();
});

$(window).on('load', function() {
    $('#slider').nivoSlider(); 
}); 
