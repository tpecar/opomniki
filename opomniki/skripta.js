window.addEventListener('load', function() {
	//stran nalozena
	// tu lahko definiramo vse funkcije
	
	// funkcija za prijavo
	var izvediPrijavo = function(event) {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		// skrijemo prekrivno okno
		document.querySelector(".pokrivalo").style.display = "none";
	}
	// vezemo na listener gumba
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");

		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});