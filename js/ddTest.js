/*                         */
/* Charger le dictionnaire */
/*                         */


var vecteurLgnDictionnaire = [];



function trf (x,obj){
obj.photoBinaire = x;	
//console.log(obj.IDPhoto+' '+obj.photoBinaire);
}



$(document).ready(function() {
	

	$("#load").click(function() {
		hide_all();

		var jqxhr = $.getJSON('json/oiseaux.json', function(data) {
			$.each(data, function(key, val) {
				obj2cell(val.id, val.espece, val.description,
					val.IDPhoto, val.IDSon, val.flObsPermises);
				vecteurLgnDictionnaire.push(new ClasseLgnDict(val.id,
					val.espece, val.description,
					val.IDPhoto, val.IDSon, val.flObsPermises, ''));
					
					//trf('init',vecteurLgnDictionnaire[vecteurLgnDictionnaire.length-1])
			});
		})


		.done(function() {
			
		
		var ix =0
			for (var i = 0; i < vecteurLgnDictionnaire.length; i++) {
				var new_img = document.createElement("img");
				new_img.src = "birds/" + vecteurLgnDictionnaire[i].IDPhoto + ".jpg";
				
				new_img.onload = function() {
					var canvas = document.createElement('canvas');
					canvas.width = this.naturalWidth;
					canvas.height = this.naturalHeight;
					var c = canvas.getContext('2d');
					c.drawImage(this, 0, 0);
					return trf(canvas.toDataURL(),vecteurLgnDictionnaire[ix++])
				};
			};
		})



		.fail(function() {
			alert("Problème à downloader le dictionnaire");
		})

		.always(function() {
			
			
			
			for (var i = 0; i < vecteurLgnDictionnaire.length; i++) {
				
				console.log(i + ' ' + vecteurLgnDictionnaire[i].id + ' ' 
					+ vecteurLgnDictionnaire[i].espece + ' ' 
					+ vecteurLgnDictionnaire[i].flObsPermises + ' ' 
					+ vecteurLgnDictionnaire[i].photoBinaire);
			}
			
			
			
			
			try {
				localStorage.setItem("vecteurLgnDictionnaire", JSON.stringify(vecteurLgnDictionnaire));
				alert('Il y a ' + vecteurLgnDictionnaire.length + ' oiseaux dans le localStorage.');
			} catch (e) {
				alert("Problème de localStorage: " + e);
			}
		});
	});
});






function obj2cell(le_id, l_espece, la_descrip, le_IDPhoto, le_IDSon, le_flObsPermises) {

	var newDiv1 = document.createElement("div");
	newDiv1.setAttribute("class", "la_liste1");
	newDiv1.setAttribute("align", "left");
	newDiv1.id = "id_div_liste_commentaires";

	var audio = document.createElement('audio');
	audio.src = "sons/" + le_IDSon + ".mp3";
	audio.controls = true;
	audio.autoplay = false;
	audio.setAttribute("class", "bird_audio");
	newDiv1.appendChild(audio);


	var newImg2 = document.createElement("img");
	newImg2.src = "img/musical_note.png";
	newImg2.setAttribute("class", "speaker_img");
	newDiv1.appendChild(newImg2);



	var newImg1 = document.createElement("img");
	newImg1.src = "birds/" + le_IDPhoto + ".jpg";
	newImg1.setAttribute("class", "bird_img");
	newImg1.setAttribute("id", randomcssid());
	newImg1.addEventListener('click', autresphotos, false);
	newDiv1.appendChild(newImg1);

	var newP2 = document.createElement("p");
	var newP2Content = document.createTextNode(l_espece);
	newP2.setAttribute("class", "bird_espece");
	newP2.appendChild(newP2Content);
	newDiv1.appendChild(newP2);


	// mettre ou ne pas mettre le bouton selon le flag  flObservationRequise
	if (le_flObsPermises === true) {
		var newRadio4 = document.createElement("input");
		newRadio4.setAttribute("type", "button");
		//newRadio4.setAttribute('checked', '');
		newRadio4.setAttribute("class", "ajout_observ_button");
		newRadio4.setAttribute("value", "Ajouter une observation");
		//newRadio4.setAttribute("id", "bouton_effacer_ligne");
		newRadio4.addEventListener('click', function() {
			onClickBoutonAjouterObservation(le_id);
		}, false);
		newDiv1.appendChild(newRadio4);
	}

	var newP1 = document.createElement("p");
	var newP1Content = document.createTextNode(tronquetxt(la_descrip));
	newP1.setAttribute("class", "bird_descript");
	newP1.appendChild(newP1Content);
	newDiv1.appendChild(newP1);

	my_mainDiv = document.getElementById("div_main");
	my_mainDiv.appendChild(newDiv1);
}




function tronquetxt(texte) {
	var sous_chaine = texte.substr(0, 250) + " ...";
	return sous_chaine
}



function getRandomArbitrary(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}



function randomcssid() {
	return "bird_img" + getRandomArbitrary(1, 4);
}



function autresphotos() {
	alert("D'autres photos suivront...");
}









/*                                  */
/* Exemple de recherche avec jquery */
/*                                  */


$('#search').keyup(function() {

	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");

	$.getJSON('json/oiseaux.json', function(data) {

		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.espece.search(myExp) != -1) ||
				(val.description.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>' + val.espece + '</h2>';
				output += '<img src="birds/' + val.IDPhoto + '.jpg" alt="' + val.espece + '"> </audio>';
				output += '<p>' + val.description + '</p>';
				if (val.flObsPermises === true) {
					output += '<button onclick="onClickBoutonAjouterObservation(' + val.id + ');" style="width:170px;">AJOUTER UNE OBSERVATION</button>';
				}
				output += '<audio controls> <source src="sons/' + val.IDSon + '.mp3"/>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON

});




/*                     */
/* api géolocalisation */
/*                     */


//appelé par new objet observation ...

function prendreCoordonneesGPS(objX) {

	//normalement ça devrait être undefined car la position 0,0 existe !
	//objX.strObserv_Position_lat = undefined;
	//objX.strObserv_Position_long = undefined;
	objX.strObserv_Position_lat = 0;
	objX.strObserv_Position_long = 0;


	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(AffichePositionBB, gestionErreurs, {
			timeout: 40000
		});
	}



	function AffichePositionBB(position) {
		//transfert des positions x,y dans le nouvel objet «observation»
		objX.strObserv_Position_lat = position.coords.latitude;
		objX.strObserv_Position_long = position.coords.longitude;

		//pas élégant mais c'est ça 4now dû à l'assynchronisme du traitement
		document.getElementById('id_ObservLaPositionGPS_lat_data').value = parseFloat(objX.strObserv_Position_lat);
		document.getElementById('id_ObservLaPositionGPS_long_data').value = parseFloat(objX.strObserv_Position_long);
	}


}









//fonction appelée par l'appl

function localiser(sans_Carte) {

	if (sans_Carte === undefined) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(AffichePosition, gestionErreurs, {
				timeout: 40000
			});
		}

	} else {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(AfficheCarte, gestionErreurs, {
				timeout: 40000
			});
		}
	}
}



//fonctions passées en parmêtre dans «navigator.geolocation.getCurrentPosition»

function AfficheCarte(position) {

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var options = {
		zoom: 13,
		center: new google.maps.LatLng(latitude, longitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("contentMap"), options);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude)
	});
	marker.setMap(map);

}



function AffichePosition(position) {

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var coordonnees = 'Latitude: ' + position.coords.latitude +
		'\nLongitude: ' + position.coords.longitude +
		'\nAltitude: ' + position.coords.altitude +
		'\nAccuracy: ' + position.coords.accuracy +
		'\nAltitude Accuracy: ' + position.coords.altitudeAccuracy +
		'\nHeading: ' + position.coords.heading +
		'\nSpeed: ' + position.coords.speed +
		'\nTimestamp: ' + new Date(position.timestamp);

	alert(coordonnees);
}






function gestionErreurs(erreur) {
	switch (erreur.code) {
		case 3:
			alert("Temps dépassé");
			break;

		case 2:
			alert("Le navigateur ne parvient pas à vous localiser");
			break;

		case 1:
			alert("Vous ne souhaitez pas partager votre localisation");
			break;

		case 0:
			alert("Erreur");
			break;

	}
}
