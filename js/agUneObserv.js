/*
	agObservation.js
*/
	
function ClasseObservation() {
   

	 //alert(strNom);
	 
	this.strObservFlagInsertUpdate = ""; 
	this.strObservTimestamp = ""; 
	
	//new Date().getTime();
	
	this.strObservNoAutoGenereParlaDB = ""; 
	this.strObservNomDeLusager = ""; 
	this.strObservTitre = ""; 
	this.strObservResume = "";
	//this.strObservDiskName = "";
	//this.strObservDataURLPicture = "";	
	this.arrObservLesPhotos = [];	
	
	this.strObservLaPositionGPS_lat = ""; 
	this.strObservLaPositionGPS_long = ""; 
	
	
	
	
	

	 
}

ClasseObservation.prototype.ajouterUneAutrePhotoALobservation = function(str_la_Photo_Descrip, str_la_Photo_DiskName, dataURL_la_Photo) {
	
	var photoObject1 = new ClassePhoto();
	photoObject1.strPhotoDescrip = str_la_Photo_Descrip;
	photoObject1.strPhotoDiskName = str_la_Photo_DiskName;
	photoObject1.dataURLPhoto = dataURL_la_Photo;	
	
	this.arrObservLesPhotos.push(photoObject1);	
	
}