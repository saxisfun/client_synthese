/*
	agObservation.js
*/
	
function ClasseObservation() {
   

	 //alert(strNom);
	 
	
	var tempDate = new Date().getTime();
	tempDate = parseFloat(tempDate); 
	
	this.strObserv_DateObservation = tempDate; 
	
	//new Date().getTime();
	
	this.strObserv_Id = 0; 
	this.strObserv_IDOiseau = 0; 
	this.strObserv_IDUsager = 0; 

	this.strObserv_Titre = ""; 
	this.strObserv_Resume = "";

	this.arrObservLesPhotos = [];	
	
	this.strObserv_Position_lat = 0; 
	this.strObserv_Position_long = 0; 
	
	this.strObservFlagInsertUpdate = ""; 
	
	
	

	 
}

ClasseObservation.prototype.ajouterUneAutrePhotoALobservation = function(str_la_Id, dataURL_la_Photo, str_la_Photo_Descrip, str_la_IDObservation, str_la_ImageMiniature, str_la_Photo_Commentaire) {
	
	var photoObject1 = new ClassePhoto();
	
	
	photoObject1.strPhoto_Id = parseInt(str_la_Id, 10);
	photoObject1.strPhoto_Image = dataURL_la_Photo;	
	photoObject1.strPhoto_Description = str_la_Photo_Descrip;
	photoObject1.strPhoto_IDObservation = parseInt(str_la_IDObservation, 10);
	photoObject1.strPhoto_ImageMiniature = str_la_ImageMiniature;
	photoObject1.strPhoto_Commentaire = str_la_Photo_Commentaire;
	
	
	
	

	this.arrObservLesPhotos.push(photoObject1);	
	

	
	
	
}