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
	// funkcija za dodajanje opomnikov na seznam
	var dodajOpomnik = function(event) {
		var nazivPolje = document.querySelector("#naziv_opomnika");
		var casPolje = document.querySelector("#cas_opomnika");
		var naziv = nazivPolje.value;
		var cas = casPolje.value;
		// pobrisemo prvotno vsebino vnosnih polj
		nazivPolje.value = "";
		casPolje.value = "";
		
		// dodamo html kodo v telo opomnikov
		document.querySelector("#opomniki").innerHTML += " \
			<div class='opomnik'> \
			            <div class='naziv_opomnika'>"+naziv+"</div> \
			            <div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div> \
			</div> \
		";
		console.log("Dodal opomnik \""+naziv+"\" cakam "+cas+"s");
	}
	
	// vezemo na listener gumba
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener('click',dodajOpomnik);
		
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