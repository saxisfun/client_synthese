



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




	
	function localiser(){
			alert('localise...');
			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(AffichePosition, gestionErreurs, {timeout:40000});
			}
		}


	function AffichePosition(position){
		
			var latitude=position.coords.latitude;
			var longitude=position.coords.longitude;
			
		
			var coordonnees = 'Latitude: ' + position.coords.latitude  +
							  '\nLongitude: ' + position.coords.longitude +
							  '\nAltitude: ' + position.coords.altitude  +
							  '\nAccuracy: ' + position.coords.accuracy +
							  '\nAltitude Accuracy: ' + position.coords.altitudeAccuracy +
							  '\nHeading: '  + position.coords.heading +
							  '\nSpeed: ' + position.coords.speed +
							  '\nTimestamp: '+ new Date(position.timestamp);
							  
			alert(coordonnees); 
			
				
			//document.getElementById("geolocation").innerHTML='Latitude : '+latitude+ '<br>' + 'Longitude : '+longitude;
		
	   		var options = { zoom: 13, center: new google.maps.LatLng(latitude, longitude), mapTypeId: google.maps.MapTypeId.ROADMAP };
    	
			var map = new google.maps.Map(document.getElementById("contentMap"), options);
    	
			var marker = new google.maps.Marker({ position: new google.maps.LatLng(latitude, longitude) });   	
			marker.setMap(map);
			alert('mappé');	
		}		

	

	function gestionErreurs(erreur){
		switch(erreur.code){
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
 
 
 
