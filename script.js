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
function unix(x) {
	ticks = setInterval(counter, x);
}
function pause() {
	clearInterval(ticks);
}
function counter() {
	var d = new Date();
	var l = Date.now().toString();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	document.getElementById("lclUnx").innerHTML = l[0] + ", " + l[1] + l[2] + l[3] + ", " + 
	l[4] + l[5] + l[6] + ", " + l[7] + l[8] + l[9] + "." + l[10] + l[11] + l[12];
	document.getElementById("lclYər").innerHTML = d.getFullYear();
	document.getElementById("lclMth").innerHTML = d.getMonth() + " (" + months[d.getMonth()] + ")";
	document.getElementById("lclDay").innerHTML = zeropad(d.getDate());
	document.getElementById("lclHør").innerHTML = zeropad(d.getHours());
	document.getElementById("lclMin").innerHTML = zeropad(d.getMinutes());
	document.getElementById("lclSec").innerHTML = zeropad(d.getSeconds());
	document.getElementById("lclMil").innerHTML = msecpad(d.getMilliseconds());
	document.getElementById("lclTzN").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;
	document.getElementById("lclTzI").innerHTML = d.getTimezoneOffset()/60 + ":00";
	var u = (Date.now()+(d.getTimezoneOffset()*60*1000)).toString();
	document.getElementById("utcUnx").innerHTML = u[0] + ", " + u[1] + u[2] + u[3] + ", " + 
	u[4] + u[5] + u[6] + ", " + u[7] + u[8] + u[9] + "." + u[10] + u[11] + u[12];
	document.getElementById("utcYər").innerHTML = d.getUTCFullYear();
	document.getElementById("utcMth").innerHTML = d.getUTCMonth() + " (" + months[d.getUTCMonth()] + ")";
	document.getElementById("utcDay").innerHTML = zeropad(d.getUTCDate());
	document.getElementById("utcHør").innerHTML = zeropad(d.getUTCHours());
	document.getElementById("utcMin").innerHTML = zeropad(d.getUTCMinutes());
	document.getElementById("utcSec").innerHTML = zeropad(d.getUTCSeconds());
	document.getElementById("utcMil").innerHTML = msecpad(d.getUTCMilliseconds());
	document.getElementById("utcTzN").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;
	document.getElementById("utcTzI").innerHTML = d.getTimezoneOffset()/60 + ":00";
}
function zeropad(i) {
	if (i < 10) {i = "0" + i};
	return i;
}
function msecpad(i) {
	if (i < 100) {i = "0" + i}
	else if (i < 10) {i = "00" + i};
	return i;
}
