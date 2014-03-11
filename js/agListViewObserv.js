//Section pour l'affichage et le téléchargement des observations 



function ClasseListViewObservations(myName) {
	//alert(myName);
	this.myListViewObservName = "777";
	this.myListViewObservArray = [];
}


/*
-Si deconecté 
	1-Afficher les observations qui sont dans local storage depuis le dernier download, incluant les nouvelles observation de l'usager depuis le derniere upload.
	2-Afficher les données du dictionnaire qui sont dans le local storage (on aura pas grand données de dictionnaire alors on peut tout mettre dans le localstorage).
	 

	
-si connecté 
	1-upload des nouvelles observations de l'usager vers le serveur et download de 5 pages de 10 cellules = 50 cellules des dernièeres observations de tous le monde 
	   classées en ordre de date décroissant par le serveur
	2-Pour le dictionnaire: Flush des données du localstorage au  complet et reloader tout le dictionnaire au cas ou il y aurait eu des changement.
		C'est pas trop hot mais ca va faire la job pour le cours
	
	   
-Alors tant qu'on a pas de vraie connection avec la couche données on fonctionne avec le localstorage	   
*/



ClasseListViewObservations.prototype.downloader_les_observations_dans_localstorage = function(observation_de, observation_a) {

	//var storageObs = JSON.parse(localStorage.getItem("lsListViewObservArray")) || {},
	var storageDate = localStorage.getItem("lsListViewObservLastDate"),
	une_date = new Date(),
	//todaysDate = (date.getMonth() + 1).toString() + date.getDate().toString();
	todaysDate=agConvertDate2(une_date);
	
	//alert(storageObservationsDate+"/"+todaysDate); 
    // Vérifier si Comm existe et n'est pas trop vieux 
	//Télécharger seulement une fois par jour. Si pas date d'aujourd'hui on télécharge
    if (typeof storageObservationsDate === "undefined" || storageDate != todaysDate) 
	{

		 //alert(le_bon_url);
		try {
			
			var resourcePath = "";
				
			if(dataAdapterSwitch_dataFromIIS){
				//resourcePath = "http://xxxxxxxxxxxxxxxxxxx/xxxxxx.json?idx_de='+index_de+'&idx_a='+index_a+'";
				resourcePath = 'http://ks365406.kimsufi.com/fpilote/tp1/files.json';
			}else{
				//resourcePath = "http://listObs.json?idx_de='+index_de+'&idx_a='+index_a+'";
				resourcePath = 'json/listObs2.json';
			}		
			
			
			
			
			var request = new XMLHttpRequest();
			
			request.open("GET", resourcePath, true);
			request.onreadystatechange = function(){
				if (request.readyState == 4) {
					if (request.status == 200 || request.status == 0) {
					
						var str_output = request.responseText;
						
						//storageDate.date1 = todaysDate;

						//storageObs = str_output;
						try {
							//localStorage.setItem("lsListViewObservArray", JSON.stringify(storageObs));
							localStorage.setItem("lsListViewObservArray", str_output);
					
						
							
							
							
							localStorage.setItem("lsListViewObservLastDate", todaysDate);
							
							
							callback_de_downloader_les_observations_dans_localstorage();
							
						}
						catch (e) {
								alert("Storage failed: " + e);                
						}

					}
				}
			}
			request.send();
			
		 } catch (e) {
			//errorEvent(e);
		}
    }
    else {
	   //str_output = storageObs.output;
	   //this.fillObservsListView(str_output); 
	   //storageObs.output = str_output;
    }
					
	//return storageObs.output;
	
	
}






ClasseListViewObservations.prototype.saveObservToLocalStorage = function() {
	
	//alert(this.myListViewObservArray.length);
	
	//alert(this.myListViewObservName);
	localStorage.setItem("lsListViewObservArray", JSON.stringify(this.myListViewObservArray));
	localStorage.setItem("lsListViewObservName", this.myListViewObservName);
		
	//var myName = document.getElementById("name");
    //var age = document.getElementById("age");
    
    try {
       	localStorage.setItem("lsListViewObservArray", JSON.stringify(this.myListViewObservArray));
		localStorage.setItem("lsListViewObservName", this.myListViewObservName);
     
    }
    catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert("Error: Local Storage limit exceeds.");
        }
        else {
            alert("Error: Saving to local storage.");
        }
    }
		
		
	//alert("Image sauvegardée avec succès!");
}


ClasseListViewObservations.prototype.fillMyListViewObservArrayFromLocalStorage = function() {
	
	//alert("fillMyListViewObservArrayFromLocalStorage");
	//alert(this.myListViewObservArray.length);
		//storageFilesObservations
	var objMyName = localStorage.getItem("lsListViewObservName");
	var objMyArr = localStorage.getItem("lsListViewObservArray");
	// Vérifier si Comm existe et n'est pas trop vieux  
	if ((typeof objMyName === "undefined" ) || (typeof objMyArr === "undefined" )){
		//alert("Non");
		//Si Comm n'existe pas sur ordi ou il est trop vieux alors on le download et on le mets dans le canvas pour pouvoir le sauvegarder sur le disque
		//this.myListViewObservArray = [];
	
	}else{
		//alert("Oui");
		//alert(this.myListViewObservName);
		//alert("lsListViewObservArray: "+localStorage.lsListViewObservArray);
		
		
		if (localStorage.lsListViewObservName && localStorage.lsListViewObservName != "undefined" && localStorage.lsListViewObservName != "null") {
			this.myListViewObservName = localStorage.lsListViewObservName;
		}

		if (localStorage.lsListViewObservArray && localStorage.lsListViewObservArray != "undefined" && localStorage.lsListViewObservArray != "null") {
			
			
			this.myListViewObservArray = JSON.parse(localStorage.lsListViewObservArray); 
			
			
			
		}else{
			this.myListViewObservArray = [];
		}
	
		//alert('there are ' + localStorage.length + ' items in the storage array.');
		
		
	}
	
	
	return this.myListViewObservArray;
	

}











ClasseListViewObservations.prototype.addListViewObservCell = function(objLObservation1 ,le_index) {
	
	//var le_FlagInsertUpdate = objLObservation1.strObservFlagInsertUpdate;
	
	var le_ObservTimestamp = objLObservation1.strObservTimestamp;
	
	//var le_ObservNoAutoGenereParlaDB= objLObservation1.strObservNoAutoGenereParlaDB; 
	//var le_ObservIdDeLoiseau = objLObservation1.strObservIdDeLoiseau; 	
	
	var le_ObservNoDeLusager = objLObservation1.strObservNomDeLusager; 
	
	var le_ObservTitre = objLObservation1.strObservTitre; 
	var le_ObservDescrip = objLObservation1.strObservResume; 
	//var le_ObservDiskName = objLObservation1.strObservDiskName; 
	//var le_ObservDiskName = ""; 
	//var le_datURLPicture = objLObservation1.strObservDataURLPicture;
	//var le_datURLPicture ="";
	
	
	
	var le_PositionGPS_lat = objLObservation1.strObservLaPositionGPS_lat; 
	var le_PositionGPS_long = objLObservation1.strObservLaPositionGPS_long; 
	
	
	
		
	//alert(le_ObservTitre);
	
	var newDiv1 = document.createElement("div");
	newDiv1.setAttribute("class", "list_View_Observ");
	newDiv1.setAttribute("align", "left");
	
	newDiv1.id="liste_observation1";
	
	
	
	var em_timestamp = document.createElement("em");
	var em_timestamp_content = document.createTextNode("Date: "+le_ObservTimestamp);
	em_timestamp.setAttribute("class", "lvo_em_timestamp");
	em_timestamp.appendChild(em_timestamp_content);
	
	
	
	var em_obs_usager_id = document.createElement("em");
	var em_obs_usager_id_content = document.createTextNode("Usager: "+le_ObservNoDeLusager);
	em_obs_usager_id.setAttribute("class", "lvo_em_usager_id");	
	em_obs_usager_id.appendChild(em_obs_usager_id_content);		
	
	
	
	
	
	
	
	var h3_ObservTitre = document.createElement("h3");
	
	var h3_ObservTitre_content = document.createTextNode("Titre: "+le_ObservTitre);
	h3_ObservTitre.appendChild(h3_ObservTitre_content);
	
	
	
	
	
	
	
	var newP = document.createElement("p");
	
	var newPContent = document.createTextNode("Description: "+le_ObservDescrip);
	newP.appendChild(newPContent);	
	
	
	 //var radioHtml = "<input type='checkbox' checked='checked' name='ASXSW' value='I am Checkbox 1' ></input>";

	/*
	var newRadio = document.createElement("input");
	newRadio.setAttribute("type", "checkbox");
	//newRadio.setAttribute('checked', '');
	newRadio.setAttribute("class", "checkbox1");
*/

	var newRadio = document.createElement("input");
	newRadio.setAttribute("type", "button");
	//newRadio.setAttribute('checked', '');
	newRadio.setAttribute("class", "delete_button");
	newRadio.setAttribute("value", "Effacer");
	newRadio.setAttribute("id", "bouton_effacer_ligne");
	newRadio.addEventListener('click',function(){effacer_ligne_div(le_index)},false);
	
	
	

	var newDivTouch = document.createElement("div");
	newDivTouch.setAttribute("class", "divTouch");
	newDivTouch.addEventListener('click',function(){afficheEcranObservations(objLObservation1, le_index)},false);

	//var newP2 = document.createElement("p");
	//var newPContent2 = document.createTextNode("Coordonée GPS: "+la_coord);
	//newP2.appendChild(newPContent2);		
	
	
	
	
	newDiv1.appendChild(em_obs_usager_id);	
	newDiv1.appendChild(em_timestamp);	
	
	newDiv1.appendChild(h3_ObservTitre);		

	newDiv1.appendChild(newP);	
	newDiv1.appendChild(newDivTouch);	
	newDiv1.appendChild(newRadio);	
	
	
	//newDiv1.innerHTML = newDiv1.innerHTML +"88888888888888888888"+ radioHtml;
	
	//newDiv1.appendChild(newP2);	
	
				
	my_mainDiv = document.getElementById("div_main");  
	my_mainDiv.appendChild(newDiv1);
	

		
}


ClasseListViewObservations.prototype.ajouterUneObservationDans_myListViewObservArray = function(objUnObservation1) {
	this.myListViewObservArray.push(objUnObservation1);	

}

/*
var keyNames[]; 
var values[]; 
// iterate through array
var numKeys = localStorage.length; 
for(i=0;i<numKeys;i++) { 
    // get key name into an array 
    keyNames[i]=localStorage.key(i); 
    // use key name to retreive value and store in array 
    values[i]=localStorage.getItem(keyNames[i]); 
} 
*/










ClasseListViewObservations.prototype.checkSiIndexExiste = function(le_numero) {
	
	//var tp1DataStorage = localStorage.getItem("tp1DataStorage");
	//var myVar = this.myListViewObservArray.toString(); // assigns "Jan,Feb,Mar,Apr" to myVar.
	//alert("checkSiIndexExiste");
	
	varOutPut="0";
	
	if(localStorage.getItem("lsListViewObservArray")){
			
		var temp121 = localStorage.getItem("lsListViewObservArray");
		//console.log(temp121);
		
		
		var myArrayObject = JSON.parse(temp121);
		
		
		if (myArrayObject==null || myArrayObject=="undefined"){
			
		}else{
			//alert(le_numero+"/"+myArrayObject.length);
			//ouin ??? metton que
			if(parseInt(le_numero) < myArrayObject.length){
				varOutPut="1";
				
			}
		}

	}
	return varOutPut;
}



ClasseListViewObservations.prototype.getObservArrayLength = function(le_numero) {
	//var tp1DataStorage = localStorage.getItem("tp1DataStorage");
	//var myVar = this.myListViewObservArray.toString(); // assigns "Jan,Feb,Mar,Apr" to myVar.

	var myArrayObject = JSON.parse(localStorage.getItem("lsListViewObservArray"));
	//alert("888"+myArrayObject);
	
	varOutVal1=0;
	if (myArrayObject==null || myArrayObject=="undefined"){
		//alert("5555");
	}else{
		//alert("4444");
		varOutVal1=myArrayObject.length;
	}
	//alert("getObservArrayLength:"+myArrayObject.length);
	return varOutVal1;

}

ClasseListViewObservations.prototype.viewData = function() {
	//var tp1DataStorage = localStorage.getItem("tp1DataStorage");
	
	//var myVar = this.myListViewObservArray.toString(); // assigns "Jan,Feb,Mar,Apr" to myVar.
	alert("viewData");
	var myArrayObject = JSON.parse(localStorage.getItem("lsListViewObservArray"));
	alert(myArrayObject.length);
	for (var i=0; i<myArrayObject.length; i++){
		var personObject = myArrayObject[i];
		//alert("strObservResume: " + personObject.strObservResume, "strObservDiskName: " + personObject.strObservDiskName);
	}
	
	
	//alert(myVar);
}


ClasseListViewObservations.prototype.fillObservsListView = function() {
	
	//alert("fillObservsListView");
	
	
	for (var i=0; i < this.myListViewObservArray.length; i++){
		//var theObject = this.myListViewObservArray[i];
		
		
		//ici ici ici
		
		//this.addFichiersListViewCell(localString.result[i].id, localString.result[i].filename, localString.result[i].url, localString.result[i].description, localString.result[i].registered)

	
		
		
	
		
		
		this.addListViewObservCell(this.myListViewObservArray[i],  i);
		
		//le_id, le_non_fich, le_url, la_descrip, la_date_eng
	}
	//alert("fillObservsListView end");
	//alert(myVar);
}
/*

function deleterow(node) 
{ 

//alert(node);
	var tr = node.parentNode; 
	while (tr.tagName.toLowerCase() != "tr") 
	{//alert("Cherche node/"+node);
		tr = tr.parentNode; 
		//rowNum=rowNum-1;
	}
	
	tr.parentNode.removeChild(tr); 
	//alert("tr.parentNode.removeChild");
} 

*/




ClasseListViewObservations.prototype.removeAllObservFromListView = function() {	
	
	var element = document.getElementById("div_main");

	//alert("removeAllObservFromListView: "+element.childNodes.length);
	for (var i=0; i < element.childNodes.length; i++){
		var theObject = element.childNodes[i];		
		
		//alert(theObject.className);
		if(theObject.className == "list_View_Observ"){
			//alert(theObject.className);
			theObject.parentNode.removeChild(theObject);
			i=-1;		
			//element.removeChild(theObject);
		}
	}
}




ClasseListViewObservations.prototype.clearMyListViewObservArray = function() {
	this.myListViewObservArray.splice(0, this.myListViewObservArray.length);
}

ClasseListViewObservations.prototype.removeSelectedObservsFromListView = function() {
	var les_lignes = document.getElementsByClassName('list_View_Observ');
	//alert(les_lignes.length+"/"+this.myListViewObservArray.length);
	for (var i=0; i < les_lignes.length; i++){
		var theObject = les_lignes[i];		
		var le_checkBox = theObject.getElementsByClassName('checkbox1');
		//alert(le_checkBox.length);
		if(le_checkBox[0].checked == true){	
			this.myListViewObservArray.splice(i,1);
			//alert("99999");	
			theObject.parentNode.removeChild(theObject);
			i=-1;		
		}			
	}
}


ClasseListViewObservations.prototype.deleteUneObservationFromListViewButton = function(l_indx) {
	
	
	
	var les_lignes = document.getElementsByClassName('list_View_Observ');	
	var theObject = les_lignes[l_indx];	
	this.myListViewObservArray.splice(l_indx,1);
	theObject.parentNode.removeChild(theObject);
	
		
}




