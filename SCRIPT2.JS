/* 
   This is the javascript file for WCD webpage, rent2.html page
	File name: script2.js
	Name: Foo Tze Ern, Shirlyn
	Admission number: 1714823
	Class: DBIT/FT/1A/01 
 */
var figureImage = document.querySelector(".rentfig img");
var figureCaption = document.querySelector(".rentfig figcaption");
var monopolyHead = document.querySelector(".monopoly h3");
var monopolyParagraph = document.querySelector(".monopoly p");
var riskHead = document.querySelector(".risk h3");
var riskParagraph = document.querySelector(".risk p");
var lifeHead = document.querySelector(".life h3");
var lifeParagraph = document.querySelector(".life p");

function showMonopoly() {
	figureImage.src = "images/monopolyrentpage.jpg";
	figureImage.alt = "Monopoly";
	figureCaption.textContent = "Monopoly";
	monopolyParagraph.className = "show";
	riskParagraph.className = "";
	lifeParagraph.className = "";
}
function showRisk() {
	figureImage.src = "images/riskpage3.jpg";
	figureCaption.textContent = "Risk";
	monopolyParagraph.className = "";
	riskParagraph.className = "show";
	lifeParagraph.className = "";
}
function showLife() {
	figureImage.src = "images/lifepage3.jpg";
	figureCaption.textContent = "Life";
	monopolyParagraph.className = "";
	riskParagraph.className = "";
	lifeParagraph.className = "show";
}

monopolyHead.addEventListener("click", showMonopoly);
riskHead.addEventListener("click", showRisk);
lifeHead.addEventListener("click", showLife);

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