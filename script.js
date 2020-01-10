function w3_open(){
	//document.getElementById("ʒoverlay").style.display = "block";
	document.getElementById("ʒsidebar").style.display = "block";
}
function w3_close(){
	//document.getElementById("ʒoverlay").style.display = "none";
	document.getElementById("ʒsidebar").style.display = "none";
}
function ʒguest_name(){
	var alias;
	//var person = prompt("Please enter your name:", "Harry Potter");
	var person = prompt("What is your name?");
	if (person == null || person == "") {
		alias = "guest";
	}
	else if (person.length > 21) {
		alias = ʒname_toolong();
	}
	else {
		alias = person;
	}
	return alias;
}
function ʒname_toolong() {
	var names;
	var choice = confirm("Your name is too long! Maximum is 21 letters.\n"+
	"Press OK to type your nickname, or Cancel to be known as a \"guest\".")
	if (choice) {
		names = ʒguest_name();
	}
	else {
		names = "guest";
	}
	return names;
}
function ʒnamen() {
	document.getElementById("namen").innerHTML = ʒguest_name();
}
