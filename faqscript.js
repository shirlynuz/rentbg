/* 
   This is the javascript file for WCD webpage, FAQ page
	File name: faqscript.js
	Name: Foo Tze Ern, Shirlyn
	Admission number: 1714823
	Class: DBIT/FT/1A/01 
 */
$(document).ready(function(){
	$('.content').not(':first').hide();
	$('#accordion.title:first').addClass('active');
	$('.title').click(function(){
			$('.title').removeClass('active');
			$(this).addClass('active');
			$('.content').stop().slideUp();
			$(this).next('.content').stop().slideDown();
	});
});	
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