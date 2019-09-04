var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button=document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function randomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
    
function randomGradient() {
	
	var colorRandom1=randomColor();
    var colorRandom2=randomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ colorRandom1
	+ ", " 
	+ colorRandom2
	+ ")";

	css.textContent = body.style.background + ";";
	color1.value=colorRandom1;
	color2.value=colorRandom2;
	
}

function setInitialValues(){
	var gradinfo=getGradientInfo();
	color1.value=gradientInformation.colorStart;
	color1.value=gradientInformation.colorStart;
	css.textContent=gradientInformation.gradient +";";

}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);

