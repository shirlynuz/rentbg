/* 
   This is the javascript file for WCD webpage, index page
	File name: script3.js
	Name: Foo Tze Ern, Shirlyn
	Admission number: 1714823
	Class: DBIT/FT/1A/01 
 */


var form = document.querySelector(".contact-form");

function completePreview () {
	if (form.checkValidity() === true) {
		submitButton.className = "submitbutton show";
	}
}
var submitButton = document.querySelector(".submitbutton");
form.addEventListener("change", completePreview);



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

