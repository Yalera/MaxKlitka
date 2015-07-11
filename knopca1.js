window.onload = init;
 var num = 0;
 function init() {
 var button = document.getElementById("knopka");
 knopka.onclick = ButtonClick;
 var button2 = document.getElementById("knopkaVivoda");
 knopkaVivoda.onclick = ButtonClick2;
 }
 
 function ButtonClick() {
	 num = num + 1;
	 var li = document.createElement("li");
	 li.innerHTML = "Hello World";
	 var tik = document.getElementById("strochka");
	 tik.appendChild(li);
	 
 }
 
 function ButtonClick2 () {
	alert(num); 
 }