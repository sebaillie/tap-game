window.onload = function() {
	setInterval(game, 250);
}

var taps = 0;
var autoClick = 0;

function game() {
	document.getElementById('tapbox').innerHTML = "Taps: " + taps;
	document.getElementById('autoclicks').innerHTML = "AutoClick: " + autoClick;
	taps += autoClick;

	if (taps >= 10) {
		document.getElementById('upgrade1').style.visibility = "visible";
	}

	if (taps >= 200) {
		document.getElementById('upgrade2').style.visibility = "visible";
	}

	if (taps >= 2000) {
		document.getElementById('upgrade3').style.visibility = "visible";
	}

	if (taps >= 4000) {
		document.getElementById('upgrade4').style.visibility = "visible";
	}
}

// Buying AutoClick Upgrades

function upgrade1() {
	if (taps >= 100) {
		document.getElementById('upgrade1').style.display = "none";
		taps -= 100;
		autoClick += 1;
	}
}

function upgrade2() {
	if (taps >= 1000) {
		document.getElementById('upgrade2').style.display = "none";
		taps -= 1000;
		autoClick += 2;
	}
}

function upgrade3() {
	if (taps >= 5000) {
		document.getElementById('upgrade3').style.display = "none";
		taps -= 5000;
		autoClick += 3;
	}
}

function upgrade4() {
	if (taps >= 10000) {
		document.getElementById('upgrade4').style.display = "none";
		taps -= 10000;
		autoClick += 5;
	}
}