// two global variables
var secondsRemaining;
var intervalHandle;


/*
Chronomètre
Délais d'une seconde
*/


function tick() {
  
     var timeDisplay = document.getElementById("time");
  
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;
    
    
     // changement de couleur pour la dernire minute !!!
    if (secondsRemaining < 60) {
        timeDisplay.setAttribute("style","font-size: 6em; color: #fc0008; background-color: #c2b8ee;");
     }
    
    
    // stop if down to zero
    if (secondsRemaining === 0) {        
        alert('Terminé!');
        clearInterval(intervalHandle);
        
        document.getElementById("inputArea").style.display = "block";
        
        // couleur au dpart du compteur
        timeDisplay.setAttribute("style","font-size: 5em; color: #FF00FF; background-color: #D5D6D7;");
      }
     
    // subtract from seconds remaining
    secondsRemaining--;
}



/*
Chronomètre
Sur le bouton démarrer chronomètre
*/

function startCountdown() {
    
   
    // get contents of the "minutes" text box
    var minutes = document.getElementById("minutes").value;
 
 
     if (document.getElementById("inputArea").style.display == "none") {        
        alert("Pause...");
        return;
      }
    

    // check if not a number
    if (isNaN(minutes)) {
        alert("Entrez une valeur numérique svp!");
        return;
    }
    
    // how many seconds?
    secondsRemaining =  minutes * 60;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 50);
    // hide the form
    document.getElementById("inputArea").style.display = "none";

}

/*
Chronomètre
Sur le bouton démarrer chronomètre

*/

// as soon as the page is loaded... créé à la volée
window.onload =  function () {  
	//alert('window.onload');
	
   // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
   
 
    // add to the DOM, to the div called "inputArea"
    document.getElementById("inputArea").appendChild(inputMinutes);
    inputMinutes.setAttribute("size", 20);
     
    inputMinutes.value = "2";
    
};





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
 
 
 
