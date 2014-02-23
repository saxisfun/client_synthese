/*
	agObservation.js
*/
	
function ClasseObservation() {
   

	 //alert(strNom);
	 

	this.strObservNoAutoGenereParlaDB = ""; 
	this.strObservNoDeLusager = ""; 
	this.strObservTitre = ""; 
	this.strObservResume = "";
	this.strObservDiskName = "";
	this.strObservDataURLPicture = "";	
	this.arrObservArrayLesObjetsPhotos = [];	
	
	this.strObservLaPositionGPS_lat = ""; 
	this.strObservLaPositionGPS_long = ""; 
	
	this.strObservFlagInsertUpdate = ""; 
	
	
	

	 
}

ClasseObservation.prototype.ajouterUneAutrePhotoALobservation = function(str_la_Photo_Descrip, str_la_Photo_DiskName, dataURL_la_Photo) {
	
	var photoObject1 = new ClassePhoto();
	photoObject1.strPhotoDescrip = str_la_Photo_Descrip;
	photoObject1.strPhotoDiskName = str_la_Photo_DiskName;
	photoObject1.dataURLPhoto = dataURL_la_Photo;	
	
	this.arrObservArrayLesObjetsPhotos.push(photoObject1);	
	
}