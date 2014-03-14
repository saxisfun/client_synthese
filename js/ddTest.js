/*
Initier demande de lister le dictionnaire
*/


function startRecherche() {

	var x = document.getElementById("id_recherher_dict").value;
	//alert('Recherche sur: ' + x);

	hide_all();


	objListViewDictionnaires.XMLHttpReqDict('json/dictionnaire.json');


	show_back_button();

}




/*
	 Utilitaire pour la géolocalisation
	 */



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
